import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  userDetailsReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateProfileReducer,
} from "./Reducers/userReducers";

const instialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const reducer = combineReducers({
  userSignIn: userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  instialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
