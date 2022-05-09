import { Reducer } from "@reduxjs/toolkit";
import { UserState } from "../../interfaces/user";
import {
  GET_USERS_FAILED,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "../actions/user";

const initialState: UserState = {
  isLoading: false,
  users: [],
  error: null,
};

const reducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS_REQUEST:
      return { ...state, isLoading: true };

    case GET_USERS_SUCCESS:
      return { ...state, isLoading: false, users: payload };

    case GET_USERS_FAILED:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};

export default reducer;
