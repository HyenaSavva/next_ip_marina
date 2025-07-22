import { FC, ReactNode } from "react";
import { Skeleton } from "./skeleton";

interface SkeletonCardProps {
  children?: ReactNode;
  loading?: boolean;
  height?: number;
  className?: string;
}

export const SkeletonCard: FC<SkeletonCardProps> = ({
  children,
  loading = false,
  height = 80,
  className = "",
}) => {
  if (!loading) return <>{children}</>;

  return (
    <div className={`bg-white rounded-2xl ${className}`}>
      <Skeleton variant="block" height={height} className="m-2" />
    </div>
  );
};
