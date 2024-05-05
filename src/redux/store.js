// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import counterReducer from './counter'
// import loggedReducer from "./isLogged";

// const reducer = combineReducers({
//   counter: counterReducer,
//   logged: loggedReducer
// })

// const store = configureStore({
//   reducer
// });


import { configureStore} from "@reduxjs/toolkit";
import counterReducer from './counter'
import loggedReducer from "./isLogged";

const store = configureStore({
  reducer:{
    counter: counterReducer,
    logged: loggedReducer
  }
});


export default store;