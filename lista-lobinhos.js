const url = "https://lobinhos.herokuapp.com/wolves"
const listalobinhos = document.querySelector(".lista-lobinhos")

function createPostDiv(wolf){
    const li = document.createElement("li")
    const id = wolf.id

    li.className = "li"
    li.innerHTML = 
    `
        <a href="show-lobinho.html" target="self">
            <img src="${wolf.image_url}">
                <div class="bloco0">
                    <div class="bloco1">
                        <div>
                            <h1>Nome: ${wolf.name}</h1>
                            <h2>Idade: ${wolf.age} anos</h2>
                        </div>
                        <a href="adotar-lobinho.html">
                            <input class="adotar" type="button" value="Adotar" target="_self">
                        </a>
                    </div>
                    <p class="texto">${wolf.description}</p>
                </div>
        </a>    
      
    `



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
            createPostDiv(wolf)
        })
    })
    .catch((error) => {
        console.log(error)
    })
}


