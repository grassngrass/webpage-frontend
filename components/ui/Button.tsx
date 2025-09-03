"use client";
import React, { FC } from "react";

interface ButtonProps {
  title: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({ title, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative px-10 py-3 border-3 border-white bg-black text-white text-3xl font-orbitron
        shadow-[4px_4px_0_0_light-green] hover:scale-90 transition-transform duration-200 ${className}`}
    >
    {title}
    </button>
  );
};

export default Button;