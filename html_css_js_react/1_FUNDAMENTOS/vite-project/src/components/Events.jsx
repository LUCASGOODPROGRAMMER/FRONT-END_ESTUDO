

const Events = () => {

    const handleClick = (e) => {
        console.log(e)


        setInterval(() => {
            console.log("Loop executado")
        }, 1000)
    }

    // 8 função de renderização
    const renderSomething = (x) => {
        if(x) {
            return <h1>Rendezando isso!</h1>
        } else {
            return "renderizando outra coisa"
        }
    }

    // return 10 > 2 && <p>carregando...</p>

  return (
    <>
        <button onClick={() => console.log("você clicou no botão")}>Clique aqui</button>
        {/** 7 - evento com função */}
        <button onClick={handleClick}>Ativar loop</button>

        {/** 8 - função com render */}
       {renderSomething(true)}
       {renderSomething(false)}
    </>
  )
}

export default Events
