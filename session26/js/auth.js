let isLoginPage = true

// const switchButton = document.getElementById ('switchButton')
// const loginButton = document.getElementById('loginButton')
// const emailField = document.getElementById('emailField')
// const passwordField = document.getElementById('password')
// const error = document.getElementById('error')


const ref = {
    switchButton: document.getElementById('switchButton'),
    loginButton: document.getElementById('loginButton'),
    emailField: document.getElementById('emailField'),
    passwordField: document.getElementById('passwordField'),
    error: document.getElementById('error'),
}

ref.switchButton.addEventListener('click', function() {
    const headerTitleElement = document.getElementById('headerTitle')
    const forotPasswordElement = document.getElementById('forgotPassword')

    isLoginPage = !isLoginPage

    if(isLoginPage) {
        headerTitleElement.innerText = 'Login'
        // forotPasswordElement.style.display = 'inline'
        forotPasswordElement.style.visibility = 'visible'
        ref.loginButton.value='Login'
        this.innerText = 'Switch to create new account page'
    }else {
        headerTitleElement.innerText = 'Create new account'
        forotPasswordElement.style.visibility = 'hidden'
        // forotPasswordElement.style.display = 'none'
        ref.loginButton.value='Sign up'
        this.innerText = 'Switch to login page'
    }
})