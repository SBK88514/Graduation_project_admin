
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";

import NavAdmin from "./components/section/NavAdmin";
import NavPublic from "./components/section/NavPublic";

// import useContext isAuth State to App component

import { AuthContext } from "./components/contexts/AuthContext";
import EmployeeModal from "./components/modals/employeeModal";
import ModalManager from "./components/modals/ModalManager";

function Root({ isAuth }) {
  console.log(isAuth);
  return (
    <>
      {isAuth ? <NavAdmin /> : <NavPublic />}
      <Outlet />
      <EmployeeModal />
      {/* <AddIssueForm /> */}
      <ModalManager />
    </>
  );
}

function App() {
  const { isAuth } = useContext(AuthContext);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root isAuth={isAuth} />}>
        {/* Public Routes */}
        <Route
          element={isAuth ? <Navigate to={"/welcomeadmin"} /> : <Outlet />}
        >
          <Route
            path="login"
            lazy={async () => ({
              Component: (await import("./components/pages/publikPages/Login"))
                .default,
            })}
          />
        </Route>
        <Route
          path="welcomeadmin"
          lazy={async () => ({
            Component: (
              await import("./components/pages/privatePages/WelcomeAdmin")
            ).default,
          })}
        />

        {/* Private Routes */}
        <Route
          path="addmanager"
          lazy={async () => ({
            Component: (await import("./components/pages/forms/AddManagerForm"))
              .default,
          })}
        />
        <Route
          path="allemployees"
          lazy={async () => ({
            Component: (
              await import("./components/pages/privatePages/AllEmployees")
            ).default,
          })}
        />
        <Route
          path="addemployee"
          lazy={async () => ({
            Component: (
              await import("./components/pages/forms/AddEmployeeForm")
            ).default,
          })}
        />
        <Route


          path="allmanagers"
          lazy={async () => ({
            Component: (
              await import("./components/pages/privatePages/AllManagers")
            ).default,
          })}
        />
        <Route
          path="addissue"
          lazy={async () => ({
            Component: (
              await import("./components/pages/forms/AddIssueForm")
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
