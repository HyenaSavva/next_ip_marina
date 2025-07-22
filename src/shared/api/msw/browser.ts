import { setupWorker } from "msw/browser";
import { userHandlers } from "@/entities/user/api/msw/user-handlers";

export const worker = setupWorker(...userHandlers);
