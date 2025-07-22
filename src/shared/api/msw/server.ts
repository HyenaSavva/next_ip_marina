import { setupServer } from "msw/node";
import { userHandlers } from "@/entities/user/api/msw/user-handlers";

export const server = setupServer(...userHandlers);
