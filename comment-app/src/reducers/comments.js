// action types
const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DEL_COMMENT = 'DEL_COMMENT'

// reducer
export default (state, action) => {
  if (!state) state = { comments: [] }
  switch (action.type) {
    case INIT_COMMENTS:
      return { comments: action.comments }
    case ADD_COMMENT:
      return { comments: [...state.comments, action.comment] }
    case DEL_COMMENT:
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state
  }
}

// action creators
export const initComments = (comments) => {
  return { type: INIT_COMMENTS, comments }
}

export const addComment = (comment) => {
  return { type: ADD_COMMENT, comment }
}

export const delComment = (commentIndex) => {
  return { type: DEL_COMMENT, commentIndex }
}
