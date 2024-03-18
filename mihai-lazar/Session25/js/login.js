let isLoginPage = true;

const toggleAuthButton = document.getElementById('toggleAuthButton')
const loginButton = document.getElementById('loginButton')

const emailField = document.getElementById('userInput')
const passwordlField = document.getElementById('passwordInput')
const error = document.getElementById('error')

toggleAuthButton.addEventListener('click', function () {
    const headerTitleElem = document.getElementById('headerTitle')
    const forgotPasswordElem = document.getElementById('forgotPass')

    if (isLoginPage) {
        headerTitleElem.innerText = 'Create new account'
        forgotPasswordElem.style.display = 'none'
        loginButton.value = 'Sign up'
        this.value = 'Back to login page'
    } else {
        headerTitleElem.innerText = 'Login'
        forgotPasswordElem.style.display = 'inline'
        loginButton.value = 'Login'
        this.value = 'Back to login page'
    }
})

const showError = (message) => {
    error.style.display = 'block'
    error.innerText = message
    error.style.color = 'red'
}

const validatedEmail = (emailVal, regex) => {
    return !!emailVal.match(regex) // convertim la o valoare booleana
}

const validatePass = (passwordVal) => {
    return passwordVal.length > 3
}

const clearInputs = () => {
    emailField.value = '';
    passwordlField.value = '';
}

loginButton.addEventListener('click', function (event) {
    event.preventDefault()

    const emailVal = emailField.value;
    const passwordVal = passwordlField.value;
    const regex = /\D{4,}\@\D{4,}\.\D{2,}/g;

    error.style.display = 'none';

    if (emailVal === '' || passwordVal === '') {
        showError('All fields are required')
    } else {
        if (validatedEmail(emailVal, regex) && validatePass(passwordVal)) {
            if (isLoginPage) {
                login(emailVal, passwordVal).then(data => {
                    clearInputs()
                    window.open('news.html', '_self')
                })
            } else {
                createAcc().then(data => {
                    console.log(data)
                    clearInputs()
                    window.open('login.html', '_self')
                })
            }
        } else {
            alert('Try again')
            showError('Incorrect email or password')
            clearInputs()
        }
    }
})

async function login(emailVal, passwordVal) {
    const loginURL = 'https://reqres.in/api/login';
    let loginData = {
        email: emailVal,
        password: passwordVal
    }

    loginData = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }

    const loginConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    }

    const response = await fetch(loginURL, loginConfig)

    return response.json()
}

async function createAcc(emailVal, passwordVal) {
    const createAccURL = 'https://reqres.in/api/register';
    emailVal = 'eve.holt@reqres.in'
    passwordVal = 'pistol'

    const registerData={
        email:emailVal,
        password:passwordVal
    }

    const registerConfig={
        method:'POST',
        headers:{
            'Content-Type':'application.json'
        },
        body:JSON.stringify(registerData)
    }

    const response=await fetch(createAccURL, registerConfig)
    
    return response.json()
}