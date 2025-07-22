import { useState } from 'react'

const Data = () => {
    let someData = 10

    const [randomNumber, setRandomNumber] = useState(25) // const [nome da variavel, nome do método set] = useState(<valor inicial>)
    return(
        <>
            <p>valor: {someData}</p>
            <button onClick={someData = Math.ceil(Math.random() * 100)}>SORTEAR</button>

            <p>Valor: {randomNumber}</p>
            <button onClick={() => setRandomNumber(Math.ceil(Math.random() * 100))}>SORTEAR</button>
        </>
    )
}

export default Data