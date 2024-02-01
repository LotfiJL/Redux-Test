import * as actions from "./actionTypes";
const initialState = {
  loading: false,
  users: [],
  error: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case actions.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case actions.FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
