/**
 * Test Obj demo
 */

const example = {
    title: 'Example object',
    sayHi() {
        console.log('Hi!')
    }
}

console.log(example.title);
example.sayHi();
console.log(example);
console.dir(example);

console.log(document);
console.dir(document);

/**
 * Methods to get html elements by any selector
 * querySelector/All
 */

// returneaza primul element pe care il gaseste

const redSquare = document.querySelector('.redSquare');
console.log(redSquare);
console.dir(redSquare);

redSquare.style.backgroundColor = 'green';

// css background-color => backgroundColor
// css padding-left => paddingLeft

const blueSquares = document.querySelectorAll('.blueSquare'); // cauta dupa clasa
// const blueSquares=document.querySelectorAll('#blueSquare'); // cauta dupa id
// const blueSquares=document.querySelectorAll('div'); // cauta dupa tag

console.dir(blueSquares);
blueSquares[0].style.backgroundColor = 'yellow';

blueSquares.forEach((element) => {
    element.style.backgroundColor = 'orange';
})

/**
 * Method to get element by id
 * getElementById
 */

const changedListElem = document.getElementById('changedList');
console.dir(changedListElem);
changedListElem.style.border = '1px solid black';
changedListElem.style.backgroundColor = 'lightBlue';

/**
 * Method to get elemnts by tag name
 * getElementsByTagName
 */

const paragraphElem = document.getElementsByTagName('p');
console.dir(paragraphElem);

paragraphElem[0].innerText = 'This text was later added with js';
paragraphElem[1].style.textTransform = 'uppercase';

/**
 * Method to get html elements by class name
 * getElemByClassNmae
 */

const styledMsg = document.getElementsByClassName('styledMsg');
console.dir(styledMsg);
// styledMsg.forEach((element)=>{
//     //do something
// })

for (let i = 0; i < styledMsg.length; i++) {
    const tagName = styledMsg[i].tagName
    styledMsg[i].innerText = `This message was a ${tagName} styled by js`
}

const greenSquare = document.querySelector('.greenSquare');

function changedGreenSqaure() {
    greenSquare.style.backgroundColor = 'lightgreen';
}

function mouseEnter() {
    greenSquare.style.backgroundColor = 'purple';
    greenSquare.style.border = '';
    greenSquare.innerText = '';
}

const mouseLeave = () => {
    greenSquare.style.backgroundColor = 'white';
    greenSquare.style.border = '3px solid black';
    greenSquare.innerText = 'black';
}

const focusInput = () => {
    greenSquare.style.backgroundColor = 'red';
    document.getElementsByTagName('label')[0].innerText = 'Changed after focus event';
}

const blurInput = () => {
    greenSquare.style.backgroundColor = 'black';
}

const onKeyDown = () => {
    greenSquare.style.backgroundColor = 'teal';
}

const demoKeyTextElem = document.getElementById('demoKeyText');
const onKeyUp = () => {
    greenSquare.style.backgroundColor = 'pink';
    demoKeyTextElem.innerText = document.getElementById('demoKey').value;
}

const doSomething = () => {
    greenSquare.style.backgroundColor = 'green';
    greenSquare.style.border = '';
    greenSquare.innerHTML = '';
}

const readInput = () => {
    const readInputElem = document.getElementById('readInputValue');
    document.getElementById('testFromReadInput').innerHTML = readInputElem.value;
}

const innerHTMLmsgElem = document.getElementById('innerHTMLmsg');

const styleThisText = () => {
    innerHTMLmsgElem.innerHTML = 'this text was <strong>Styled</strong> by <u>JS</u>'
}