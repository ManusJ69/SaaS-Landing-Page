import React, { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-1000 w-full h-full">
      <div className="relative bg-white p-5 rounded-md max-w-[500px] w-full">
        <button className="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-red-500" onClick={onClose}>
            ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;