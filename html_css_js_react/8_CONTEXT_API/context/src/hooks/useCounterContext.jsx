import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {
    const context = useContext(CounterContext)

    if(!context) {"CONTEXTO Não ENCONTRADO"; return}

    console.log(context)

    return context
}