const ShowUserName = (props) => {
    return(
        <>
            <h2>Nome do usuário: {props.name}</h2>
            <h2>Estado civil: {props.estadoCivil}</h2>
            <h2>Perfil jurídico: {props.pessoa}</h2>
        </>
    )
}

export default ShowUserName