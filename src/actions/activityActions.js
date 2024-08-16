import axios from 'axios';

export const fetchActivities = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/activities', {
      headers: { 'x-auth-token': localStorage.getItem('token') },
    });
    dispatch({
      type: 'FETCH_ACTIVITIES_SUCCESS',
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: 'FETCH_ACTIVITIES_ERROR',
      payload: err.response.data.msg,
    });
  }
};

export const addActivity = (activity) => async (dispatch) => {
  try {
    const res = await axios.post('/api/activities', activity, {
      headers: { 'x-auth-token': localStorage.getItem('token') },
    });
    dispatch(fetchActivities()); // Refresh the list
  } catch (err) {
    console.error(err.response.data.msg);
  }
};
