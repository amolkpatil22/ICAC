import { createContext } from "react"
export let context = createContext()


function contextProvider({ children }) {


    return (
        <context.Provider 
        value={{}}
        >
            {children}
        </context.Provider>
    )
}

export default contextProvider