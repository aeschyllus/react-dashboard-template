import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getUsersFailed,
  getUsersSuccess,
  GET_USERS_REQUEST,
} from "../actions/user";
import { getUsersService } from "../services/user";

function* getUsers() {
  try {
    const response: AxiosResponse = yield call(getUsersService);
    yield put(getUsersSuccess(response));
  } catch (error) {
    yield put(getUsersFailed(error));
  }
}

function* watchRequests() {
  yield all([takeLatest(GET_USERS_REQUEST, getUsers)]);
}

export default watchRequests;
