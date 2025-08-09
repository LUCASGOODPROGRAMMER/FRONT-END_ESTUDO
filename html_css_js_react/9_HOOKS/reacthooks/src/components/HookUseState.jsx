import { useState } from 'react'
import './HookUseState.css'

const HookUseState = () => {
  const [name , setName] = useState("")
  const [age, setAge] = useState(18)
  const [message,setMessage] = useState("Seja bem-vindo")
  const [endMessage, setEndMessage] = useState("")

  const handleName = (name) => {
    setName(name)
    setMessage(`Seja bem-vindo ${name}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name || !age) return setEndMessage("Preencha todos os campos")
    setEndMessage(`Seja bem-vindo ${name}, com uma idade de ${age} anos`)
  }

  return (
    <div className="container">
      <input type="text" value={name} placeholder="Qual o seu nome?" onChange={(e) => handleName(e.target.value)} />
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={age} placeholder='Qual sua idade?' onChange={(e) => setAge(e.target.value)} />
        <input type="submit" value="Enviar" />
      </form>
      <p>{endMessage}</p>
    </div>
  )
}

export default HookUseState
