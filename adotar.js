const url = "https://lobinhos.herokuapp.com/wolves"

const nome = document.querySelector(".nome-do-lobo")
const imagem = document.querySelector(".imagem")
const lobo = document.querySelector(".lobo")
const botaoeditar = document.querySelector(".adotar")



const consulta = window.location.search
console.log(consulta)

const urlParams = new URLSearchParams(consulta);

let id = urlParams.get('lobinho')
console.log(id)

function createPostDiv(wolf){
    const li = document.createElement("li")
   
    li.className = "li"
    

    li.innerHTML = ` 
    
        <div class="foto-nome">
            <img src="${wolf.image_url}" alt="">
            <div class="nome-id">
                <h1 class="nome-lobo">Adote o(a) ${wolf.name} </h1>
                <figcaption class="id-lobo">ID: ${wolf.id} </figcaption>
            </div>
        </div>
  
        <div class="nome-idade">
            <div class="nome">
                <h2>Seu nome:</h2>
                <input class="nomein" type="text">
            </div>
            <div class="idade">
                <h2>Idade:</h2>
<<<<<<< HEAD
                <input id="idade" class="linha" type="text">
=======
                <input class="linha" type="text">
>>>>>>> 0e3bc27b13f89b456c151ccb0976acb4987fe7cd
            </div>
        </div>
    
     
        <div class="email">
            <h2>E-mail:</h2>
<<<<<<< HEAD
            <input id="email" class="linha" type="text">
=======
            <input class="linha" type="text">
>>>>>>> 0e3bc27b13f89b456c151ccb0976acb4987fe7cd
        </div>
   
        <div class="center">
            <input type="button" value="Adotar" class="adotar" onclick="updatelobin(${wolf.id})">
        </div>
       
    `

    

    lobo.appendChild(li)

}


<<<<<<< HEAD
=======

>>>>>>> 0e3bc27b13f89b456c151ccb0976acb4987fe7cd
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

<<<<<<< HEAD



const updatelobin = (id) => {
    
    const nomein = document.querySelector(".nomein")
    const idade = document.getElementById("idade")
    const email = document.getElementById("email")


    const body = {
        wolf: {
            adopter_name: nomein.value,
		    adopter_age: idade.value,
		    adopter_email: email.value,
=======
const updatelobin = (id) => {
    var editInput = document.getElementById(`${id}`)
    const body = {
        wolves: {
>>>>>>> 0e3bc27b13f89b456c151ccb0976acb4987fe7cd
            adopted: "true"
        }
    }
    
    fetch(url + "/" + id, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
<<<<<<< HEAD
    .then(() => {
        alert("Lobo foi adotado!")
=======
    .then((wolves) => {
        alert("Mensagem foi editada!")
        console.log(wolves)
>>>>>>> 0e3bc27b13f89b456c151ccb0976acb4987fe7cd
    })
    .catch((error) => {
        console.error(error)
    })
}

getSpecificLobinho(id)