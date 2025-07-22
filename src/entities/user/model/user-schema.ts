import { z } from "zod";

export const CitySchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const UserSchema = z.object({
  id: z.string(),
  role: z.string(),
  name: z.string(),
  nickname: z.string(),
  avatar_url: z.string(),
  age: z.number(),
  city: CitySchema,
  is_private: z.boolean(),
  telegram: z.string(),
  about: z.string(),
  points: z.number(),
  calling_limit: z.number(),
  going_limit: z.number(),
  account_status: z.string(),
  last_login_at: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  description: z.string(),
});

export const UserResponseSchema = z.object({
  data: UserSchema,
});

export type City = z.infer<typeof CitySchema>;
export type User = z.infer<typeof UserSchema>;
export type UserResponse = z.infer<typeof UserResponseSchema>;
