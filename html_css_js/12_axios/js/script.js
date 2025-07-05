// 1 - Instalação
console.log(axios)

// 2 - primeiro request
const getData = async() => {
    try{
        const response = await postsFetch.get(
            "/users",
            // 4 - definindo headers
            {
                headers: {
                    "Content-Type": "application/json",
                     custom: "header",
                }
            }
        )
        console.log(response)
        return response.data

    } catch(error) {
        console.log(error)
    }
}

getData()

// 3 - imprimindo dados na tela
const container = document.querySelector("#user-container")
const printData = async() => {
    const data = await getData()

    console.log(data)

    data.forEach((user) => {
        const div = document.createElement("div")
        const nameElement = document.createElement("h2")
        nameElement.textContent = user.name
        const email = document.createElement("p")
        email.textContent = user.email
        div.appendChild(nameElement)
        div.appendChild(email)
        container.appendChild(div)
    })
}

printData()

// 5 - POST
// para enviar dados ao servidor
const form = document.querySelector("#post-form")
const titleInput = document.querySelector("#title")
const bodyInput = document.querySelector("#body")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    postsFetch.post("/posts", {
        title: titleInput.value, body: bodyInput.value, userId: 1
    })
})

// 6 - GLOBAL INSTANCES DE AXIOS
