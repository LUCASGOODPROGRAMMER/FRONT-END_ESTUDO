import { createContext } from "react"
export const SomeContext = createContext()



export const HookUseContext = ({ children }) => {
    const contextValue = "testando contexto"
    return (
        <div>
            <SomeContext.Provider value={{ contextValue }}>
                {children}
            </SomeContext.Provider>
        </div>
    )
}

export default HookUseContext