"use client";

import useLoginModal from "../hooks/useLoginModal";
import useRegisterModal from "../hooks/useRegisterModal";
import { LoginModal } from "./modals/LoginModal";
import { RegisterModal } from "./modals/RegisterModal";

export const ClientSide = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <>
      <LoginModal isOpen={loginModal.isOpen} />
      <RegisterModal isOpen={registerModal.isOpen} />
    </>
  );
};
