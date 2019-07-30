import React, { useReducer } from 'react'
import uuid from 'uuid/v4'
import Filter from './component/Filter'
import AddTodo from './component/AddTodo'
import TodoList from './component/TodoList'
import TodoContext from './context/dispatch'

const initialTodos = [
  {
    id: uuid(),
    task: 'Learn React',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn Firebase',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn GraphQL',
    complete: false,
  },
]

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL';
    case 'SHOW_COMPLETE':
      return 'COMPLETE';
    case 'SHOW_INCOMPLETE':
      return 'INCOMPLETE';
    default:
      throw new Error();
  }
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) return { ...todo, complete: true }
        else return todo
      })
    case 'UNDO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) return { ...todo, complete: false }
        else return todo
      })
    case 'ADD_TODO':
      return [...state, {
        id: action.id,
        task: action.task,
        complete: false,
      }]
    default:
      throw new Error()
  }
}

const App = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos)
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL')

  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') return true
    if (filter === 'COMPLETE' && todo.complete) return true
    if (filter === 'INCOMPLETE' && !todo.complete) return true
    return false
  })

  return (
    <TodoContext.Provider value={dispatchTodos}>
      <AddTodo />
      <Filter dispatch={dispatchFilter} />
      <TodoList todos={filteredTodos} />
    </TodoContext.Provider>
  )
}

export default App
