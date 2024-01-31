const loginBtn = document.getElementById('login')
const emailField = document.querySelector('#email')
const passwordField = document.getElementById('password')
const error = document.querySelector('#error')



loginBtn.addEventListener('click', function(event) {
    event.preventDefault()
    console.log(event)
})