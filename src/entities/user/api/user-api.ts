import { baseApi } from "@/shared";
import { UserResponseSchema, type UserResponse } from "../model/user-schema";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserProfile: build.query<UserResponse, string>({
      query: (userId) => `/profile/${userId}`,
      transformResponse: (response: unknown) => {
        const result = UserResponseSchema.safeParse(response); // Проверяем ответ с помощью Zod

        if (!result.success) {
          console.error("Zod validation failed:", result.error);
          throw new Error("Invalid API response format");
        }

        return result.data;
      },
    }),
  }),
});

export const { useGetUserProfileQuery } = userApi;
