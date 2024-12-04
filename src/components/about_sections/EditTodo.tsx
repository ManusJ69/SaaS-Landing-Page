"use client"
import ModalEdit from "./ModalEdit";
import axios from "axios"
import React, { useState, useEffect, FC } from "react"

const BASE_URL = "https://6747fe035801f515358ed5de.mockapi.io/id"

export const EditTodo: FC = (props) => {
    const id = props.id
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [todo, setTodo] = useState({
    name: "",
    status: ""
  })

  async function fetchTodoID(todoId: number) {
    try {
        const response = await axios.get(`${BASE_URL}/${todoId}`)
        setTodo(response.data)
    } catch (error) {
        console.log("error", error)
    }
  }

  useEffect(() => {
    fetchTodoID(id)
  }, [id])

  function nameChange(event: any) {
    setTodo((previousState) => ({
      ...previousState,
      name: event.target.value
    }))
  }

  async function updateTask() {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, {
        name: todo.name,
        status: todo.status
      })
      setIsModalOpen(false)
      const logMsg = "Update"
      alert("Update Successful!")
      console.log(logMsg)
  } catch (error) {
      console.log("error", error)
  }
  }

  function statusChange(event: any) {
    setTodo((previousState) => ({
      ...previousState,
      status: event.target.value
    }))
  }

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">Edit task</button>

      <ModalEdit isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
        <div className="container">
            <div className="justify-center text-center">Edit task</div>
            <div className="flex flex-col">
                <div>
                    ID: {todo.id}
                </div>
                <div>
                    Task: {todo.name}
                </div>
                <div>
                    Task: <input type="text" value={todo.name} onChange={nameChange} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div>
                    Status: {todo.status}
                </div>
                <div>
                    Status: <input type="text" value={todo.status} onChange={statusChange} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div>
                    <button
                        className="btn btn-primary w-full"
                        onClick={updateTask}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
      </ModalEdit>
    </div>
  );
};