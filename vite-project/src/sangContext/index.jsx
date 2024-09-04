import { createContext, useState } from "react"

export const GlobalContext = createContext(null);  //creating the context

// create the global state that receive component as children.

function GlobalState({ children }) {

    const [theme, setTheme] = useState('light');

    const updateTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    // return <GlobalContext.Provider value={{ theme, setTheme }}>{children}</GlobalContext.Provider>
    return <GlobalContext.Provider value={{ theme, updateTheme }}>{children}</GlobalContext.Provider>
}

export default GlobalState;