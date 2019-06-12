import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import useTodoState from './useTodoState'

const Todo = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([])

  return (
    <>
      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            addTodo(trimmedText)
          }
        }}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </>
  )
}

export default Todo