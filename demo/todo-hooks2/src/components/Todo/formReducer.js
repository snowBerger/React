export default (state, { type, payload }) => {
  switch (type) {
    case 'onChange':
    case 'reset':
      return payload
    default:
      return state
  }
}