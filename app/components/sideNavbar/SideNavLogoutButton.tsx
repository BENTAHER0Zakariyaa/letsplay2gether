"use client";
import React, { MouseEventHandler, useState } from "react";
import { IconType } from "react-icons";

interface SideNavLogoutButtonProps {
  label: string;
  icon: IconType;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const SideNavLogoutButton: React.FC<SideNavLogoutButtonProps> = ({
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
        bg-danger/10
        hover:bg-danger/50
        hover:text-danger
        `}
      >
        <span>
          <Icon size={28} className="mr-[16px]" />
        </span>
        <span className="text-[16px] ">{label}</span>
      </button>
    </li>
  );
};
