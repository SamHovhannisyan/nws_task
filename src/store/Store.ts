import { createStore, applyMiddleware, combineReducers, Store } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";

const store: Store<any> & {
  dispatch: DispatchType;
} = createStore(
  combineReducers({
    dataReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
