import type { AppDispatch, RootState } from "@/app/app-store";

import {
  type TypedUseSelectorHook,
  useSelector,
  useDispatch,
} from "react-redux";

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
