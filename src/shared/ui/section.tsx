import { FC, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "white" | "transparent";
}

export const Section: FC<SectionProps> = ({ 
  children, 
  className = "", 
  variant = "white" 
}) => {
  const baseStyles = "flex flex-col rounded-2xl overflow-hidden";
  const variantStyles = variant === "white" ? "bg-white" : "";
  
  const sectionStyles = [baseStyles, variantStyles, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionStyles}>
      {children}
    </section>
  );
};
