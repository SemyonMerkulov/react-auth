import {http} from "../../http";

export const loginUser = (user, history) => {
  return async dispatch => {
    try {
      dispatch({type: 'LOGIN_USER'});
      if (user.name === 'admin' && user.password === '123456') {
        const response = await http.get(`/users?id=7`);
        const user = {
          id: response.data[0].id,
          name: response.data[0].name,
          email: response.data[0].email
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({
          type: 'LOGIN_USER_SUCCESS',
          payload: user
        });
        history.push('/');
      } 
      else {
        throw new Error("wrong password or/and username"); 
      }       
    }
    catch (e) {
      dispatch({
        type: 'LOGIN_USER_ERROR',
        payload: e.message
      });
    }
  }
}

export const logoutUser = history => {
  return dispatch => {
    localStorage.removeItem('user');
    dispatch({
      type: 'LOGOUT_USER'
    });
    history.push('/auth');
  }  
}