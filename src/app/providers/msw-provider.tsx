"use client";

import { FC, ReactNode, useEffect, useState } from "react";

interface MSWProviderProps {
  children: ReactNode;
}

export const MSWProvider: FC<MSWProviderProps> = ({ children }) => {
  const [mswReady, setMSWReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      const shouldEnableMSW =
        process.env.NEXT_PUBLIC_ENABLE_MSW === "true";

      if (shouldEnableMSW) {
        try {
          const { initMocks } = await import("@/shared/api/msw");
          await initMocks();
        } catch (error) {
          console.error("Failed to initialize MSW:", error);
        }
      }
      setMSWReady(true);
    };

    init();
  }, []);

  if (!mswReady) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-2xl font-bold">
          Setting Up Mock Service Worker...
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
