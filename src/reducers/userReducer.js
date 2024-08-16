const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    loading: true,
    error: null,
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'REGISTER_SUCCESS':
      case 'LOGIN_SUCCESS':
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user,
          loading: false,
        };
      case 'REGISTER_FAIL':
      case 'LOGIN_FAIL':
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          user: null,
          loading: false,
          error: action.payload,
        };
      case 'LOGOUT':
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          user: null,
          loading: false,
        };
      default:
        return state;
    }
  }
  