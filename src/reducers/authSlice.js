import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  },
  reducers: {
    registerSuccess: (state, action) => {
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    registerFail: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  }
});

export const { registerSuccess, registerFail } = authSlice.actions;

export const register = ({ username, email, password }) => async dispatch => {
  try {
    const res = await axios.post('/api/users/register', { username, email, password });
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFail());
  }
};

export default authSlice.reducer;
