"use client";
import React, { useState, FC } from "react";
import Modal from "./Modal";
import axios from "axios";

const BASE_URL = 'https://6747fe035801f515358ed5de.mockapi.io/id';

interface DeleteProps {
    id: number;
    onClose: () => void;  // เพิ่ม prop สำหรับเรียกฟังก์ชันเมื่อปิด Modal
}

export const DeleteTodo: FC<DeleteProps> = ({ id, onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function deleteTodo() {        
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            alert("Delete Successful!");
            setIsModalOpen(false);  // ปิด Modal หลังการลบ
            if (onClose) {
                onClose();  // เรียกฟังก์ชันที่ได้รับจาก props เมื่อปิด Modal
            }
        } catch (error) {
            console.log('error', error);
        }
    }

    const closeDeleteModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
                Delete task
            </button>

            {/* Modal สำหรับการยืนยันการลบ */}
            
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className="container">
                        <div className="text-center mb-5">Are you sure you want to delete this task?</div>
                        <div className="flex justify-center gap-4">
                            <button 
                                className="btn btn-danger  hover:bg-green-700"
                                onClick={deleteTodo}
                            >
                                Yes, delete
                            </button>
                            <button 
                                className="btn btn-secondary  hover:bg-red-500"
                                onClick={closeDeleteModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal>
            
        </div>
    );
};