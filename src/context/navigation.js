import {createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavProvider = ({children}) =>{
    const [currentPath, setCurPath] = useState(window.location.pathname)
    
    useEffect(()=>{
        const handler = () =>{
            setCurPath(window.location.pathname) //this value takes the current path name
        }
        window.addEventListener('popstate', handler) //popstate is an event for browser's buttons: => and <=

        // clean up function
        return () =>{
           window.removeEventListener('popstate', handler)
        }

    },[])

    //this function creates manual or user-clicked navigation
    const navigate = (to)=>{
        window.history.pushState({},'', to)
        setCurPath(to)

    }
        
    return (<NavigationContext.Provider value={{currentPath, navigate}}>
        <div className="mx-4">
        {children}
        </div>
    </NavigationContext.Provider>
    )
}
export {NavProvider}
export default NavigationContext