import axios, { AxiosResponse } from "axios";

type RequestType = (
  endpoint: string,
  method?: string,
  payload?: any
) => Promise<AxiosResponse<any>>;

const apiUrl: string = "https://jsonplaceholder.typicode.com";

const request: RequestType = (endpoint, method = "GET", payload = null) => {
  const config = { headers: { Authorization: "Bearer token-here" } };

  return new Promise((resolve, reject) => {
    if (method === "GET") {
      axios
        .get(apiUrl + endpoint, config)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    } else {
      axios
        .post(apiUrl + endpoint, payload, config)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    }
  });
};

export default request;
