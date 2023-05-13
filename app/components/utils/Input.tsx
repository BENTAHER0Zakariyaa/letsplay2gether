import React from "react";

interface InputProps {
  placeholder: string;
  isError?: boolean;
  errorMessage?: string;
  type: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  isError,
  errorMessage,
  type,
  label,
}) => {
  return (
    <div className="flex flex-col space-y-[4px]">
      <div
        className={`
        text-sm
        ${isError ? "border-danger" : ""}
      `}
      >
        {label}
      </div>
      <input
        className={`
        py-[8px]
        px-[16px]
        w-full
        rounded-[12px]
        bg-muted
        focus:outline-none
        ${isError ? "border-danger" : ""}
      `}
        type={type}
        placeholder={placeholder}
      />
      {isError && (
        <span
          className="
          text-[12px]
          ml-[4px]
          text-danger
        "
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};
