const url = "https://lobinhos.herokuapp.com/wolves"

const nome = document.querySelector(".name")
const age = document.querySelector(".age")
const link = document.querySelector(".image-url")
const description = document.querySelector(".description")
const botaosalvar = document.querySelector(".botao-salvar")

botaosalvar.addEventListener ("click", (event) => {
    const body = {
        wolf: {
            name: nome.value,
            age: age.value,
            image_url: link.value,
            description: description.value
        }
    }

    const config = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {"Content-Type": "application/json"}
    }

    fetch(url, config)
    .then(response => response.json())
    .then(() => {
        alert("Lobo foi enviado!")
        console.log(message)
    })

    .catch((error) => {
        console.log(error)
    })
})
