import type { FC, ReactNode } from "react";

type ResponsiveWrapperProps = { children?: ReactNode };

export const ResponsiveWrapper: FC<ResponsiveWrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col s:justify-center s:items-center w-screen h-screen">
      <div
        className="relative flex flex-col w-full h-full s:w-[390px] s:h-[800px] s:rounded-lg s:shadow-lg bg-gray-light"
        style={{ animation: "fadeIn 0.5s ease-in-out forwards" }}
      >
        {children}
      </div>
    </div>
  );
};
