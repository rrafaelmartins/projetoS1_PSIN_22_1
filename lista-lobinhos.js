const url = "https://lobinhos.herokuapp.com/wolves"
const listalobinhos = document.querySelector(".lista-lobinhos")

function createPostDiv(wolf){
    const li = document.createElement("li")
    const id = wolf.id

    li.className = "li"
    li.innerHTML = `

        <a href="show-lobinho.html" target="_self">
            <section>
                <div>
                    <div>
                        <img src="${wolf.image_url}">
                    </div>
                    <div>
                        <div>
                            <h1>Nome: ${wolf.name}</h1>
                            <h2>Idade: ${wolf.age} anos</h2>
                            <a href="adotar-lobinho.html">
                                <input type="button" value="Adotar" target="_self">
                            </a>
                        </div>
                        <div>
                            <p>${wolf.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </a>`


    listalobinhos.appendChild(li)
}


const getLobinhos = () => {
    fetch(url, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(wolves => {
        wolves.forEach(wolf => {
            createPostDiv(wolf)
        })
    })
    .catch((error) => {
        console.log(error)
    })
}

getLobinhos()

function createPostDiv2(wolf) {
    const li = document.createElement("li")
    const id = wolf.id

    li.className = "li"
    li.innerHTML = `

    <h1 class = "nome-do-lobo">${wolf.name}</h1>
    <section>
        <div>
            <img class = "imagem" src="${wolf.image_url}" alt="">
            <div>
                <input class = "botao-adotar" type="button" value="ADOTAR">
                <input class = "botao-excluir" type="button" value="EXCLUIR">
            </div>
        </div>
        <div>
            <p class = description>${wolf.description}</p>
        </div>
    </section>`
}







const getSpecificLobinho = (id) => {
    fetch(url + '/' + id, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(wolves => {
        wolves.forEach(wolf => {
            createPostDiv2(wolf)
        })
    })
    .catch((error) => {
        console.log(error)
    })
}


