import React, { useState, useContext } from 'react'
import uuid from 'uuid/v4'
import TodoContext from '../../context/dispatch'

const AddTodo = () => {
  const [task, setTask] = useState('')
  const dispatch = useContext(TodoContext)

  const handleSubmit = event => {
    event.preventDefault()
    if (task) {
      // setTodos([...todos, {
      //   id: uuid(),
      //   task: task,
      //   complete: false,
      // }])
      dispatch({
        type: 'ADD_TODO',
        task,
        id: uuid(),
      })
    }
    setTask('')
  }

  const handleChangeInput = event => {
    setTask(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChangeInput} />
    </form>
  )
}

export default AddTodo