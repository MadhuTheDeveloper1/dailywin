let form = document.querySelector('form')
let input = document.querySelector('input')


const sendMessage = (e) => {

    e.preventDefault()
    let msg = input.value
    window.location.href = `https://api.whatsapp.com/send/?phone=918734026178&text=${msg}`


}

form.addEventListener('submit', sendMessage)