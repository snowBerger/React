import React from 'react'
import TextField from '@material-ui/core/TextField'
import useFormState from './useFormState'

const TodoForm = ({ saveTodo }) => {
  const { value, onChange, reset } = useFormState('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveTodo(value);
        reset();
      }}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  )
}

export default TodoForm