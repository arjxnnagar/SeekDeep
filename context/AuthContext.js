"use client"
import { useUser } from "@clerk/nextjs";
import { createContext, useContext } from "react";

const AuthContext = createContext();


export const useAuthContext = () =>{
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {

    const {user} = useUser();

    const values = {
        user
    }

    console.log(user);
  return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider











