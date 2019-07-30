import React, { useReducer } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import todoReducer from './todoReducer'

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAdd = todoText => {
    dispatch({ type: 'addTodo', payload: todoText })
  }

  const handleDelete = todoIndex => {
    dispatch({ type: 'deleteTodo', payload: todoIndex })
  }

  return (
    <>
      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            handleAdd(trimmedText)
          }
        }}
      />
      <TodoList
        todos={todos}
        deleteTodo={handleDelete}
      />
    </>
  )
}

export default Todo