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
import { AuthContext } from "./components/contexts/AuthContext";

import EmployeeModal from "./components/modals/employeeModal";
import ModalManager from "./components/modals/ModalManager";

//import mainPage components
import Offices from "./components/pages/publicPages/mainPage/Offices";
import ContactPage from "./components/pages/publicPages/mainPage/ContactPage";
import AboutPage from "./components/pages/publicPages/mainPage/AboutPage";
import LeadershipTeam from "./components/pages/publicPages/mainPage/LeadershipTeam";
import { Component } from "lucide-react";
import BackgroundLayout from "./components/ui/backgroundLayout";

function Root({ isAuth }) {
  console.log(isAuth);
  return (
    <>
      <BackgroundLayout>
        {isAuth ? <NavAdmin /> : <NavPublic />}
        <Outlet />
        <EmployeeModal />
        {/* <AddIssueForm /> */}
        <ModalManager />
      </BackgroundLayout>
    </>
  );
}

function App() {
  const { isAuth, user } = useContext(AuthContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root isAuth={isAuth} />}>
        {/* Public Routes */}
        <Route element={isAuth ? <Navigate to={"/welcomepage"} /> : <Outlet />}>
          <Route
            index
            lazy={async () => ({
              Component: (
                await import("./components/pages/publicPages/mainPage/HomePage")
              ).default,
            })}
          />
          <Route
            path="login"
            lazy={async () => ({
              Component: (await import("./components/pages/publicPages/Login"))
                .default,
            })}
          />
        </Route>
        <Route
          path="welcomepage"
          lazy={async () => ({
            Component: (
              await import("./components/pages/privatePages/WelcomePage")
            ).default,
          })}
        />

        {/* Private Routes */}
        {isAuth && user.permission === "Admin" && (
          <Route
            path="addmanager"
            lazy={async () => ({
              Component: (
                await import("./components/pages/forms/AddManagerForm")
              ).default,
            })}
          />
        )}

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
            Component: (await import("./components/pages/forms/AddIssueForm"))
              .default,
          })}
        />
        <Route
          path="allissues"
          lazy={async () => ({
            Component: (await import("./components/cards/CardIssues")).default,
          })}
        />

        {/* some routes */}
        <Route
          path="LeadershipTeam"
          lazy={async () => ({
            Component: (
              await import(
                "./components/pages/publicPages/mainPage/LeadershipTeam"
              )
            ).default,
          })}
        />
        <Route
          path="AboutPage"
          lazy={async () => ({
            Component: (
              await import("./components/pages/publicPages/mainPage/AboutPage")
            ).default,
          })}
        />
        <Route
          path="ContactPage"
          lazy={async () => ({
            Component: (
              await import(
                "./components/pages/publicPages/mainPage/ContactPage"
              )
            ).default,
          })}
        />
        <Route
          path="Offices"
          lazy={async () => ({
            Component: (
              await import("./components/pages/publicPages/mainPage/Offices")
            ).default,
          })}
        />
        {/* </Routh> */}
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
