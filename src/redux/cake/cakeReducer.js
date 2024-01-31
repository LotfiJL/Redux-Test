import { BUY_CAKE } from "./actionsTypes";

const initialState = {
  numberOfcakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numberOfcakes: state.numberOfcakes - action.payload,
      };

    default:
      return state;
  }
};

export default cakeReducer;
