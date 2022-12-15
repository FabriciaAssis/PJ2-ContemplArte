function showModal(idModal){
    const modal = document.querySelector(idModal)
    modal.style.display = 'flex'
}

function hideModal(idModal, event){
    if(event.target.className === 'modal'){
            const modal = document.querySelector(idModal)
            modal.style.display = 'none'

    }
}

function closeAllModal(){
    const modais = document.querySelectorAll('.modal')
    modais.forEach(modal => {
        modal.style.display = 'none'

    })
}

async function insert(event){
    event.preventDefault() //para não recarregar a pag
    const formData = new FormData(event.target) 
    const response = await fetch('backend/insert.php', { //fetch: oq faz o js desparar para o backend sem recarregar a pag
        method: 'POST', //await: a resposta do fetch não é automatica por isso o await
        body: formData
    })
    const result = await response.json()
    if(result?.success){
        closeAllModal()
        alert('Sua incrição '+result.data.nome+' foi feita com sucesso!')
        loadProductions()
    }
}

async function loadProductions() {
    const response = await fetch('backend/list.php')
    const result = await response.json()
    if(result?.success){
        const listProductions = document.querySelector('#productions')
        listProductions.innerHTML = ''
        const insc = result.data
        insc.map((insc) => { //map é um laço de repeição
            listProductions.innerHTML += `
                <div class="card-insc">
                    <a href="insc">
                    <h4>${insc.nome}</h4>
                    </a>
                    <div>
                        <a href="livro">
                            <h5>${insc.cpf}</h5>
                        </a>
                        <div>
                            <p>${insc.dataNas}</p>
                            <p>${insc.email}</p>
                            <img src="assets/img/trash-svgrepo-com.svg" alt="Apagar" onclick="deleteProduction(${insc.id})"/>
                            <img src="assets/img/edit-svgrepo-com.svg" alt="Editar" onclick="loadProductionData(${insc.id})"/>
                        </div>
                    </div>
                </div>
        `
        })
    }else{
        alert('Erro ao carregar produções')
    }
}

async function deleteProduction(id){
    const response = await fetch('backend/delete.php?id='+id)
    const result = await response.json()
    if(result?.success){
        alert('Sua inscrição foi deletada com sucesso!')
        loadProductions()
    }

}

async function loadProductionData(id){
    const response = await fetch('backend/get-production-by-id.php?id='+id)
    const result = await response.json()
    if(result?.success){
        showModal('#modal-editar')
        const nome = document.querySelector('#modal-editar input[name=fullName]')
        nome.value = result.data.nome
        const cpf = document.querySelector('#modal-editar input[name=cpf]')
        cpf.value = result.data.cpf
        const dataNas = document.querySelector('#modal-editar input[name=dataNas]')
        dataNas.value = result.data.dataNas
        const sexo = document.querySelector('#modal-editar input[name=sexo]')
        sexo.value = result.data.sexo
        const email = document.querySelector('#modal-editar input[name=email]')
        email.value = result.data.email
        const id = document.querySelector('#modal-editar input[name=id]')
        id.value = result.data.id
    }

}

async function edit(event){
    event.preventDefault()
    const formData = new FormData(event.target) 
    const response = await fetch('backend/edit.php', { 
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    if(result?.success){
        closeAllModal()
        alert('Sua inscrição '+result.data.titulo+' foi editada com sucesso!')
        loadProductions()
    }
}

function clearForm(idModal) {
    const nome = document.querySelector(`${idModal} input[name=fullName]`)
    nome.value = ''
    const cpf = document.querySelector(`${idModal} input[name=cpf]`)
    cpf.value = 'result.data.genero'
    const dataNas = document.querySelector(`${idModal} input[name=dataNas]`)
    dataNas.value = ''
    const sexo = document.querySelector(`${idModal} input[name=sexo]`)
    sexo.value = ''
    const email = document.querySelector(`${idModal} input[name=email]`)
    email.value = ''
    const id = document.querySelector(`${idModal} input[name=id]`)
    id.value = ''
}
