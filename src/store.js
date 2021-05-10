import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootRerducer from "./redux";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootRerducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
