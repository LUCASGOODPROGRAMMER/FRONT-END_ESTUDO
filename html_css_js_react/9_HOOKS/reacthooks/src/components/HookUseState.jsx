import { useState } from 'react'

const HookUseState = () => {

    const [name , setName] = useState("")
    const [age, setAge] = useState(18)
    const [message,setMessage] = useState(`seja bem vindo`)
    const [endMessage, setEndMessage] = useState("")

    const handleName = (name) => {
        setName(name)
        setMessage(`seja bem vindo ${name}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !age) return setEndMessage("preencha todos os campos")
        setEndMessage(`seja bem vindo ${name}, com uma idade de ${age} anos`)
    }

  return (
    <div>
        <input type="text" value={name} placeholder="qual o seu nome?" onChange={(e) => handleName(e.target.value)}/>
        {/*{name && <p>{message}</p>}{!name && <p>{message}</p>}*/}
         <p>{message}</p>
         <form onSubmit={handleSubmit}>
            <input type="text" value={age} placeholder='qual sua idade?' onChange={(e) => setAge(e.target.value)}/>
            <input type="submit" value="enviar"/>
         </form>
         <p>{endMessage}</p>
    </div>
  )
}

export default HookUseState