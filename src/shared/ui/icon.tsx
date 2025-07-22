import { FC } from "react";
import Image from "next/image";

interface IconProps {
  src: string;
  alt?: string;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
}

export const Icon: FC<IconProps> = ({
  src,
  alt = "Icon",
  size,
  width,
  height,
  className,
}) => {
  const iconWidth = width || size || 24;
  const iconHeight = height || size || 24;

  return (
    <Image
      src={src}
      alt={alt}
      width={iconWidth}
      height={iconHeight}
      className={className}
    />
  );
};
