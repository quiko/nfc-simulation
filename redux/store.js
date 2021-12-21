import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import thunk from "redux-thunk";
import sessionReducer from "./reducers";


export const store = createStore(
    sessionReducer,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeWithDevTools(applyMiddleware(thunk))
  );