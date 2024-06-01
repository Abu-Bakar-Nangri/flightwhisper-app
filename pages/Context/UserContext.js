import React,{useState,createContext, Children } from "react";

export const UserContext = createContext();

export const UserProvier = ({children}) => {
    const [user ,setUser]= useState(null);

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
