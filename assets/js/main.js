function showModal (idModal){
    const modal = document.querySelector(idModal)
    modal.style.display = 'flex'
}

function hideModal (idModal, event){
    if(event.target.className === 'modal'){
            const modal = document.querySelector(idModal)
            modal.style.display = 'none'

    }
}

function closeAllModal (idModal, event){
    const modais = document.querySelectorAll('.modal')
    modais.forEach(modal => {
        modal.style.display = 'none'

    })
}

async function insert(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('backend/insert.php', {
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    if(result?.success){
        closeAllModal()
        alert('Seu filme '+result.data.titulo+' foi cadastrado com sucesso!')
    }
}