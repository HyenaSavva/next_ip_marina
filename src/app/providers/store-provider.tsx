"use client";

import { FC, ReactNode, useRef } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { makeStore, AppStore } from "../app-store";

type StoreProviderProps = {
  children?: ReactNode;
};

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const storeRef = useRef<AppStore | undefined>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <ReduxProvider store={storeRef.current}>{children}</ReduxProvider>;
};
