"use client"
import axios from "axios"
import React, { useState, useEffect } from "react"

const BASE_URL = "https://6747fe035801f515358ed5de.mockapi.io/id"

function Edit({params}) {
  const id = params.id
  const [todo, setTodo] = useState({
    name: ""
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

  async function updateName() {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, {
        name: todo.name
      })
      alert("Update Successful!")
  } catch (error) {
      console.log("error", error)
  }
  }

  return (
    <>
      <section className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip">
        <div className="container">
          <div>Hello Edit Page {id}</div>

          <div className="flex flex-col">
              <div>
                ID: {todo.id}
              </div>
              <div>
                Task: {todo.name}
              </div>
              <div>
                Task: <input type="text" value={todo.name} onChange={nameChange} />
              </div>
              <div>
                Status: {todo.status}
              </div>
              <div>
                <button
                    onClick={updateName}
                >
                    Edit
                </button>
              </div>
          </div>

        </div>
    </section>
    </>
  )
}

export default Edit