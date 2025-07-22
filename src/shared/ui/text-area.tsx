import { FC } from "react";

interface TextAreaProps {
  value: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

export const TextArea: FC<TextAreaProps> = ({
  value,
  placeholder = "",
  rows = 4,
  disabled = false,
  className = "",
  onChange,
}) => {
  const baseStyles =
    "w-full p-4 border-gray-300 rounded-2xl resize-none ellipsis whitespace-pre-wrap";

  const textAreaStyles = [
    baseStyles,
    disabled && "opacity-50 cursor-not-allowed bg-gray-100",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <textarea
      value={value}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      className={textAreaStyles}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};
