import { BUY_ICECREAM } from "./ActionTypes";

const initialState = {
  numberOfIcecream: 20,
};

const IcecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numberOfIcecream: state.numberOfIcecream - 1,
      };

    default:
      return state;
  }
};

export default IcecreamReducer;
