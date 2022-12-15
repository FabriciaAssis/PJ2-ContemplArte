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
        alert('Seu livro '+result.data.titulo+' foi cadastrado com sucesso!')
        loadProductions()
    }
}

async function loadProductions() {
    const response = await fetch('backend/list.php')
    const result = await response.json()
    if(result?.success){
        const listProductions = document.querySelector('#productions')
        listProductions.innerHTML = ''
        const livros = result.data
        livros.map((book) => { //map é um laço de repeição
            listProductions.innerHTML += `
                <div class="card-book">
                    <a href="livro">
                        <img src="${book.capa}" alt="${book.titulo}">
                    </a>
                    <div>
                        <a href="livro">
                            <h2>${book.titulo}</h2>
                        </a>
                        <div>
                            <p>${book.genero}</p>
                            <img src="assets/img/trash-svgrepo-com.svg" alt="Apagar" onclick="deleteProduction(${book.id})"/>
                            <img src="assets/img/edit-svgrepo-com.svg" alt="Editar" onclick="loadProductionData(${book.id})"/>
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
        alert('Seu livro foi deletado com sucesso!')
        loadProductions()
    }

}

async function loadProductionData(id){
    const response = await fetch('backend/get-production-by-id.php?id='+id)
    const result = await response.json()
    if(result?.success){
        showModal('#modal-editar')
        const title = document.querySelector('#modal-editar input[name=title]')
        title.value = result.data.titulo
        const category = document.querySelector('#modal-editar input[name=category]')
        category.value = result.data.genero
        const cover = document.querySelector('#modal-editar input[name=cover]')
        cover.value = result.data.capa
        const classification = document.querySelector('#modal-editar input[name=classification]')
        classification.value = result.data.classificacao
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
        alert('Seu livro '+result.data.titulo+' foi editado com sucesso!')
        loadProductions()
    }
}

function clearForm(idModal) {
    const title = document.querySelector(`${idModal} input[name=title]`)
    title.value = ''
    const category = document.querySelector(`${idModal} input[name=category]`)
    category.value = 'result.data.genero'
    const cover = document.querySelector(`${idModal} input[name=cover]`)
    cover.value = ''
    const classification = document.querySelector(`${idModal} input[name=classification]`)
    classification.value = ''
    const id = document.querySelector(`${idModal} input[name=id]`)
    id.value = ''
}

// pag comentários

function showModalNote(idModal){
    const modal = document.querySelector(idModal)
    modal.style.display = 'flex'
}

function hideModalNote(idModal, event){
    if(event.target.className === 'modal'){
            const modal = document.querySelector(idModal)
            modal.style.display = 'none'

    }
}


function closeNoteAllModal(){
    const modais = document.querySelectorAll('.modal-note')
    modais.forEach(modal => {
        modal.style.display = 'none'

    })
}

async function insertNote(event){
    event.preventDefault()
    const formData = new FormData(event.target) 
    const response = await fetch('backend/insertNote.php', {
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    if(result?.success){
        closeNoteAllModal()
        alert('Seu comentário '+result.data.nome+' foi postado com sucesso!')
        loadNote()
    }
}

async function loadNote() {
    const response = await fetch('backend/listNote.php')
    const result = await response.json()
    if(result?.success){
        const listNotes = document.querySelector('#notes')
        listNotes.innerHTML = ''
        const livros = result.data
        livros.map((book) => { 
            listNotes.innerHTML += `
                <div class="card-note">
                    <div>
                        <a href="comentario">
                            <h2>${note.nome}</h2>
                        </a>
                        <div>
                            <p>${note.comentario}</p>
                            <img src="assets/img/trash-svgrepo-com.svg" alt="Apagar" onclick="deleteProduction(${note.id})"/>
                            <img src="assets/img/edit-svgrepo-com.svg" alt="Editar" onclick="loadProductionData(${note.id})"/>
                        </div>
                    </div>
                </div>
        `
        })
    }else{
        alert('Erro ao carregar comentário')
    }
}

async function deleteNote(id){
    const response = await fetch('backend/deleteNote.php?id='+id)
    const result = await response.json()
    if(result?.success){
        alert('Seu comentário foi deletado com sucesso!')
        loadNote()
    }

}

async function loadNoteData(id){
    const response = await fetch('backend/get-notes-by-id.php?id='+id)
    const result = await response.json()
    if(result?.success){
        showModal('#modal-note-editar')
        const nome = document.querySelector('#modal-note-editar input[name=nome]')
        nome.value = result.data.nome
        const comentario = document.querySelector('#modal-note-editar input[name=comentario]')
        comentario.value = result.data.comentario
    }

}
async function editNote(event){
    event.preventDefault()
    const formData = new FormData(event.target) 
    const response = await fetch('backend/editNote.php', { 
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    if(result?.success){
        closeNoteAllModal()
        alert('O comentário de '+result.data.nome+' foi editado com sucesso!')
        loadNote()
    }
}

function clearFormNote(idModal) {
    const nome = document.querySelector(`${idModal} input[name=nome]`)
    nome.value = ''
    const comentario = document.querySelector('#modal-note-editar input[name=comentario]')
    comentario.value = ''
}
