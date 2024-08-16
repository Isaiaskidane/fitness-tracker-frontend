const initialState = {
    activities: [],
    loading: true,
    error: null,
  };
  
  export default function activityReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_ACTIVITIES_SUCCESS':
        return {
          ...state,
          activities: action.payload,
          loading: false,
        };
      case 'FETCH_ACTIVITIES_ERROR':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  