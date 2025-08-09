import { createContext, useReducer } from "react"; // useReducer substitui o useState, só que ele é indicado para projetos maiores, é usado para atualizar um estado de acordo com a ação recebida

export const TitleColorContext = createContext()

export const TitleColorReducer = (state, action) => {
    switch(action.type) {
        case "RED":
            return{...state, color: "red"} //...state é uma spread operator usado para manter outras propriedades do estado intacta
        case "BLUE":
            return {...state, color:"blue"}
        default:
            return state;
    }
}

export const TitleColorContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(TitleColorReducer, {color:"purple"})
    return(
        <TitleColorContext.Provider value={{...state}}>
            {children}
        </TitleColorContext.Provider>
    )
}