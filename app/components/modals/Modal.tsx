"use client";

import { useCallback, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  body: React.ReactElement;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  body,
  title,
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
              p-[32px]
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
              flex
              justify-between
              items-center
              pb-[16px]
              border-b
              border-muted
              "
              >
                <div
                  className="
                text-[20px]
                font-bold"
                >
                  {title}
                </div>
                <button onClick={handleOnClose} className="p-[8px]">
                  <MdClose size={28} />
                </button>
              </div>
              {body}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
