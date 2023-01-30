import {createStore,combineReducers, applyMiddleware } from "redux";
// import {configureStore} from "@reduxjs/toolkit"
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer } from "./reducers/userReducers";
import { noteCreateReducer, noteDeleteReducer, noteListReducer, noteUpdateReducer } from "./reducers/noteReducers";




const reducer = combineReducers({
    userLogin:userLoginReducer,
    noteList: noteListReducer,
    noteCreate: noteCreateReducer,
    noteUpdate: noteUpdateReducer,
    noteDelete: noteDeleteReducer,
  
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;


const initialState = {
  userLogin: { userInfo: userInfoFromStorage },

};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store