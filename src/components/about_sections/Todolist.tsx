"use client"
import axios from 'axios'
import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import { AddTodo } from './AddTodo'
import { EditTodo } from './EditTodo'

const BASE_URL = 'https://6747fe035801f515358ed5de.mockapi.io/id'

function Todolist() {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchTodo() {
        try {
            const response = await axios.get(`${BASE_URL}`)
            setTodos(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log('error', error)
        }
    }

    async function deleteTodo(id: number) {
        try {
            setIsLoading(true)
            const response = await axios.delete(`${BASE_URL}/${id}`)
            const logMsg = "Delete"
            await fetchTodo()
            alert("Delete Successful!")
            setIsLoading(false)
            console.log(logMsg)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        fetchTodo()
    }, [])

  return (

    <>
        <section className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip">
            <div className="container">

                <div className="flex justify-center mt-5">
                    <div className="tag">
                        Todolist
                    </div>
                </div>

                <div className="mt-5"><AddTodo /></div>

                {
                    isLoading && <div>Loading...</div>
                }

                {
                    !isLoading &&
                    <div className="mt-5">
                        {
                            todos.map(
                                (todo) => (
                                    <div key={todo.id} className="flex gap-3 mt-3">
                                        <div>
                                            {todo.id}
                                        </div>
                                        <div>
                                            Task: {todo.name}
                                        </div>
                                        <div>
                                            Status: {todo.status}
                                        </div>
                                        {/*<div>
                                            <Link href={`/about/Edit/${todo.id}`}>
                                                Edit
                                            </Link>
                                        </div>
                                        */}
                                        <div>
                                            <EditTodo id={todo.id} />
                                        </div>
                                        <div>
                                            <button
                                                className="btn btn-primary"
                                                onClick={async () => await deleteTodo(todo.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                        
                                    </div>
                                )
                            )
                        }
                    </div>
                }
            </div>
        </section>
    </>
  )
}

export default Todolist