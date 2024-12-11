// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
//   Outlet,
//   Navigate,
// } from "react-router-dom";
// import Login from "./components/pages/publikPages/Login";
// import Nav from "./components/pages/NavAdmin";
// import { useContext } from "react";
// import { AuthContext } from "./components/contexts/AuthContext";

// function Root({ isAuth }) {
//   return (
//     <>
//       {isAuth && <Nav />}
//       <Outlet />
//     </>
//   );
// }

// function App() {
//   const { isAuth } = useContext(AuthContext);

//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Root isAuth={isAuth} />}>
//         <Route index element={ !isAuth ? <Navigate to={"/login"} /> : <Navigate to={"/dashboard/employees"} />  }/>

//         <Route element={ !isAuth ? <Outlet /> : <Navigate to={"/dashboard/employees"} />}>
//           <Route path="login" element={<Login />} />
//         </Route>

//         <Route path="/dashboard" element={isAuth ? <Outlet /> : <Navigate to={"/"} />} >
//           <Route path="employees" element={<Products />} />
//         </Route>

//       </Route>
//     )
//   );

//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;

// app  מנתי לטיפול חיים
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
import AddIssueForm from "./components/pages/forms/AddIssueForm";
import { AuthContext } from "./components/contexts/AuthContext";
import EmployeeModal from "./components/modals/employeeModal";

function Root({ isAuth }) {
  console.log(isAuth);
  return (
    <>
      {isAuth ? <NavAdmin /> : <NavPublic />}
      <Outlet />
      <EmployeeModal />
      {/* <AddIssueForm /> */}
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
          path="addIssue"
          lazy={async () => ({
            Component: (await import("./components/pages/forms/AddIssueForm"))
              .default,
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
