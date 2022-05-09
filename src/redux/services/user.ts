import request from "../../utils/api";

export const getUsersService = () => request("/users");
