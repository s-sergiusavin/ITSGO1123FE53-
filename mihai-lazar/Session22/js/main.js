const demoBoxElem = document.getElementById('testBox');

demoBoxElem.className = 'red';
demoBoxElem.className = '';

demoBoxElem.classList.add('blue');
demoBoxElem.classList.add('red');
demoBoxElem.classList.remove('blue');
demoBoxElem.classList.toggle('blue');

/**
 * get or set atributes
 */

const demoImageElem = document.getElementById('demoImage');
const newImgElem = document.getElementById('newImg');

const imgSrc = demoImageElem.getAttribute('src');
console.log(imgSrc);
newImgElem.setAttribute('src', imgSrc);
newImgElem.setAttribute('src', 'https://pics.craiyon.com/2023-05-24/c45114b4373b46c8af23a3e8f6c9657b.webp');

// const ulElem=document.getElementsByTagName('ul')[0];
// ulElem.addEventListener('click', ()=>{
//     ulElem.classList.toggle('blue')
// })

let listItemsElem = document.querySelectorAll('li')
console.dir(listItemsElem)
listItemsElem.forEach(listItem => {
    // listItem.addEventListener('mouseover', function () {
    //     this.classList.add('red')
    //     console.dir(this)
    // })

    // listItem.addEventListener('mouseout', function () {
    //     this.classList.remove('red')
    //     console.dir(this)
    // })
    listItem.addEventListener('click', toggleListItems)
})

function toggleListItems() {
    const toggleVal = this.classList.toggle('red')
    console.log(toggleVal)
    if (toggleVal) {
        const span = document.createElement('span')
        span.innerText = 'x'
        this.appendChild(span)
    } else {
        this.getElementsByTagName('span')[0].remove()
        console.dir(this)
        console.dir(document)
    }
}

const clickMeElem = document.getElementById('clickMe')
clickMeElem.style.cursor = 'pointer';

const demoInputElem = document.getElementById('demoInput')
demoInputElem.addEventListener('keypress', function (event) {
    console.log(event)
    if (event.key === 'Enter' && demoInputElem.value.lenght > 3) {
        demoInputElem.style.background = 'lightgreen';
    }
})

const ulElem = document.getElementsByTagName('ul')[0];

clickMeElem.addEventListener('click', function () {
    const newLiElem = document.createElement('li')
    ulElem.appendChild(newLiElem)
    listItemsElem = document.getElementsByTagName('li')
    if (demoInputElem.value) {
        newLiElem.innerText = demoInputElem.value;
        demoInputElem.value = '';
    } else {
        newLiElem.innerText = 'Elem ' + listItemsElem.lenght;
    }
})

const toDoInputElem = document.getElementById('toDoInput')
const addButtonElem = document.getElementsByClassName('addButton')[0]
const toDoListElem = document.getElementsByClassName('toDoListItems')[0]

function addItemsToList() {
    const canAdd = checkPlan()
    if (canAdd) {
        if (toDoInputElem.value !== '') {
            const newLiItemElem = document.createElement('li')
            newLiItemElem.className = 'newLiItems'

            toDoListElem.appendChild(newLiItemElem)
            newLiItemElem.innerHTML = toDoInputElem.value;
            toDoInputElem.value = '';
        } else {
            // alert('Te rugam sa introduci o valoare mai intai')
            toDoInputElem.classList.toggle('blue')
        }
    } else {
        alert('Te rugam sa treci la un plan superior')
    }
}

addButtonElem.addEventListener('click', addItemsToList)
toDoInputElem.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addItemsToList()
    }
})

function checkPlan() {
    //returneaza o valoare booleana (adevarat || fals)
    const newLiItemsNum = document.getElementsByClassName('newLiItems').length
    return newLiItemsNum < 3;
}

/**
 * RegExp - Regular expressions
 * cauta anumite combinatii de caractere
 */

let string = 'abcdefdce'
let pattern = /dce/

console.log(pattern.exec(string))
console.log(pattern.test(string))
console.log(string.match(pattern))

const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

const myFormElem = getElementById('myForm')
myFormElem.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)

    const emailAdressVal = event.srcElement[0].value;
    console.dir(emailAdressVal)

    if (regexEmailPattern.test(emailAdressVal)) {
        alert('Este email')
    } else {
        alert('Nu este email')
    }
})