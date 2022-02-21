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
    <main class = "lobo">
    <h1 class = "nome-do-lobo">${wolf.name}</h1>
    <section class="lobinho">
        <div class="img-button">
            <img class = "imagem" src="${wolf.image_url}" alt="">
            <div class="buttons">
                <a href="adotar-lobinho.html"><input class = "botao-adotar" type="button" value="ADOTAR"></a>
                <input class = "botao-excluir" type="button" value="EXCLUIR" onclick="deletelobin(${id})")>
            </div>
        </div>
        <p class = description>${wolf.description}</p>
    </section>
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

const deletelobin = (id) => {
    fetch(url + "/" + id, {
        method: "DELETE"
    })
    .then(() => {
        alert("Lobinho foi apagado!")
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    })
}

getSpecificLobinho(id)