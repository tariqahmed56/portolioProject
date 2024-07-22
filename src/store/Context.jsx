import gsap from "gsap";
import { createContext, useState } from "react";
export let context = createContext();
export function ContextProvider({children}){
    let [isDarkMode,setIsDarkMode] = useState(true);
    let timeLine = gsap.timeline();

    return(
      <context.Provider value={{ isDarkMode , setIsDarkMode , timeLine}}>
      {children}
      </context.Provider>
    )
}