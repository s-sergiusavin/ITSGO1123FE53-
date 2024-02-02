const demoBoxElement = document.getElementById('testBox')
console.dir(demoBoxElement)

// modify the className of the testBox but not adding class in html instead can be done in js
demoBoxElement.className = 'red'
demoBoxElement.className = ''

// modify the classList of the testBox, when we change the value is changed also in console and this can be checked
/**
 * Three methods of manipulating the classList: .add, .remove, .toggle (oscilate between two states)
 */
demoBoxElement.classList.add('blue')
demoBoxElement.classList.add('red')

demoBoxElement.classList.remove('blue')

// if we put blue first will be set blue, if we put another one with blue will be disabled, if we put the third time it will be in place again, so the states for toggle are like enable/disable or on/off.
demoBoxElement.classList.toggle('blue')
demoBoxElement.classList.toggle('blue')
demoBoxElement.classList.toggle('blue')

/**
 * get or set attributes
 * attributes = inside every html open tag - we are calling them attributes
 */
const demoImageElement = document.getElementById('demoImage')
const newImageElement = document.getElementById('newImage')

// new variable to get the attribute
const imgSrc = demoImageElement.getAttribute('src')
console.log(imgSrc)
// now we set the attribute for the second src because we don't have it in src set
newImageElement.setAttribute('src', imgSrc) // for set we need two arguments

// manipulate list from js
// const ulElement = document.getElementsByTagName("ul")[0];
// atasam un eveniment intr-o functie cu doua argumente, primul e string, al doilea ce vrem sa faca
// ulElement.addEventListener('click', () => {
//     ulElement.classList.toggle('blue')
// })
// now for individual elements
let listItemsElements = document.querySelectorAll('li')
console.dir(listItemsElements)
listItemsElements.forEach((listItem) => {
  // listItem.addEventListener('mouseover', function() {
  //     // this reprezinta lista
  //     this.classList.add('red')
  //     console.dir(this)

  // })

  // listItem.addEventListener('mouseout', function() {
  //     this.classList.remove('red')
  //     console.dir(this)
  // })
  listItem.addEventListener('click', toggleListItems)
})
// we can also define a function - example to select them but using toggle on the same item return true or false
function toggleListItems() {
  const toggleValue = this.classList.toggle('red')
  console.log(toggleValue)
  if (toggleValue) {
    // createElement is a function that create a span
    const span = document.createElement('span')
    span.innerText = 'x'
    // new method for this case appendChild
    this.appendChild(span)
  } else {
    // to avoid adding infinte x's
    this.getElementsByTagName('span')[0].remove()
    console.dir(this)
    console.dir(document)
  }
}
// Click Me - demo input
const clickMeElement = document.getElementById('demoInput')
clickMeElement.style.cursor = 'pointer'

const demoInputElement = document.getElementById('demoInput')
// keypress is also an atribute
demoInputElement.addEventListener('keypress', function (event) {
  console.log(event)
  if (event.key === 'Enter' && demoInputElement.value.lenght > 3)
    demoInputElement.style.background = 'green'
})
const ulElement = document.getElementsByTagName('ul')[0]

clickMeElement.addEventListener('click', function () {
  const newLiElement = document.createElement('li')
  ulElement.appendChild(newLiElement)
  listItemsElements = document.getElementsByTagName('li')
  if (demoInputElement.value) {
    newLiElement.innerText = demoInputElement.value
    demoInputElement.value = ''
  } else {
    newLiElement.innerText = 'Elem ' + listItemsElements.length
  }
})

// manipulate addItem and Button with js
const toDoInputElement = document.getElementById('toDoInput')
const addButtonElement = document.getElementsByClassName('addButton')[0]
const toDoListElement = document.getElementsByClassName('toDoListItems')[0]

function addItemsInTheList() {
  const canAdd = checkPlan()
  if (canAdd) {
    if (toDoInputElement.value !== '') {
      const newListItemElement = document.createElement('li')
      newListItemElement.className = 'newListItems'

      toDoListElement.appendChild(newListItemElement)
      newListItemElement.innerHTML = toDoInputElement.value
      toDoInputElement.value = ''
    } else {
      //  alert('Te rugam sa introduci o valoare mai intai') // un lucru rau din js
      //  console.log('Cod dupa alerta')
      // prompt('Te rugam sa introduci o valoare mai intai');
      // confirm('Te rugam sa introduci o valoare mai intai');
      // in afara de console.dir si console.log cele metionate nu trebuie folosite, sunt alte optiuni
      toDoInputElement.classList.toggle('blue')
    }
  } else {
    alert('Te rugam sa treci la un plan superior')
    toDoInputElement.value = ''
  }
}
// when we manipuate let's say button with addEventListener we need two paramenters: 'event' and function
// 'click' is an event
// 'keypress' is an event
// event can be defined also in function as a parameter
addButtonElement.addEventListener('click', addItemsInTheList)
toDoInputElement.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addItemsInTheList()
  }
})

function checkPlan() {
  // checkPlan-ul o sa returneze o valoare booleana(adevarat || fals)
  const newListItemsNumber =
    document.getElementsByClassName('newListItems').length // lenght reprezinta lungimea
  return newListItemsNumber < 3
  // return-ul mai poate fi scris in if
  // if(newListItemsNumber < 3) {
  //   return true
  // } else
  // return false
}

/**
 * ceva foarte complicat - ca si functionalitate
 * RegExp - Regular Expressions
 * tipare care cauta anumite combinatii de caractere
 * https://regexr.com/
 * https://regex101.com/
 * \d - evidenteaza ce digiti avem
 * \D - orice altceva in afara de digiti
 * [abc] - cauta caracterele
 * \s orice spatiu
 * \S fara spatiu
 * se pot verifica pe site
 *
 */

let string = 'abcdefdce'
let pattern = /dce/

// prima metoda exec
console.log(pattern.exec(string))
// a doua metoda test
console.log(pattern.test(string))
// a treia metoda match
console.log(string.match(pattern))

// alt exemplu
const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;
// tot ce nu e digit de 4 caractere si de 2 caractere

const myFormElement = document.getElementById('myForm')
myFormElement.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log(event)

  const emailAddressValue = event.srcElement[0].value
  console.dir(emailAddressValue)

  // verificare adresa de email pe input
  if(regexEmailPattern.test(emailAddressValue)) {
    alert('Este email')
  } else {
    alert('Nu este e-mail')
  }
})


// !! reprezinta opusul opusului - care returneaza valoarea true
// ! reprezinta opusul - si returneaza valoarea false
console.log(-3)
console.log(!!-3)
console.log(-3)
console.log(!-3)
