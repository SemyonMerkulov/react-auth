const initialState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, loading: true}
    case 'LOGIN_USER_SUCCESS':
      return {...state, loading: false, user: action.payload}
    case 'LOGIN_USER_ERROR':
      return {...state, loading: false, error: action.payload}  
    case 'LOGOUT_USER':
      return {...state, user: {}}
    default:
      return state
  }
}