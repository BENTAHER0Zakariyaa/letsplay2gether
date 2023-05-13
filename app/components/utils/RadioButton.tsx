"use client";

import React, { useState } from "react";

interface RadioButtonProps {
  isChecked?: boolean;
  value?: string;
  name: string;
  label: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  isChecked,
  name,
  value,
  label,
}) => {
  return (
    <label
      className="
    relative
    py-[8px]
    px-[16px]
    bg-mute
    rounded-[12px]
    w-full
    border-muted
    border-[2px]
    cursor-pointer
    "
    >
      <div className="flex items-center justify-between">
        <div>{label}</div>
        <input
          className={`
        form-radio
      `}
          type={`radio`}
          value={value}
          name={name}
          checked={isChecked}
        />
      </div>
    </label>
  );
};
