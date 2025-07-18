import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL || ""}/api/`,
    credentials: "include", // This ensures cookies are sent with requests
  }),
  tagTypes: ["Order", "AdminOrders", "UserOrders", "Coupons"],
  endpoints: (builder) => ({
    createNewOrder: builder.mutation({
      query(body) {
        return {
          url: "/orders/createOrder",
          method: "POST",
          body,
        };
      },
    }),
    myOrders: builder.query({
      query: () => `/orders/getOrdersByUser`,
    }),
    orderDetails: builder.query({
      query: (id) => `/orders/${id}`,
      providesTags: ["Order"],
    }),
    razorpayCheckoutSession: builder.mutation({
      query(body) {
        return {
          url: "/payments/session",
          method: "POST",
          body,
        };
      },
    }),
    razorpayWebhook: builder.mutation({
      query(body) {
        return {
          url: "/payments/webhook",
          method: "POST",
          body,
        };
      },
    }),
    getAdminOrders: builder.query({
      query: () => `/admin/orders`,
      providesTags: ["AdminOrders"],
    }),
    updateOrder: builder.mutation({
      query({ id, body }) {
        return {
          url: `/admin/orders/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Order"],
    }),
    deleteOrder: builder.mutation({
      query(id) {
        return {
          url: `/admin/orders/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["AdminOrders"],
    }),
    createCoupon: builder.mutation({
      query(body) {
        return {
          url: "/admin/coupon/new",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Coupons"],
    }),
    getCoupons: builder.query({
      query: () => "/admin/coupons",
      providesTags: ["Coupons"],
    }),
    updateCoupon: builder.mutation({
      query({ id, body }) {
        return {
          url: `/admin/coupon/update/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Coupons"],
    }),
    deleteCoupon: builder.mutation({
      query(id) {
        return {
          url: `/admin/coupon/delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Coupons"],
    }),
    checkCoupon: builder.mutation({
      query(body) {
        return {
          url: "/coupon/check",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Coupons"],
    }),
    applyCoupon: builder.mutation({
      query(body) {
        return {
          url: "/coupon/apply",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Coupons"],
    }),
    uploadKidsImage: builder.mutation({
      query(body) {
        return {
          url: "/orders/uploadImage",
          method: "POST",
          body,
        };
      },
    }),
    deleteSessionOrder: builder.mutation({
      query: (sessionOrderId) => ({
        url: `/payments/session/${sessionOrderId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateNewOrderMutation,
  useRazorpayCheckoutSessionMutation,
  useRazorpayWebhookMutation,
  useMyOrdersQuery,
  useOrderDetailsQuery,
  useGetAdminOrdersQuery,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
  useCreateCouponMutation,
  useGetCouponsQuery,
  useUpdateCouponMutation,
  useDeleteCouponMutation,
  useCheckCouponMutation,
  useApplyCouponMutation,
  useUploadKidsImageMutation,
  useDeleteSessionOrderMutation,
} = orderApi;
