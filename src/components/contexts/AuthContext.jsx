import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { showSuccessToast, showErrorToast } from "../../lib/Toast";



export const AuthContext = createContext();


function AuthProvider({ children }) {

    // console.log(children)
    const [isAuth, setIsAuth] = useState(false);
    // const [user, setUser] = useState(null);


    async function handleLogin(values) {
        try {
            const { data } = await axios.post("/users/manager/signin", values);
            if (data.success) {
                showSuccessToast(data.message);
                setIsAuth(true)
                return true
            }
        } catch (error) {
            const msg = error.response.data.error;
            showErrorToast(msg)
            return false
        }
    };

    async function authUser() {
        try {
            const { data } = await axios.get("/users/auth");
            console.log(data)
            if (data.success) {
                setIsAuth(true);
                // setUser(data.user._doc);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        authUser();
    }, [])

   

    const value = { isAuth, handleLogin }
    return (
        <AuthContext.Provider value={value}>
            {children};
        </AuthContext.Provider>
    )
};


export default AuthProvider;
