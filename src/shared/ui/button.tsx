import { FC, ReactNode } from "react";
import { Icon } from "./icon";

interface ButtonProps {
  children: ReactNode;
  leftIcon?: string;
  rightIcon?: string;
  iconSize?: number;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  iconSize = 24,
  className = "",
}) => {
  const baseStyles =
    "flex items-center justify-center gap-2 py-3 px-6 transition-colors duration-200 cursor-pointer";
  const defaultStyles = "bg-white hover:bg-gray-300";
  const buttonStyles = `${baseStyles} ${className || defaultStyles}`;

  return (
    <button className={buttonStyles}>
      {leftIcon && <Icon src={leftIcon} size={iconSize} />}
      {children}
      {rightIcon && <Icon src={rightIcon} size={iconSize} />}
    </button>
  );
};
