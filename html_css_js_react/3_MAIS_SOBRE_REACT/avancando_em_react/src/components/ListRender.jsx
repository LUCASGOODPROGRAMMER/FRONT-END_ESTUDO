import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["Lucas", 'Keynner', `Einstein`])


    return(
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    )
}

export default ListRender