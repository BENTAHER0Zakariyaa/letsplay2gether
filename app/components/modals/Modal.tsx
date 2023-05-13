"use client";

import { useCallback, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { Diver } from "../utils/Diver";

interface IModalProps {
  isOpen?: boolean;
  disabled: boolean;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  secondaryAction: string;
  OnSecondaryAction: () => void;
  onSubmit: () => void;
  onClose: () => void;
}

export const Modal: React.FC<IModalProps> = ({
  isOpen,
  disabled,
  title,
  body,
  footer,
  actionLabel,
  secondaryAction,
  OnSecondaryAction,
  onSubmit,
  onClose,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleOnClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    setShowModal(isOpen);

    return () => {};
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
      absolute
      bg-dark/60
      z-50
      h-screen 
      w-screen
      justify-center
      items-center
      flex
      overflow-x-hidden
      overflow-y-auto
      inset-0
      outline-none
      focus:outline-none
      "
      >
        <button
          onClick={handleOnClose}
          className={`
        absolute
        top-[16px]
        right-[16px]
        
        `}
        >
          <MdClose size={32} />
        </button>
        <div
          className="
            relative
            w-[438px]
            "
        >
          <div
            className={`
          translate 
          duration-300
          h-full
          ${showModal ? "translate-y-0" : "translate-y-full"}
          ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div
              className="
              translate
              bg-secondary
              py-[16px]
              px-[32px]
              rounded-[12px]
              shadow-lg
              h-auto
              flex
              flex-col
              w-full
              outline-none
              ficus:outline-none
            "
            >
              <div
                className="
                text-[18px]
                font-semibold
                text-center
                "
              >
                {title}
              </div>
              <hr className="h-px my-[16px] bg-muted border-0" />
              <div
                className="
              relative 
              flex-auto
              "
              >
                {body}
              </div>
              <div
                className={`
                mt-[16px]
              `}
              >
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
