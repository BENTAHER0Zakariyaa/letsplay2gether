"use client";
import React from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import { Modal } from "./Modal";
import { Diver } from "../utils/Diver";
import { Input } from "../utils/Input";
import { Heading } from "../utils/Heading";
import { RadioButton } from "../utils/RadioButton";

export const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

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
      <div
        className="
            flex
            space-x-[16px]
        "
      >
        <Input placeholder="joo" type="firstName" label={"First Name"} />
        <Input placeholder="foo" type="lastName" label={"Last Name"} />
      </div>

      <Input placeholder="jooFoo@mail.com" type="email77" label={"Email"} />
      <Input placeholder="*******" type="password77" label={"Password"} />
      <div
        className="
            flex
            flex-col
        "
      >
        <div className={`text-sm`}>Gender</div>
        <div
          className="
            flex
            space-x-[16px]
            mt-[4px]
        "
        >
          <RadioButton label="Male" name="gender" isChecked value="male" />
          <RadioButton label="Female" name="gender" value="female" />
        </div>
      </div>
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
        Create an account
      </button>
    </div>
  );
  const footerContent = (
    <>
      <p>
        Already have an account? {` `}
        <span
          className={`
      text-primary
      hover:text-primary/90
      cursor-pointer
    `}
          onClick={() => {
            registerModal.onClose();
            loginModal.onOpen();
          }}
        >
          Log In
        </span>
      </p>
    </>
  );

  return (
    <Modal
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      title="Register"
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
