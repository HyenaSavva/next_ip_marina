import { FC, ReactNode, Suspense } from "react";

import { Navigation, Footer } from "@/widgets";
import { Skeleton } from "@/shared";

import { ResponsiveWrapper } from "./responsive-wrapper";
import { StoreProvider } from "./providers/store-provider";
import { MSWProvider } from "./providers/msw-provider";

import "./styles.css";

type AppLayoutProps = { children?: ReactNode };

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <StoreProvider>
      <html>
        <body>
          <MSWProvider>
            <ResponsiveWrapper>
              <Navigation />
              <main className="flex-1 overflow-y-auto">
                <Suspense fallback={<Skeleton />}>{children}</Suspense>
              </main>
              <Footer />
            </ResponsiveWrapper>
          </MSWProvider>
        </body>
      </html>
    </StoreProvider>
  );
};
