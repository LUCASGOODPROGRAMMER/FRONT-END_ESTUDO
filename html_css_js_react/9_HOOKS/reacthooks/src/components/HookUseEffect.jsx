import { useState, useEffect } from 'react'

const HookUseEffect = () => {

    const [message, setMessage] = useState("i love you")
    const mensagens = ["i love you", "i hate you"]

    /* 1 - useEffect sem dependências
    useEffect(() => {
        console.log("executando...sempre que um componente renderizar")
    }) */

    /*
    // 2 - array de dependências vazio
    useEffect(() => {
        console.log("serei executado uma única vez")
    }, []) */

    // 3 - array de dependências com valores
    /*
    useEffect(() => {
        console.log(`mensagem sendo monitorada pelo useEffect foi alterada para (${message})`)
    }, [message]) */

    // 4 - cleanup do useEffect
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         changeMessage()
    //         console.log(`mensagem sendo monitorada pelo useEffect foi alterada para (${message}) pelo setTimeout`)
    //     }, 2000)

    //     return () => clearTimeout(timer) //técnica clean up, sem isso esse useEffect pode ser duplicado ou continuar executando em outras páginas
    // }, [message])

    const changeMessage = () => {
        let newMessage = message;

        while (newMessage === message) {
            const randomIndex = Math.floor(Math.random() * mensagens.length);
            newMessage = mensagens[randomIndex];
        }

        setMessage(newMessage);
    };


    return (
        <div>
            <h2>useEffect</h2>
            <p>Menssagem: {message}</p>
            <button onClick={changeMessage}>setMessage</button>
        </div>
    )
}

export default HookUseEffect