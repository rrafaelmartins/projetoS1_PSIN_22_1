const url = "https://lobinhos.herokuapp.com/wolves"
const listalobinhos = document.querySelector(".lista-lobinhos")
const loboshow = document.querySelector(".lobo")

const checkbox = document.querySelector(".checkbox")



let wolves = []


/*function getId(anywolf) {
    var id = anywolf.id
    wolves.push(id)
    console.log(id)
    console.log(wolves)
}*/

function getId(clicked_id) {
    //var id = clicked_id
    console.log(clicked_id)
    console.log(id)
}

function createPostDiv(wolf){
    const li = document.createElement("li")
   
    li.className = "li"
    li.id = wolf.id
    li.innerHTML = ` 
    
    <a id="${wolf.id}" class="lobitos" href="show-lobinho.html?lobinho=${wolf.id}" target="_self">
        <img src="${wolf.image_url}">
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
    
    
    
    /*`

        <a id="${wolf.id}" class="lobitos" href="show-lobinho.html" target="_self" onclick="${getSpecificLobinho(id)}">
            <section>
                <div>
                    <div>
                        <h1>Nome: ${wolf.name}</h1>
                        <h2>Idade: ${wolf.age} anos</h2>
                    </div>
                    <p class="texto">${wolf.description}</p>
                </div>
            </section>
        </a>`*/

    listalobinhos.appendChild(li)

}


const getLobinhos = () => {
    fetch(url, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(wolves => {
        wolves.forEach(wolf => {
            console.log(wolf.id)
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
    
    <a id="${wolf.id}" class="lobitos" href="show-lobinho.html?lobinho=${wolf.id}" target="_self">
        <img src="${wolf.image_url}">
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

/*checkbox.addEventListener("click", (event) => {
    fetch(url + "/adopted", {
        method: 'GET',
    })
    .then(response => response.json())
    .then(wolves => {
        wolves.forEach(wolf => {
            console.log(wolf.id)
            createPostDiv(wolf)
        })
    })
    .catch((error) => {
        console.log(error)
    })
})
*/

const getAdoptedLobinhos = () => {
    fetch(url + "/adopted", {
        method: 'GET',
    })
    .then(response => response.json())
    .then(wolves => {
        wolves.forEach(wolf => {
            console.log(wolf.id)
            createPostDiv2(wolf)
        })
    })
    .catch((error) => {
        console.log(error)
    })
}

const adotados = document.querySelector(".liadotados")
const naoadotados = document.querySelector(".li")


getLobinhos()
getAdoptedLobinhos()


checkbox.value = 0

if(checkbox.value = 1){
    console.log("desligado")
}
else if (checkbox.value = 0){
    console.log("ligado")
}