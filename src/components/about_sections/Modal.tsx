import React, { FC } from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {


  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-red-500" onClick={onClose}>
            ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;