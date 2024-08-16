import axios from 'axios';

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users/register', userData);
    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: 'REGISTER_FAIL',
      payload: err.response.data.msg,
    });
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users/login', userData);
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: 'LOGIN_FAIL',
      payload: err.response.data.msg,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};
