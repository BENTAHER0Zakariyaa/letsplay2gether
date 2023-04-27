"use client";
import React, { MouseEventHandler, useState } from "react";
import { IconType } from "react-icons";

interface SideNavLoginButtonProps {
  label: string;
  icon: IconType;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const SideNavLoginButton: React.FC<SideNavLoginButtonProps> = ({
  label,
  onClick,
  icon: Icon,
}) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`
        w-full 
        flex 
        items-center 
        rounded-[12px] 
        p-[16px] 
        bg-success/10
        hover:bg-success/50`}
      >
        <span>
          <Icon size={28} className="mr-[16px]" />
        </span>
        <span className="text-[16px] ">{label}</span>
      </button>
    </li>
  );
};
