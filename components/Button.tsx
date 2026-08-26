import React, { ButtonHTMLAttributes, FC } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variation?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({
  children,
  variation = "primary",
  ...props
}) => (
  <button
    {...props}
    className={`title mr-3 rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out ${
      variation === "primary"
        ? "bg-lime-500 hover:bg-transparent border-transparent hover:border-lime-500 border-2 text-gray-100 hover:text-lime-500 box-border"
        : "transparent border-2 border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-gray-100 box-border"
    }`}
  >
    {children}
  </button>
);

export default Button;
