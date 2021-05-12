import {http} from "../../http";

export const fetchPosts = () => {
  return async dispatch => {
    try {
      dispatch({type: 'FETCH_POSTS'});
      const response = await http.get('posts');
      dispatch({
        type: 'FETCH_POSTS_SUCCESS',
        payload: response.data
      });
    }
    catch (e) {
      dispatch({
        type: 'FETCH_POSTS_ERROR',
        payload: 'Error while loading posts list'
      });
    }
  }
}