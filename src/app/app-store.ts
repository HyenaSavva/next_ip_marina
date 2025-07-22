import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "@/entities/user";
import { baseApi } from "@/shared";

const mainReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
