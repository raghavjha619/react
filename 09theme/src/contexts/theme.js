import { useContext,createContext } from "react";
import React from "react";

export const ThemeContext = createContext({
    thememode : "dark",
    toggledark: () =>{},
    togglelight: () => {}
})
export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme(){
    return(
        useContext(ThemeContext)
    )
}