/**
 * Array methods
 */

const array = [1, 2, 3, '4', 5, 6, 7]

console.log(array.length)
// array[1] = 100;
// array[4] = 5;
// array[10] = 11;

console.log(array)

/**
 * Add or remove elements in array
 */

array.push(5) // adaugam element la finalul array-ului
console.log(array)
array.pop() // scoatem ultimul element de la finalul arrayului
console.log(array)
console.log(array.unshift('zero')) // returneaza length-ul
console.log(array.shift()) // returneaza elemntul scos
console.log(array)

// lifo last in first out
// fifo first in first out

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// array.forEach(function () {})

// array.forEach( () => {})

// array.forEach(iterateInArray);
// function iterateInArray(element) {
//     console.log('Element ' + element)
// }

array.forEach(function (element) {
    console.log('E ' + element)
})

// .map() method => iterates trough an array and RETURNS this array

const newArray = array.map((element) => {
    return element + 1;
})

console.log(newArray)

/**
 * Returns the index of an array
 * .indexOf()
 */

console.log('Indexul elementului 3 este: ' + array.indexOf(3));
array[2] = 7
console.log(array)
array[array.indexOf('4')] = 777;
console.log(array)
console.log(array.indexOf(-15)); // daca elementul nu exista, va returna -1 intotdeauna
console.log(array.indexOf('asdf')); // daca elementul nu exista, va returna -1 intotdeauna

// copy array elements

let myNum = 7
let anotherNum = myNum
myNum = 5

console.log(myNum)
console.log(anotherNum)

let arrayCopy = array;
array[0] = 'zero'

console.log(array)
console.log(arrayCopy)

/**
 * .slice()
 * Slice method
 * Copy portions of array
 */

arrayCopy = array.slice(2); // copiaza toate elementele de la o pozitie specificata
console.log('Array dupa slice ' + array)
console.log(arrayCopy)
arrayCopy = array.slice(0, 5) // copiaza de la indexul specificat prin primul parametru pana la cel de-al doilea (nu e inclus)
console.log(arrayCopy)

/**
 * .splice()
 * Splice methods
 * cut portions of array
 */
console.log('---------------')
console.log(array)
// let changedArray = array.splice(2) // decupeaza toate elementele unui array incepand cu pozitia specificata
// console.log(array)
// console.log(changedArray)

let changedArray = array.splice(2, 3) // decupeaza toate elementele unui array incepand cu indexul initial si NUMARUL DE ELEMENTE
console.log(array)
console.log(changedArray)

/**
 * .filter()
 * Filtering array elements
 * Returneaza UN NOU array cu elementele initiale care indeplinesc conditia
 * NU modifica arrayul initial
 */

const lessThanThree = array.filter((element) => {
    return element < 3
})

console.log(lessThanThree)

/**
 * .reverse()
 * Reverse array
 * MODIFICA arrayul initial
 */

array.reverse()
console.log(array)

/**
 * .concat()
 * Imbinarea array-urilor
 */

const concatArray = ['add', 'me'];
// const newConcatenatedArray = array.concat(concatArray)
// console.log(newConcatenatedArray)
console.log(array.concat(concatArray))
console.log(concatArray.concat(array))
console.log([1, 2, 3].concat(concatArray))

/**
 * .join()
 * Transform array into string
 */

const redeclaredArray = [1, 2, 3, 4, 5]
let stringFromArray = redeclaredArray.join(' 🥳 ')
console.log(stringFromArray)

/**
 * .reduce()
 * Reduce array
 * Ia un array si il transforma intr-o valoare
 */

const reduceArray = [1, 2, 3, 4]
const reducedValue = reduceArray.reduce((accumulator, currentValue) => {
    return accumulator * currentValue
})
console.log(reduceArray)
console.log(reducedValue)

/**
 * .sort()
 * Sorting an array
 * modifica arrayul initial
 */

let arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11.4, 'asd', 'aac', 'sum']

// console.log(arrayToSort.sort());

arrayToSort.sort((a, b) => {
    // return a - b;
    return b - a;
})

console.log(arrayToSort)

/**
 * .find()
 * Returneaza PRIMUL ELEMENT care indeplineste conditia
 */

let arrayToFind = [1, 2, 78, 9, 2, 45]
const value2 = arrayToFind.find((element) => {
    return element === 2;
})

console.log(value2);

arrayToFind = [
    { name: 'Eduard', city: 'Hong Kong' },
    { name: 'Liviu', city: 'Singapore' },
    { name: 'Cipri', city: 'Lisabona' },
    { name: 'Alina', city: 'Polul Nord' },
    { name: 'Abdul', city: 'Dubai' },
    { name: 'Eduard', city: 'Bangkok' },
]

const foundElem = arrayToFind.find(element => {
    return element.name === 'Eduard';
})

const foundElement = arrayToFind.find(element => element.name === 'Eduard')

console.log(foundElem)

// Pentru arrow functions
// Daca avem un singur parametru, parantezele rotunde POT sa lipseasca
// Daca se scrie pe o singura linie si este o singura expresie, parantezele acolade sunt optionale,
// iar return se face implicit

/**
 * .includes()
 * Verificam daca un element exista intr-un array
 */

let includedElem = arrayToSort.includes(2005);
console.log(includedElem)

/**
 * Objects
 */

const createPerson = (name, age, gender) => {
    return {
        firstName: name,
        age: age,
        gender // gender: gender
    }
}

const eduard = createPerson('eduard', 19, 'male')
const maria = createPerson('maria', 23, 'female')

console.log(eduard)

/**
 * Create objects using OBJECT LITERAL method
 */

const person = {
    name: 'Eduard',
    lastName: 'Dumbrava',
    age: 19,
    address: {
        city: 'Constanta',
        zip: 500
    },
    sayHi: function () {
        console.log(`${this.lastName} says hi`)
    },
    sayHiArrow: () => {
        console.log(`${this.lastName} says hi`)
    }
}

person.sayHi()
person.sayHiArrow()
person.lastName = 'Popescu'
person.sayHi()

/**
 * Create objects using 'new' keyword
 */

const otherPerson = new Object(person)
otherPerson.name = 'Eduard D';

console.log(person)
console.log(otherPerson)

const bicycle = {
    gear: 21,
    setGear: function (gear) {
        this.gear = gear;
    }
}

bicycle.gear = 14;
console.log(bicycle)
bicycle.setGear(25)
console.log(bicycle)

/**
 * Classes
 */

class Car {
    wheels = 4;

    constructor(model, maxSpeedKmh) {
        this.model = model;
        this.maxSpeed = maxSpeedKmh;
    }
}

const vw = new Car('vw', 150);
const porsche = new Car('porsche', 450);

vw.maxSpeed = 100;
vw.wheels = 100;

console.log(vw)
console.log(porsche)


