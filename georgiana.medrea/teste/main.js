// Teste

const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}

switch (undefined) {
  case console.log(1):
  case console.log(2):
}

//   const action = "say_hello";
// switch (action) {
//   case "say_hello":
//     const message = "hello";
//     console.log(message);
//     break;
//   case "say_hi":
//     const message = "hi";
//     console.log(message);
//     break;
//   default:
//     console.log("Empty action received.");
// }

const action = "say_hello";
switch (action) {
  case "say_hello": {
    const message = "hello";
    console.log(message);
    break;
  }
  case "say_hi": {
    const message = "hi";
    console.log(message);
    break;
  }
  default: {
    console.log("Empty action received.");
  }
}

// switch (expr) {
//     case "Oranges":
//       console.log("Oranges are $0.59 a pound.");
//       break;
//     case "Apples":
//       console.log("Apples are $0.32 a pound.");
//       break;
//     case "Bananas":
//       console.log("Bananas are $0.48 a pound.");
//       break;
//     case "Cherries":
//       console.log("Cherries are $3.00 a pound.");
//       break;
//     case "Mangoes":
//     case "Papayas":
//       console.log("Mangoes and papayas are $2.79 a pound.");
//       break;
//     default:
//       console.log(`Sorry, we are out of ${expr}.`);
//   }

//   console.log("Is there anything else you'd like?");

const foo1 = 5;
switch (foo1) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log("default");
  // fall-through
  case 1:
    console.log("1");
}

const Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal is extinct.");
}

const foo2 = 1;
let output = "Output: ";
switch (foo2) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}

let n = 0;

while (n < 3) {
  n++;
}

console.log(n);

let n1 = 0;
let x = 0;

while (n1 < 3) {
  n1++;
  x += n1;
}

let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);

const arr = [1, 2, 3, 4, 5, 6];
for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
  console.log(arr[l], arr[r]);
}

function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(A() && B());
// Logs "called A" to the console due to the call for function A,
// && evaluates to false (function A returns false), then false is logged to the console;
// the AND operator short-circuits here and ignores function B

function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(B() || A());
// Logs "called B" due to the function call,
// then logs true (which is the resulting value of the operator)

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const cube = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]


function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

function foo3(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  foo3(i - 1);
  console.log(`end: ${i}`);
}

foo3(3);

// Logs:
// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41


const demoBoxElement = document.getElementById('testBox')

demoBoxElement.className = 'red'
demoBoxElement.className = ""

demoBoxElement.classList.add('blue')
demoBoxElement.classList.add('red')
demoBoxElement.classList.remove('blue')
demoBoxElement.classList.toggle('blue')
demoBoxElement.classList.toggle('blue')
demoBoxElement.classList.toggle('blue')

const demoImageElement = document.getElementById('demoImage')
const newImageElement = document.getElementById('newImage')

const imgSrc = demoImageElement.getAttribute('src')
newImageElement.setAttribute('src', imgSrc)


// EXERCITII IN JavaScript

// 1. Add event (click) on ul sa adauge sau sa scoada clasa red
// 2. Add event (mouseover and mouseout) on each li from ul 
// 3. Add event (click) on each li and mark it with x and red

// 1. Add event (click) on ul

// const ulElement = document.getElementsByTagName('ul')[0]

// ulElement.addEventListener('click', function() {
//   ulElement.classList.toggle('red');
// })

// 2. Add event (mouseover and mouseout) on each li from ul 

let listElements = document.querySelectorAll('li')

listElements.forEach(listElement => {
  //   listElement.addEventListener('mouseover', function() {
  //     this.classList.add('red');
  //   })
  //   listElement.addEventListener('mouseout', function() {
  //     this.classList.remove('red');
  //   })
  listElement.addEventListener('click', toggleListElements)
})

// // 3. Add event (click) on each li and mark it with x and red


function toggleListElements() {
  const toggleValue = this.classList.toggle('red')
  if (toggleValue) {
    const span = document.createElement('span')
    span.innerText = "x"
    this.appendChild(span)
  } else {
    this.getElementsByTagName('span')[0].remove()
  }
}

// Create a To do list in JS


const toDoInputElement = document.getElementById('toDoInput');
const addButtonElement = document.getElementsByClassName('addButton')[0];
const toDoListElement = document.getElementsByClassName('toDoListItems')[0];

function addItemsInTheList() {
  if (toDoInputElement.value !== '') {
    const newListItems = document.createElement('li');
    newListItems.className = 'newListItems';

    toDoListElement.appendChild(newListItems);

    newListItems.innerText = toDoInputElement.value;
    toDoInputElement.value = '';
  }
  else {
    alert('Introdu mai intai o valoare');
  }
}

addButtonElement.addEventListener('click', addItemsInTheList)
toDoInputElement.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addItemsInTheList()
  }
})

// RegExp

// let string = 'adgfdedd'
// let pattern = /ded/

// console.log(string.match(pattern)) // returneaza un obiect
// console.log(pattern.exec(string))  // returneaza un obiect
// console.log(pattern.test(string)) // returneza true sau false

// const emailField = document.getElementById('email')
// const passwordField = document.getElementById('password')
// const loginBtn = document.getElementById('login')
// const errorMsg = document.getElementById('error')

// function showError(message) {
//   errorMsg.style.display = 'block';
//   errorMsg.innerText = message;
//   errorMsg.style.color = 'red';
// }

// const validateEmail = (email, regex) => {
//   console.log(regex.test(email))
//   return regex.test(email);
// }

// const validatePassword = (value) => {
//   return value === 'password';
// }

// const clearInputs = () => {
//   emailField.value = ''
//   passwordField.value = ''
// }

// loginBtn.addEventListener('click', function (event) {
//   event.preventDefault();
//   console.log(event);

//   const emailValue = emailField.value;
//   const passwordValue = passwordField.value;
//   const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

//   if (emailValue === '' || passwordValue === '') {
//     showError('Toate campurile sunt obligatorii!!!')
//   } else {
//     if (errorMsg.style.display === 'block') {
//       errorMsg.style.display = 'none'
//     }
//     if (validateEmail(emailValue, regexEmailPattern) && validatePassword(passwordValue)) {
//       alert('Logged in')
//       clearInputs()
//     } else {
//       alert('Try again')
//       showError('Incorrect email or password')
//       clearInputs()
//     }
//   }
// })

const loginBtn = document.getElementById('login');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const error = document.getElementById('error');

const showError = (message) => {
  error.style.display = 'block';
  error.innerText = message;
  error.style.color = 'red';
}

const validateEmail = (email, regex) => {
  console.log(regex.test(email));
  return regex.test(email);
}

const validatePassword = (value) => {
  return value === 'password';
}

const clearInputs = () => {
  emailField.value = '';
  passwordField.value = '';
}

loginBtn.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(event);

  const emailValue = emailField.value;
  const passwordValue = passwordField.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

  if (emailValue === '' || passwordValue === '') {
    showError('All fields are mandatory!')
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

// let start = 1;
// const intervalulMeu = setInterval( () => {
//   console.log(start);
//   start = start + 1;
// }, 1000)

// HTTPS requests

// REST services
// Create -> POST
// Read -> GET
// Update -> PUT sau PATCH (update partial)
// Delete -> DELETE

// Get requests

const singleUserUrl = "https://reqres.in/api/users/2"

// fetch(singleUserUrl).then((response) => {
//   console.log(response)
//   response.json().then(data => {
//     console.log(data)
//   })
// })

const userListUrl = "https://reqres.in/api/users?page=2"
const singleUserNotFoundUrl = "https://reqres.in/api/users/23"

const allUserList = new Promise( (resolve, reject) => {
  fetch(singleUserNotFoundUrl).then( response => {
    console.log(response)
    if (response.status !== 200) {
      throw "Ai o eroare"
    }
    return response.json()
  })
  .then( data => {
    resolve(data)
  })
  .catch( error => {
    reject(error)
  })
})

allUserList.then( 
  value => {
    console.log(value)
  },
  error => {
    console.log(error)
  }
)

const createUserUrl = 'https://reqres.in/api/users'
const user = {
    "name": "morpheus",
    "job": "leader"
}

const createUser = new Promise( (resolve, reject) => {
  fetch(createUserUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then( response => {
    console.log(response)
    if (response.status !== 201) {
      throw "Userul nu a fost creat"
    }
    return response.json()
  })
  .then( data => {
    resolve(data)
  })
  .catch( error => {
    reject(error)
  })
})

createUserUrl.then(
  value => {
    console.log(value)
  },
  error => {
    console.log(error)
  }
)

// PUT method

const updateUserUrl = "https://reqres.in/api/users/2"
const userUpdate = {
  "name": "morpheus",
  "job": "leader"
}

const updateUserUrlConfig = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userUpdate)
}

const updateUser = new Promise( (resolve, reject) => {
  fetch(updateUserUrl, updateUserUrlConfig).then( response => {
    return response.json()
  })
  .then( data => {
    resolve(data)
  })
  .catch( error => {
    reject(error)
  })
})

updateUser.then(
  value => console.log(value),
  error => console.error(error)
)















