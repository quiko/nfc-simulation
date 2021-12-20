import { LOGIN } from "./actions";

const initialState = {};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
}
