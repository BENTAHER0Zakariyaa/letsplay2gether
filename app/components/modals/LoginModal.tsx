"use client";
import React from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import { Modal } from "./Modal";
import { Diver } from "../utils/Diver";
import { Input } from "../utils/Input";
import { useForm } from "react-hook-form";
import { Heading } from "../utils/Heading";
import useRegisterModal from "@/app/hooks/useRegisterModal";

export const LoginModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const handleOnLogin = () => {};

  const bodyContent = (
    <div
      className="
        flex 
        flex-col
        space-y-[16px]
        mt-[16px]
        "
    >
      <Input placeholder="jooFoo@mail.com" type="email77" label={"Email"} />
      <Input placeholder="*******" type="password77" label={"Password"} />
      <div></div>
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
    </div>
  );
  const footerContent = (
    <>
      <p>
        New here? {` `}
        <span
          className={`
      text-primary
      hover:text-primary/90
      cursor-pointer
    `}
          onClick={() => {
            loginModal.onClose();
            registerModal.onOpen();
          }}
        >
          Create an account
        </span>
      </p>
    </>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      title="Login"
      body={bodyContent}
      footer={footerContent}
      disabled={false}
      actionLabel={""}
      secondaryAction={""}
      OnSecondaryAction={function (): void {
        throw new Error("Function not implemented.");
      }}
      onSubmit={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};
