import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store/store";
import {
  setUser,
  setIsAuthenticated,
  setLoading,
  clearUser,
} from "../../store/features/userSlice";

interface User {
  id?: string;
  name: string;
  email: string;
  phone?: string;
}

interface UserResponse {
  success: boolean;
  user?: User; // Backend might use "user" instead of "data"
  data?: User; // Fallback for "data"
  error?: string;
}

interface AdminUsersResponse {
  success: boolean;
  user?: User[]; // Backend might use "user" for list
  data?: User[]; // Fallback for "data"
  error?: string;
}

interface UpdateProfileResponse {
  success: boolean;
  user?: User;
  data?: User;
  error?: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/auth",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token; // Adjust based on your state structure
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "AdminUsers", "AdminUser"],
  endpoints: (builder) => ({
    getMe: builder.query<User, void>({
      query: () => "getMe",
      transformResponse: (response: UserResponse) => {
        if (response.success) {
          const user = response.user || response.data;
          if (user) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              phone: user.phone || "",
            };
          }
        }
        throw new Error(response.error || "Failed to fetch user data");
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setUser({
              id: data.id || "", // Use id, not _id, fallback to empty string
              name: data.name || "",
              email: data.email || "", // Use email
              phone: data.phone || "",
            })
          );
          dispatch(setIsAuthenticated(true));
        } catch (error: any) {
          console.error("getMe error:", error);
          if (error.status === 401 || error.status === 403) {
            dispatch(clearUser());
            dispatch(setIsAuthenticated(false));
          }
        } finally {
          dispatch(setLoading(false));
        }
      },
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation<
      User,
      { name: string; email: string; phone: string }
    >({
      query(body) {
        return {
          url: "/update",
          method: "PATCH",
          body,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      transformResponse: (response: UpdateProfileResponse) => {
        if (response.success) {
          const user = response.user || response.data;
          if (user) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
            };
          }
        }
        throw new Error(response.error || "Failed to update profile");
      },
      transformErrorResponse: (response: any) => {
        return {
          status: response.status,
          message: response.data?.error || "Failed to update profile",
        };
      },
      invalidatesTags: ["User"],
    }),
    uploadAvatar: builder.mutation({
      query(body) {
        return {
          url: "update/avatar",
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),
    updatePassword: builder.mutation({
      query(body) {
        return {
          url: "password/update",
          method: "PUT",
          body,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: ({ token, body }) => ({
        url: `password/reset/${token}`,
        method: "PUT",
        body,
      }),
    }),
    forgotPassword: builder.mutation({
      query(body) {
        return {
          url: "password/forgot",
          method: "POST",
          body,
        };
      },
    }),
    getAdminUsers: builder.query<User[], void>({
      query: () => "users",
      transformResponse: (response: AdminUsersResponse) => {
        if (response.success) {
          const users = response.user || response.data;
          if (users) return users;
        }
        throw new Error(response.error || "Failed to fetch admin users");
      },
      providesTags: ["AdminUsers"],
    }),
    getUserDetails: builder.query<User, string>({
      query: (id) => `users/${id}`,
      transformResponse: (response: UserResponse) => {
        if (response.success) {
          const user = response.user || response.data;
          if (user) return user;
        }
        throw new Error(response.error || "Failed to fetch user details");
      },
      providesTags: ["AdminUser"],
    }),
    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `users/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["AdminUsers"],
    }),
    deleteUser: builder.mutation({
      query(id) {
        return {
          url: `users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["AdminUsers"],
    }),
  }),
});

export const {
  useGetMeQuery,
  useUpdateProfileMutation,
  useUploadAvatarMutation,
  useUpdatePasswordMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetAdminUsersQuery,
  useGetUserDetailsQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
