import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_ENABLE_MSW
      ? process.env.NEXT_PUBLIC_MSW_BASE_URL
      : process.env.NEXT_PUBLIC_API_BASE_URL || "",
  }),
  endpoints: () => ({}),
});
