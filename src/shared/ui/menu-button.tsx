import { FC, ReactNode } from "react";
import { Icon } from "./icon";

interface MenuButtonProps {
  children: ReactNode;
  leftIcon?: string;
  rightElement?: ReactNode;
  iconSize?: number;
  className?: string;
}

export const MenuButton: FC<MenuButtonProps> = ({
  children,
  leftIcon,
  rightElement,
  iconSize = 24,
  className = "",
}) => {
  const baseStyles =
    "flex w-full items-center justify-between py-4 px-4 overflow-hidden text-ellipsis whitespace-nowrap";
  const defaultStyles =
    "bg-white py-3 px-6 hover:bg-gray-200 transition-colors duration-200 cursor-pointer";
  const buttonStyles = `${baseStyles} ${className || defaultStyles}`;

  return (
    <div className={buttonStyles}>
      <div className="flex items-center gap-3">
        {leftIcon && <Icon src={leftIcon} size={iconSize} />}
        {children}
      </div>
      {rightElement && rightElement}
    </div>
  );
};
