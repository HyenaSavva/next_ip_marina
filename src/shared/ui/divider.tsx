import { FC } from "react";

interface DividerProps {
  width?: string;
  className?: string;
}

export const Divider: FC<DividerProps> = ({
  width = "90%",
  className = "",
}) => {
  return (
    <span
      className={`border-1 border-gray-300 self-center ${className}`}
      style={{ width }}
    />
  );
};
