const initialState = {
  posts: [],
  loading: false,
  error: null
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {...state, loading: true}
    case 'FETCH_POSTS_SUCCESS':
      return {...state, loading: false, posts: [...posts, action.payload]}
    case 'FETCH_POSTS_ERROR':
      return {...state, loading: false, error: action.payload}  
    default:
      return state
  }
}