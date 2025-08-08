import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi"; // Assuming userApi is in the same directory
import { setUser, setIsAuthenticated, clearUser } from "../features/userSlice"; // Use @ alias

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL || ""}/api/`,
    credentials: "include", // This ensures cookies are sent with requests
    prepareHeaders: (headers, { getState }) => {
      // Set content type for JSON requests
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query(body) {
        return {
          url: "auth/register",
          method: "POST",
          body,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // Use the correct endpoint path - change 'me' to 'getme' if your route is at /api/auth/getme
          await dispatch(userApi.endpoints.getMe.initiate());
        } catch (error) {
          console.log(error);
        }
      },
    }),
    googleSignIn: builder.mutation({
      query(body) {
        return {
          url: "auth/google",
          method: "POST",
          body,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate());
        } catch (error) {
          console.log(error);
        }
      },
    }),
    login: builder.mutation({
      query(body) {
        return {
          url: "auth/login",
          method: "POST",
          body,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate());
        } catch (error) {
          console.log(error);
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // After logout, clear user state (this will now also remove token from localStorage)
          dispatch(clearUser());
          dispatch(setIsAuthenticated(false));
        } catch (error) {
          console.log(error);
          // Even if server logout fails, clear local authentication state
          dispatch(clearUser());
          dispatch(setIsAuthenticated(false));
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGoogleSignInMutation,
} = authApi;
