"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './AddTodo';
import { EditTodo } from './EditTodo';
import { DeleteTodo } from './daleteTodo';

const BASE_URL = 'https://6747fe035801f515358ed5de.mockapi.io/id';

type Todo = {
    id: number;
    name: string;
    status: string;
  };

function Todolist() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState(true)

    async function fetchTodo() {
        try {
            const response = await axios.get<Todo[]>(`${BASE_URL}`);
            setTodos(response.data);
            setIsLoading(false)
        } catch (error) {
            console.log('error', error);
        }
    }

    useEffect(() => {
        fetchTodo();
    }, []);

    return (
        <>
            <section className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip">
                <div className="container">
                    <div className="flex justify-center mt-5">
                        <div className="tag">Todolist</div>
                    </div>
                    <div className="mt-5"><AddTodo onClose={fetchTodo} /></div>

                    {
                        isLoading && <div>Loading...</div>
                    }       

                    {
                        !isLoading &&
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead className="bg-gray-800 text-white">
                                    <tr>
                                    <th className="px-4 py-2 border-b text-left text-sm md:text-base">ID</th>
                                    <th className="px-4 py-2 border-b text-left text-sm md:text-base">Task</th>
                                    <th className="px-4 py-2 border-b text-left text-sm md:text-base">Status</th>
                                    <th className="px-4 py-2 border-b text-left text-sm md:text-base">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {todos.map((todo) => (
                                        <tr key={todo.id} className="hover:bg-gray-100 text-sm md:text-base">
                                        <td className="px-4 py-2 border-b">{todo.id}</td>
                                        <td className="px-4 py-2 border-b">{todo.name}</td>
                                        <td className="px-4 py-2 border-b">{todo.status}</td>
                                        <td className="px-4 py-2 border-b">
                                            <div className="flex flex-col md:flex-row gap-2">
                                                <EditTodo id={todo.id} onClose={fetchTodo} />
                                                <DeleteTodo id={todo.id} onClose={fetchTodo} />
                                            </div>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }
                    
                </div>
            </section>

            
        </>
    );
}

export default Todolist;
