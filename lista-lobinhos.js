const url = "https://lobinhos.herokuapp.com/wolves"
const listalobinhos = document.querySelector(".lista-lobinhos")
const listalobinhos2 = document.querySelector(".lista-lobinhos-adotados")
const loboshow = document.querySelector(".lobo")
const pesquisa = document.querySelector(".pesquisa-add")

var checkbox = document.getElementById("checkbox")

function createPostDiv(wolf){
    const li = document.createElement("li")
   
    li.className = "li"
    li.id = wolf.id
    li.innerHTML = ` 
    
    <a id="${wolf.id}" class="lobitos" href="show-lobinho.html?lobinho=${wolf.id}" target="_self">
        <div class="imagessss">
            <img src="${wolf.image_url}">
            <div class="imagemfundo"></div>
        </div>
        <div class="bloco0">
            <div class="bloco1">
                <div>
                    <h1>Nome: ${wolf.name}</h1>
                    <h2>Idade: ${wolf.age} anos</h2>
                </div>
                <a href="adotar-lobinho.html?lobinho=${wolf.id}">
                    <input class="adotar" type="button" value="Adotar" target="_self">
                </a>
            </div>
            <p class="texto">${wolf.description}</p>
        </div>
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
            //console.log(wolf.id)
            createPostDiv(wolf)
        })
    })
    .catch((error) => {
        console.log(error)
    })
}



//----------------------------------------------------------------
//SHOW-LOBINHOS DAQUI PRA BAIXO
//----------------------------------------------------------------




function createPostDiv2(wolf){
    const li = document.createElement("li")
   
    li.className = "liadotados"
    li.id = wolf.id
    li.innerHTML = ` 
    
    
        <img src="${wolf.image_url}">
        <div class="bloco0">
            <div class="bloco1">
                <div>
                    <h1>Nome: ${wolf.name}</h1>
                    <h2>Idade: ${wolf.age} anos</h2>
                </div>
                <a>
                    <input class="adotar2" type="button" value="Adotado" target="_self">
                </a>
            </div>
            <p class="texto">${wolf.description}</p>
        </div>`
  
    listalobinhos2.appendChild(li)

}


const getSpecificLobinho = (id) => {
    fetch(url + '/' + id, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(wolf => {
        createPostDiv2(wolf)
        console.log(id)
    })
    .catch((error) => {
        console.log(error)
    })
}

/*const getAdoptedLobinhos = () => {
    fetch(url + '/' + 'adopted', {
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
}*/


const getAdoptedLobinhos = () => {
    fetch(url + "/adopted", {
        method: 'GET',
    })
    .then(response => response.json())
    .then(wolves => {
        wolves.forEach(wolf => {
            //console.log(wolf.id)
            createPostDiv2(wolf)
        })
    })
    .catch((error) => {
        console.log(error)
    })
}


getLobinhos()

checkbox.addEventListener("click", (event) => {
    if(event){
        [].forEach.call(document.getElementsByClassName('lista-lobinhos'), function(el) {
            el.toggleAttribute("hidden")
        })
    }
})

const getLobinhoId = () => {
    const nomepesquisa = document.querySelector(".pesquisa")

    const body = {
        wolf : {
            name: nomepesquisa.value
        }
    }

    fetch(url)

}

