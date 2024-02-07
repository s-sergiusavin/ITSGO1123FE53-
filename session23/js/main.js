/**
 * RegExp - Regular Expressions
 * tipare care cauta anumite combinatii de caractere
 * https://regexr.com/
 * https://regex101.com/
 */

// setTimeout(() => {
//     console.log(4)
// })

let string = 'abcdefdce'
let pattern = /dcxe/

console.log(pattern.exec(string))
console.log(pattern.test(string))
console.log(string.match(pattern))

const loginBtn = document.getElementById('login')
const emailField = document.querySelector('#email')
const passwordField = document.getElementById('password')
const error = document.querySelector('#error')

const showError = (message) => {
    error.style.display = 'block'
    error.innerText = message
    error.style.color = 'red'
}

const validateEmail = (email, regex) => {
    console.log(email.match(regex))

    return !!email.match(regex) // converteste la o valoare booleana
}

const validatePassword = (value) => {
    // if (value === 'password') {
    //     return true
    // } else {
    //     return false
    // }

    return value === 'password'; // returneaza true sau fals dupa interpretarea expresiei
}

const clearInputs = () => {
    emailField.value = ''
    passwordField.value = ''
}

loginBtn.addEventListener('click', function (event) {
    event.preventDefault()
    console.log(event)

    const emailValue = emailField.value
    const passwordValue = passwordField.value
    const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

    if (emailValue === '' || passwordValue === '') {
        showError('All fields are required and must contain a value')
    } else {
        if (error.style.display === 'block') {
            error.style.display = 'none'
        }

        if (validateEmail(emailValue, regexEmailPattern) && validatePassword(passwordValue)) {
            alert('Logged in')
            clearInputs()
        } else {
            alert('Try again')
            showError('Incorrect email or password')
            clearInputs()
        }
    }
})

const testPasswordRegex = /[a-z]{1,}[A-Z]{1,}\d{1,}/g

const loginTitleElem = document.querySelector('h2.loginTitle')
console.log(loginTitleElem)
const toggleLoginBtn = document.querySelector('button.toggleLogin')
let isLoginPage = true;

toggleLoginBtn.addEventListener('click', function () {
    if (isLoginPage) {
        toggleLoginBtn.textContent = 'Switch to log in'
        loginTitleElem.innerText = 'Register'
        loginBtn.value = 'Sign up'
    } else {
        toggleLoginBtn.textContent = 'Switch to sign up'
        loginTitleElem.innerText = 'Login'
        loginBtn.value = 'Log in'
    }
    isLoginPage = !isLoginPage;
})

const firstNameElement = document.getElementById('firstName')
const lastNameElement = document.getElementById('lastName')
const ageElement = document.getElementById('age')

const firstName = "Dua"
const lastName = 'Lipa'
const age = 25

// firstNameElement.value = firstName
// lastNameElement.value = lastName
// ageElement.value = age

/**
 * Built in functions
 */

/**
 * setTimeout
 * Executa o functie pe care o primeste ca argument pentru o singura data, dupa o anumita perioada de timp
 * Perioada de timp este exprimata in milisecunde
 * Daca perioada de timp nu este mentionata, functia se executa la 0 secunde DUPA CE S-A EXECUTAT TOT CODUL DIN PAGINA
 */

// setTimeout(() => {
//     firstNameElement.value = firstName
//     lastNameElement.value = lastName
//     ageElement.value = age
// }, 5000)

function setFields() {
    firstNameElement.value = firstName
    lastNameElement.value = lastName
    ageElement.value = age
}

// setTimeout(setFields, 2000)

// setTimeout(() => {
//     console.log(4)
// }) // 1 secunde DUPA CE S-A EXECUTAT TOT CODUL DIN PAGINA
console.log(1)
function setTwo() {
    console.log(2)
}
console.log(3)
setTwo()
// o sa vedem in consola 1,3,2


/**
 * setInterval
 * apeleaza o functie cu frecvanta mentionata in intervalul specificat
 */

let start = 1;
// const intervalulMeu = setInterval( () => {
//     console.log(start)
//     // console.log(intervalulMeu)
//     start += 1
//     if(start === 10) {
//         clearInterval(intervalulMeu)
//         setFields()
//     }
// }, 2000)

// console.log('Intervalul meu ' + intervalulMeu)

/**
 * Objects recap
 */

const person = {
    firstName: 'Sergiu',
    age: 30,
    somethingUnique: 'asd',
    address: {
        street: 'street',
        country: 'RO'
    },
    sayHi: function () {
        console.log(`${this.firstName} says hi`)
    }
}

console.log(person.firstName)
person.sayHi()
person.firstName = 'Alex'
person.sayHi()

function logStuff() {
    console.log(this)
}

logStuff()

function addToFive(number) {
    console.log('addToFive ' + (number + 5))
}
addToFive(10)

const addToFiveCopy = addToFive;
addToFiveCopy(100)

const sayHiCopy = person.sayHi;
sayHiCopy()

const newPerson = person;
newPerson.firstName = 'Rares'
console.log(person)
console.log(newPerson)

// ... spread operator
const anotherPerson = { ...person, address: { ...person.address } }
// const anotherPerson2 = {
//     firstName: 'Sergiu',
//     age: 30,
//     address: {
//         street: 'street',
//         country: 'RO'
//     },
//     sayHi: function () {
//         console.log(`${this.firstName} says hi`)
//     },
//     address: {
//         street: 'street',
//         country: 'RO'
//     }
// }
console.log(anotherPerson)
anotherPerson.firstName = 'Nume nou'
anotherPerson.age = 15
anotherPerson.address.street = 'O strada noua'
console.log(person)
console.log(anotherPerson)

/**
 * Destructuring and rest operator
 */

const { somethingUnique, ...restObject } = person;
console.log(somethingUnique)
console.log(restObject)

const myArr = [111, 222, 333, 4]
const [first, second, third, ...restOperator] = myArr
console.log(first)
console.log(second)
console.log(third)
console.log(restOperator)

const simpleObject = {
    first: 'first',
    second: 'second',
    third: 'third',
    second: 'de doua ori'
}

console.log(simpleObject)

const newArr = [...myArr]
newArr[0] = -14
console.log(myArr)
console.log(newArr)



