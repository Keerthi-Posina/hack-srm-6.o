import type React from "react";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary = false,
  onClick,
}) => {
  const baseClasses =
    "px-6 py-3 rounded-full font-semibold text-sm transition duration-300 ease-in-out";
  const primaryClasses =
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300";
  const secondaryClasses =
    "bg-white text-blue-600 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200";

  return (
    <button
      className={`${baseClasses} ${
        primary ? primaryClasses : secondaryClasses
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
