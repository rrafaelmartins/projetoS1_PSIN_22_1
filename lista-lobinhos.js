const url = "https://lobinhos.herokuapp.com/wolves"
const listalobinhos = document.querySelector(".lista-lobinhos")
const loboshow = document.querySelector(".lobo")



let wolves = []


function getId(anywolf) {
    var id = anywolf.id
    wolves.push(id)
    console.log(id)
    console.log(wolves)
}


function createPostDiv(wolf){
    const li = document.createElement("li")
   
    li.className = "li"
    li.innerHTML = ` 
    
    <a id="${wolf.id}" class="lobitos" href="show-lobinho.html" target="_self" onclick="${getSpecificLobinho(wolf.id)}">
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
    
    
    
    
    
    
    
    
    
    /*`

        <a id="${wolf.id}" class="lobitos" href="show-lobinho.html" target="_self" onclick="${getSpecificLobinho(id)}">
            <section>
                <div>
                    <div>
                        <h1>Nome: ${wolf.name}</h1>
                        <h2>Idade: ${wolf.age} anos</h2>
                    </div>
                    <a href="adotar-lobinho.html">
                        <input class="adotar" type="button" value="Adotar" target="_self">
                    </a>
                </div>
            </section>
        </a>`*/

    listalobinhos.appendChild(li)
    console.log(wolf.id)
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


//----------------------------------------------------------------
//SHOW-LOBINHOS DAQUI PRA BAIXO
//----------------------------------------------------------------





function createPostDiv2(wolf) {
    const li = document.createElement("li")

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

    loboshow.appendChild(li)
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

//getSpecificLobinho(wolves[0])