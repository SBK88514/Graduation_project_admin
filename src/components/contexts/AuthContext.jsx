import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { showSuccessToast, showErrorToast } from "../../lib/Toast";
import ActionProvider from "./ActionContext";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  // console.log(children)
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  async function handleLogin(values) {
    try {
      const { data } = await axios.post("/users/manager/signin", values);
      if (data.success) {
        showSuccessToast(data.message);
        setIsAuth(true);
        setUser(data.manager)
        console.log("Signed-in user:", data.manager);
        return true;
      }
    } catch (error) {
      const msg = error.response.data.error;
      showErrorToast(msg);
      return false;
    }
  }

  async function authUser() {
    try {
      const { data } = await axios.get("/users/auth");
      console.log(data);
      if (data.success) {
        setIsAuth(true);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    authUser();
  }, []);

  async function signOut() {
    try{
      const {data} = axios.get("/users/manager/logout")
      if(data.success){
        setIsAuth(false)
        
      }

    }catch(error){
      const msg = error.response.data.error;
      showErrorToast(msg)
    }
   

    
  } 


  async function handleManager(values) {
    try {
      const { data } = await axios.post("users/manager/signup", values);

      console.log(data);
      console.log(1);
    } catch (error) {
      console.log(error);
      console.log(2);
    }
  }

  async function handleEmployee(values) {
    try {
      const { data } = await axios.post("users/employee/signup", values);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    isAuth,
    handleLogin,
    handleEmployee,
    handleManager,
    user,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      <ActionProvider>{children}</ActionProvider>
    </AuthContext.Provider>
  );
}

export default AuthProvider;
