const url = "https://lobinhos.herokuapp.com/wolves"
const lobosexemplo = document.querySelector(".lista-lobinhos")

function createPostDiv(wolf){
    const li = document.createElement("li")
    const id = wolf.id

    li.className = "li"
    li.innerHTML =    
    `
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
    `


    lobosexemplo.appendChild(li)
}

const getLobinhos = (id) => {
    fetch(url + "/" + id, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(wolf => {
            createPostDiv(wolf)
    })
    .catch((error) => {
        console.log(error)
    })
}

getLobinhos(106)
getLobinhos(107)