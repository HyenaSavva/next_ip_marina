import { FC } from "react";

interface SkeletonProps {
  className?: string;
  variant?: "block" | "circle" | "line";
  width?: string | number;
  height?: string | number;
  animate?: boolean;
}

export const Skeleton: FC<SkeletonProps> = ({
  className = "",
  variant = "block",
  width,
  height,
  animate = true,
}) => {
  const baseStyles = "bg-gray-300";
  const animationStyles = animate ? "animate-pulse" : "";

  const variantStyles = {
    line: "h-4 rounded-md",
    circle: "rounded-full",
    block: "rounded-2xl",
  };

  const styles = [
    baseStyles,
    variantStyles[variant],
    animationStyles,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inlineStyles = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return <div className={styles} style={inlineStyles} />;
};
