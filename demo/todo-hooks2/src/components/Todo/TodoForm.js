import React, { useReducer } from 'react'
import TextField from '@material-ui/core/TextField'
import formReducer from './formReducer'

const TodoForm = ({ saveTodo }) => {
  const [value, dispatch] = useReducer(formReducer, '')

  const handleChange = event => {
    dispatch({ type: 'onChange', payload: event.target.value })
  }

  const handleReset = () => {
    dispatch({ type: 'reset', payload: '' })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveTodo(value);
        handleReset();
      }}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={handleChange}
        value={value}
      />
    </form>
  )
}

export default TodoForm