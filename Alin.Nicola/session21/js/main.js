/**
 * Test object demo
 */

const example = {
    title: 'Example object',
    sayHi() {
        console.log('Hi!')
    }
}

console.log(example.title)
example.sayHi()
console.log(example)
console.dir(example)

console.log(document)
console.dir(document)

/**
 * Methods to get html elements by any selector
 * querrySelector/querrySelectorAll
 */

// returneaza PRIMUL element pe care il gaseste

const redSquare = document.querySelector('.redSquare');
console.log(redSquare)
console.dir(redSquare)

redSquare.style.backgroundColor = 'green';

// css background-colore => backgroundColor
// css padding-left => paddingLeft

const blueSquares = document.querySelectorAll('.blueSquare') // cauta dupa clasa
// const blueSquares = document.querySelectorAll('#blueSquare') // cauta dupa id
// const blueSquares = document.querySelectorAll('div') // cauta dupa numele tagului

console.dir(blueSquares)
blueSquares[0].style.backgroundColor = 'yellow'
blueSquares[1].style.backgroundColor = 'yellow'
blueSquares[2].style.backgroundColor = 'yellow'

blueSquares.forEach( (element) => {
    element.style.backgroundColor = 'orange'
})

/**
 * Method to get element by id
 * getElemenetById
 */

const changedListElem = document.getElementById('changedList')

console.dir('By id: ' + changedListElem)
changedListElem.style.border = '1px solid black'
changedListElem.style.backgroundColor = 'lightBlue'

/**
 * Method to get elements by tag name
 * getElementsByTagName
 */

const paragrphElem = document.getElementsByTagName('p');
console.dir(paragrphElem)

paragrphElem[0].innerText = 'This text was added later with JS'
paragrphElem[1].style.textTransform = 'uppercase'

/**
 * Method to get html ements by class name
 * getElementsByClassName
 */

const styledMessages = document.getElementsByClassName('styledMessages')
console.dir(styledMessages)
// styledMessages.forEach (element => {
//     // do something
// })

for(let i = 0; i < styledMessages.length; i++) {
    const tagName = styledMessages[i].tagName
    styledMessages[i].innerText = `This message was a ${tagName} and was styled by JS!!!`
}

const greenSquare = document.querySelector('.greenSquare');

function changeGreenSquare() {
    greenSquare.style.backgroundColor = 'lightgreen'
}

function mouseEnter() {
    greenSquare.style.backgroundColor = 'purple'
    greenSquare.style.border = ''
    greenSquare.innerText = ''
}

const mouseLeave = () => {
    greenSquare.style.backgroundColor = 'white'
    greenSquare.style.border = '3px solid black'
    greenSquare.innerText = 'black'
}

const focusInput = () => {
    greenSquare.style.backgroundColor = 'red'
    document.getElementsByTagName('label')[0].innerText = 'Changed after focus event'
}

const blurInput = () => {
    greenSquare.style.backgroundColor = 'black'
}

const onKeyDown = () => {
    greenSquare.style.backgroundColor = 'teal'
    console.log('On key down')
}

const demoKeyTextElem = document.getElementById('demoKeyText')
const onKeyUp = () => {
    greenSquare.style.backgroundColor = 'pink'
    demoKeyTextElem.innerText = document.getElementById('demoKey').value
    console.dir(document.getElementById('demoKey'))
}

const doSomething = () => {
    greenSquare.style.backgroundColor = 'green'
    greenSquare.style.border = ''
    greenSquare.innerHTML = ''
}

const readInput = () => {
    const readValueInputElem = document.getElementById('readInputValue')
    document.getElementById('textFromReadInput').innerHTML = readValueInputElem.value;
    // document.getElementById('textFromReadInput').innerHTML = document.getElementById('readInputValue').value;
}

const innerHtmlMessageElem = document.getElementById('innerHtmlMessage')

const styleThisText = () => {
    // innerHtmlMessageElem.innerText = 'This text was <strong>styled</strong> by <u>JS</u>'
    innerHtmlMessageElem.innerHTML = 'This text was <strong>styled</strong> by <u>JS</u>'
}
