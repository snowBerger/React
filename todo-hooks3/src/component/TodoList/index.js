import React, { useContext } from 'react'
import TodoContext from '../../context/dispatch'

const TodoItem = ({ todo }) => {
  const dispatch = useContext(TodoContext)

  // const handleChangeCheckbox = id => {
  //   setTodos(todos.map(todo => {
  //     if (todo.id === id) return { ...todo, complete: !todo.complete }
  //     else return todo
  //   }))
  // }
  const handleChangeCheckbox = todo => {
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    })
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          // onChange={() => handleChangeCheckbox(todo.id)}
          onChange={() => handleChangeCheckbox(todo)}
        />
        {todo.task}
      </label>
    </li>
  )
}

const TodoList = ({ todos }) => {
  return (
    <ul>
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      }
    </ul>
  )
}

export default TodoList