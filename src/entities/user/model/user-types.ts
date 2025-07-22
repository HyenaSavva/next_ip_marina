export type { City, User, UserResponse } from "./user-schema";

import type { User } from "./user-schema";

export interface UserState {
  user: User | null;
}
