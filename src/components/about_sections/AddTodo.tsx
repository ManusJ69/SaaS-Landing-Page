import { FC, useState } from "react";
import Modal from "./Modal";

export const AddTodo: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="btn btn-primary w-full">Add new task</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="container">
            <div className="justify-center text-center">Add new task</div>
            <div className="mt-5">
                Task: <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mt-5">
                Status: <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="btn btn-primary w-full mt-5">
                <button>
                    Add
                </button>
            </div>
        </div>
      </Modal>
    </div>
  );
};