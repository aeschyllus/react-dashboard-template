import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Sidenav from "./components/Sidenav";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Users from "./pages/Users";
import "react-toastify/dist/ReactToastify.min.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

interface WebRoute {
  path: string;
  element: JSX.Element;
  withNav: boolean;
}

const App = () => {
  const routes: WebRoute[] = [
    { path: "/login", element: <Login />, withNav: false },
    { path: "/", element: <Home />, withNav: true },
    { path: "/users", element: <Users />, withNav: true },
  ];

  const renderWithNav = (route: WebRoute) => {
    return route.withNav ? <Sidenav>{route.element}</Sidenav> : route.element;
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={renderWithNav(route)}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
