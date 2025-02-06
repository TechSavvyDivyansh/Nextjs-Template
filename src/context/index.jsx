'use client'; // Make sure this directive is at the very top

import { createContext, useState, useEffect, useContext } from 'react';
// import Cookies from 'js-cookie';

const myHackContext = createContext();

export function HackWrapper({ children }) {
    // const [userData, setUser] = useState(() => {
    //     // Retrieve the user data from the cookie if it exists
    //     const savedUserData = Cookies.get('access_token');
    //     return savedUserData ? JSON.parse(savedUserData) : {};
    // });
    // // console.log(userData)

    // useEffect(() => {
    //     // Save the user data to the cookie whenever it changes
    //     Cookies.set('access_token', JSON.stringify(userData));
    // }, [userData]);

    const [mydata,setMyData]=useState("hello")

    

    const contextValues = { mydata,setMyData };
    
    return (
        <myHackContext.Provider value={contextValues}>
            {children}
        </myHackContext.Provider>
    );
}

export function usemyHackContext() {
    return useContext(myHackContext);
}