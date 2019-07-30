export default (state, { type, payload }) => {
  switch (type) {
    case 'addTodo':
      return [...state, payload]
    case 'deleteTodo':
      const newTodos = state.filter((_, index) => index !== payload);
      return newTodos
    default:
      return state
  }
}
