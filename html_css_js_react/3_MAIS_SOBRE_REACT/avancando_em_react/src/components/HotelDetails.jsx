const HotelDetails = ({nome,endereco,tamanho,dono}) => {
    return(
        <>
            <h2>Fichário do hotel</h2>
            <ul>
                <li>Nome: {nome}</li>
                <li>Endereco: {endereco}</li>
                <li>Tamanho: {tamanho}m</li>
                <li>Dono: {dono}</li>
            </ul>
        </>
    )
}

export default HotelDetails