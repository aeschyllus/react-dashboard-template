import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import user from "./reducers/user";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { user },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
