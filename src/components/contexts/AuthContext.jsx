import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

// create Context API AuthContext
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  async function handleLogin(values) {
    try {
      const { data } = await axios.post("users/manager/signin", values);
      if (data.success) {
        setIsAuth(true);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const value = {
    isAuth,
    handleLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
