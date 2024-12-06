"use client";
import React, { useState, useEffect, FC } from "react";
import Modal from "./Modal";
import axios from "axios";

const BASE_URL = 'https://6747fe035801f515358ed5de.mockapi.io/id';

type Todo = {
  id: number; // หรือ string ถ้าจำเป็น
  name: string;
  status: string;
};

interface EditTodoProps {
    id: number;
    onClose: () => void;  // เพิ่ม prop สำหรับเรียกฟังก์ชันเมื่อปิด Modal
}

export const EditTodo: FC<EditTodoProps> = ({ id, onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todo, setTodo] = useState({ name: "", status: "" });

    async function fetchTodoID(todoId: number) {
        try {
            const response = await axios.get(`${BASE_URL}/${todoId}`);
            setTodo(response.data);
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        fetchTodoID(id);
    }, [id]);

    async function updateTask() {
        try {
            await axios.put(`${BASE_URL}/${id}`, {
                name: todo.name,
                status: todo.status,
            });
            setIsModalOpen(false);
            alert("Update Successful!");
            if (onClose) {
                onClose();  // เรียกฟังก์ชันที่ได้รับจาก props เมื่อปิด Modal
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
                Edit task
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="container">
                    <div className="justify-center text-center">Edit task</div>
                    <div className="flex flex-col">
                        <div>ID: {id}</div>
                        <div>Task: {todo.name}</div>
                        <div>
                            Task:{" "}
                            <input
                                type="text"
                                value={todo.name}
                                onChange={(e) => setTodo({ ...todo, name: e.target.value })}
                                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>Status: {todo.status}</div>
                        <div>
                            Status:{" "}
                            <input
                                type="text"
                                value={todo.status}
                                onChange={(e) => setTodo({ ...todo, status: e.target.value })}
                                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>
                            <button className="btn btn-primary w-full" onClick={updateTask}>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
