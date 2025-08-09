import { useState } from 'react'

const HookUseState = () => {

    const [name , setName] = useState()
    const [message,setMessage] = useState(`seja bem vindo`)

    const handleName = (name) => {
        setName(name)
        setMessage(`seja bem vindo ${name}`)
    }

  return (
    <div>
        <input type="text" placeholder="qual o seu nome?" onChange={(e) => handleName(e.target.value)}/>
        {/*{name && <p>{message}</p>}{!name && <p>{message}</p>}*/}
         <p>{message}</p>
    </div>
  )
}

export default HookUseState