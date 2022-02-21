const url = "https://lobinhos.herokuapp.com/wolves"

const nome = document.querySelector(".nome-do-lobo")
const imagem = document.querySelector(".imagem")
const lobo = document.querySelector(".lobo")



const consulta = window.location.search
console.log(consulta)

const urlParams = new URLSearchParams(consulta);

let id = urlParams.get('lobinho')
console.log(id)

function createPostDiv(wolf){
    const li = document.createElement("li")
   
    li.className = "li"
    

    li.innerHTML = ` 
    
    <a id="${wolf.id}" class="lobitos" href="show-lobinho.html?lobinho=${id}" target="_self">
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
    </a>`

    lobo.appendChild(li)

}



const getSpecificLobinho = (id) => {
    fetch(url + '/' + id, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(wolf => {
        createPostDiv(wolf)
        console.log(id)
    })
    .catch((error) => {
        console.log(error)
    })
}

getSpecificLobinho(id)