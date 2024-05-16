import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import todosReducer from "./Components/testRedux/state-management/reducer/Reducer";




const store = createStore(todosReducer, applyMiddleware(thunk))

export default store;