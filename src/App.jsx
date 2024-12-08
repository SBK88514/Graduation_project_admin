import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";

import Nav from "./components/pages/Nav";

// import useContext isAuth State to App component
import { AuthContext } from "./components/contexts/AuthContext";

function Root({ isAuth }) {
  console.log(isAuth);
  return (
    <>
      {isAuth && <Nav />}
      <Outlet />
    </>
  );
}

function App() {
  const { isAuth } = useContext(AuthContext);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root isAuth={isAuth} />}>
        <Route
          path="login"
          lazy={async () => ({
            Component: (await import("./components/pages/forms/LoginForm"))
              .default,
          })}
        />
        <Route
          path="AddEmployee"
          lazy={async () => ({
            Component: (
              await import("./components/pages/forms/AddEmployeeForm")
            ).default,
          })}
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
