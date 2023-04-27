"use client";
import React from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import { Modal } from "./Modal";
import { Diver } from "../utils/Diver";
export const LoginModal = () => {
  const loginModal = useLoginModal();

  const handleOnLogin = () => {};

  const bodyContent = (
    <div
      className="
        flex 
        flex-col 
        space-y-[16px]
        mt-[30px]
        "
    >
      <input
        className="
        py-[8px]
        px-[16px]
        rounded-[12px]
        bg-dark
        border-muted
        border-[2px]
        focus:outline-none
      "
        type="email"
        placeholder="Email"
      />
      <input
        className="
        py-[8px]
        px-[16px]
        rounded-[12px]
        bg-dark
        border-muted
        border-[2px]
        focus:outline-none
      "
        type="Password"
        placeholder="password"
      />
      <button
        type="button"
        value={`Login`}
        className="
        py-[8px]
        px-[16px]
        rounded-[12px]
        bg-primary
        hover:bg-primary/50
      "
        onClick={handleOnLogin}
      >
        Login
      </button>
      <hr className="h-px my-8 bg-muted border-0" />
      <button
        type="button"
        value={`Login`}
        className="
        py-[8px]
        px-[16px]
        rounded-[12px]
        bg-dark
        border-muted
        border-[2px]
        hover:bg-dark/50
      "
        onClick={() => {
          loginModal.onClose();
        }}
      >
        Create an account
      </button>
    </div>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      title="Login"
      body={bodyContent}
    />
  );
};
