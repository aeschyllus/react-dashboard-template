export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

export const getUsers = () => ({ type: GET_USERS_REQUEST });

export const getUsersSuccess = (payload: any) => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const getUsersFailed = (payload: any) => ({
  type: GET_USERS_FAILED,
  payload,
});
