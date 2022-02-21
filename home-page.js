const url = "https://lobinhos.herokuapp.com/wolves"
const lobosexemplo = document.querySelector(".lobos-exemplo")

function createPostDiv(wolf){
    const li = document.createElement("li")
    const id = wolf.id

    li.className = "li"
    li.innerHTML = `

            <section>
                <div>
                    <div>
                        <img src="${wolf.image_url}">
                    </div>
                    <div>
                        <div>
                            <h1>Nome: ${wolf.name}</h1>
                            <h2>Idade: ${wolf.age} anos</h2>
                        </div>
                        <div>
                            <p>${wolf.description}</p>
                        </div>
                    </div>
                </div>
            </section>`


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