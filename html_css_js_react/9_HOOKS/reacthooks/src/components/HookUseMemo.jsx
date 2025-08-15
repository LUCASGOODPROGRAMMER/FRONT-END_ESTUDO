import { useState, useEffect, useMemo } from "react"
// useMemo é um  hook do react usado para guardar o valor de uma função, evitando que ela seja recalculada a cada redenrização, exceto quando suas dependências mudam, posso usar para otimizar meu site quando tem componentes que realizam um calculo pesado como a filtragem de um db

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)

    // const premiumNumbers = ["0","100","200"]

    const premiumNumbers = useMemo(() => {
        return ["0","100","200"]
    },[]) // useMemo me permite controlar um valor, ele será lido somente quando for necessário (quando o usuário acerta o valor) e não o tempo todo

    useEffect(() => {
        console.log("premium numbers foi alterado")
    },[premiumNumbers]) // sem o useMemo o useEffect vai disparar toda vez que eu modificar o input, um erro de reatc
  return (
    <div>
        <h2>useMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)}/>
        {/** includes() é um método de array usado para verificar se o valor passado nos parâmetros está incluso dentro do array ou em uma string que também é considerado um array*/}
        {premiumNumbers.includes(number) ? <p>o número foi adivinhado</p> : ""}
    </div>
  )
}

export default HookUseMemo