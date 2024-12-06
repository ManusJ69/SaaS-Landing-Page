"use client";
import { FC, useState, ChangeEvent } from "react";
import Modal from "./Modal";
import axios from "axios";

// กำหนดประเภทของ Todo
interface Todo {
  id: number;
  name: string;
  status: string;
}

interface AddTodoProps {
  onClose: () => void;  // เพิ่ม prop สำหรับเรียกฟังก์ชันเมื่อปิด Modal
}

const BASE_URL = "https://6747fe035801f515358ed5de.mockapi.io/id";

export const AddTodo: FC<AddTodoProps> = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  async function addTask() {
    try {
      const response = await axios.post<Todo>(`${BASE_URL}`, {
        name: name,
        status: status,
      });
      setIsModalOpen(false);
      alert("Add task Successful!");
      if (onClose) {
        onClose();  // เรียกฟังก์ชันที่ได้รับจาก props เมื่อปิด Modal
      }
      console.log("Add task");
    } catch (error) {
      console.log("Error adding task:", error);
    }
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleStatusChange(event: ChangeEvent<HTMLInputElement>) {
    setStatus(event.target.value);
  }

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="btn btn-primary w-full">
        Add new task
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="container">
          <div className="justify-center text-center">Add new task</div>
          <div className="mt-5">
            Task: 
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mt-5">
            Status: 
            <input
              type="text"
              value={status}
              onChange={handleStatusChange}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="btn btn-primary w-full mt-5">
            <button
              className="btn btn-primary w-full"
              onClick={addTask}
            >
              Add
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
