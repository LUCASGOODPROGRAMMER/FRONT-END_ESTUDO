import { useLayoutEffect, useEffect, useState } from "react"

const HookUseLayoutEffect = () => {
    const [name, setName] = useState("nome")

    useEffect(() => {
        console.log("2")
        setName("Mudou de novo")
    },[])

    useEffect(() => {
        console.log("3")
        setName("Mudou de novo")
    },[])

    useLayoutEffect(() => {
        console.log("1")
        setName("outro nome")
    },[]) // ele bloqueia a renderização até que o código seja executado

    console.log(name)
  return (
    <div>
        <h2>useLayoutEffect</h2>
        <p>Nome: {name}</p>
    </div>
  )
}

export default HookUseLayoutEffect