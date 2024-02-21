/**
 * change some properties for login.html with js
 */
const registerButtonElement = document.getElementById("switchButton");
function styleButton(element) {
  element.style.backgroundColor = "grey";
  element.style.border = "1px solid yellow";
  element.style.color = "white";
}
styleButton(registerButtonElement);

function mouseEnter() {
  registerButtonStyle.style.backgroundColor = "purple";
}

const mouseLeave = () => {
  registerButtonStyle.style.backgroundColor = "grey";
};

const loginBtnElement = document.getElementById("loginButton");
loginBtnElement.innerText = "Wrong password";
console.dir(loginBtnElement);

const focusInput = () => {
  loginBtnElement.style.backgroundColor = "red";
  loginBtnElement.style.border = "1px solid yellow";
};
function blurInput() {
  loginBtnElement.style.backgroundColor = "grey";
}

// first we have to set login page as true
let isLoginPage = true

// get the elements and assign them to variables
// const switchButtonElem = document.getElementById('switchButton')
// const loginButtonElem = document.getElementById('loginButton')
// const usernameField = document.getElementById('username')
// const passwordField = document.getElementById('password')
// const errorField = document.getElementById('error')

// another method to take the elements and put them into an object
const ref = {
  switchButton: document.getElementById('switchButton'),
  loginButton: document.getElementById('loginButton'),
  emailField: document.getElementById('username'),
  passwordField: document.getElementById('password'),
  error: document.getElementById('error'),
}

// event with switch button
// .this used for button manipulation inner text as we are in the ref.switchButtonEvent
ref.switchButton.addEventListener('click', function () {
  const headerTitleElement = document.getElementById('headerTitle')
  const forgotPasswordElement = document.getElementById('forgotPassword')

  // we must be careful how we
  isLoginPage = !isLoginPage

  if (isLoginPage) {
    headerTitleElement.innerText = 'Login'
    // forgotPasswordElem.style.display = 'inline'
    forgotPasswordElement.style.visibility = 'visible' // using visible the layout is  not changing as it is for inline
    ref.loginButton.value = 'Login'
    this.innerText = 'Switch to create account page'
  } else {
    headerTitleElement.innerText = 'Create new account'
    //forgotPasswordElem.style.display = 'none'
    forgotPasswordElement.style.visibility = 'hidden' // using hidden the layout is not changing as it is for none
    ref.loginButton.value = 'Sign Up'
    this.innerText = 'Switch to login page'
  }
})

const showError = (message) => {
  ref.error.style.display = 'block'
  ref.error.innerText = message
  ref.error.style.color = 'red'
}

const validateEmail = (emailValue, regex) => {
  // console.log(emailValue.match(regex))
  return !!emailValue.match(regex) // converteste la o valoare booleana
}

const validatePassword = (passwordValue) => {
  return passwordValue.length > 3
}

const clearInputs = () => {
  ref.emailField.value = ''
  ref.passwordField.value = ''
}

loginButton.addEventListener('click', function (event) {
  event.preventDefault()

  const emailValue = ref.emailField.value
  const passwordValue = ref.passwordField.value
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g

  error.style.display = 'none'
    if (emailValue === '' || passwordValue === '') {
        showError('All fields are required and must contain a value!')
    } else {
        if (validateEmail(emailValue, regexEmailPattern) && validatePassword(passwordValue)) {
            if (isLoginPage) {
                login(emailValue, passwordValue).then( data => {
                    console.log(data)
                    clearInputs()
                    window.open('pages/feed.html', '_self')
                })
            } else {
                createAccount().then( data => {
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

async function login(emailValue, passwordValue) {
  const loginUrl = 'https://reqres.in/api/login'
  let loginData = {
    email: emailValue,
    password: passwordValue,
  }

  loginData = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  }

  const loginConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  }

  const response = await fetch(loginUrl, loginConfig)

  return response.json()
}

async function createAccount(emailValue, passwordValue) {
  const createAccountUrl = 'https://reqres.in/api/register'
  emailValue = 'eve.holt@reqres.in'
  passwordValue = 'pistol'

  const registerData = {
    email: emailValue,
    password: passwordValue,
  }

  const registerConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerData),
  }

  const response = await fetch(createAccountUrl, registerConfig)

  return response.json()
}
