/**
 * Array methods
 */

const array = [1, 2, 3, '4', 5, 6, 7];

console.log(array.length);
// array[1] = 100;
// array[4] = 5;
// array[10] = 11;

console.log(array);

/**
 * add or remove elements in array
 */

array.push(5); // adaugam element la finalul arrayului
console.log(array);
array.pop(); // scoatem elementul de la finalul arrayului
console.log(array);
console.log(array.unshift('zero')); // returneaza lengthul
console.log(array.shift()); // returneaza elementul scos
console.log(array);

// lifo - last in first out
// fifo - first in first out

// for (let i=0; i<array.length; i++){
//     console.log(array[i]);
// }

// array.forEach(function() {})
// array.forEach( ()=> {})

// array.forEach(iterateInArray);
// function iterateInArray(element) {
//     console.log(`Element` + element);
// }

array.forEach(function (element) {
    console.log('E ' + element)
})

// .map method => iterates through an array and returns this array

const newArray = array.map((element) => {
    return element + 1;
})
console.log(newArray);

/**
 *  Returns the index of an array
 *  .indexOF
 */

console.log('Indexul elementului 3 este ' + array.indexOf(3));
array[2] = 7;
console.log(array);
array[array.indexOf('4')] = 777;
console.log(array);
console.log(array.indexOf(-15)); // daca elementul nu exista va returna -1 intotdeauna
console.log(array.indexOf('Orice')); // daca elementul nu exista va returna -1 intotdeauna

// copy array elements

let myNum = 7;
let anotherNum = myNum;
myNum = 5;
console.log(myNum);
console.log(anotherNum);

let arrayCopy = array;
array[0] = 'zero';

console.log(array);
console.log(arrayCopy);

/**
 * Slice method
 */

arrayCopy = array.slice(2); // copiaza toate elementele de la o pozitie specificata
console.log(arrayCopy);
arrayCopy = array.slice(0, 5) // copiaza de la indexul specificat prin primul parametru (inclus) pana la cel de-al doilea (neinclus)
console.log(arrayCopy);

/**
 * Splice method
 * cut portions of arrays
 */

let changedArray = array.splice(2, 3) // decupeaza toate elementele unui array incepand cu indexul initial si numarul de elemente

/**
 * .filter
 * Filtering array elements
 * Returneaza un nou array cu elementele initiale care indeplinesc conditia data, nu modifica arrayul initial
 */

const lessThanThree = array.filter((element) => {
    return element < 3;
})

console.log(lessThanThree);

/**
 * .reverse
 * Reverse an array
 * Modifica arrayul initial 
 */

array.reverse();
console.log(array);

/**
 * .concat
 * Concatenare de arrayuri
 */

const concatArray = ['add', 'me'];
const newConcatArray = array.concat(concatArray);
console.log(newConcatArray)

/**
 * .join
 * Transform array into string
 * nu modifica arrayul
 */

let stringFromArray = array.join();
console.log(stringFromArray);

/**
 * .reduce
 * Reduce array
 * Ia un array si il transforma intr-o valoare fara sa modifice arrayul
 */

const reducedArray = [1, 2, 3, 4];
const reducedVal = reducedArray.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
})

console.log(reducedArray);
console.log(reducedVal);

/**
 * .sort()
 * Sorting an array
 * Modifica arrayul initial
 */

let arrayToSort = [1, 6, 200, 43, -8, 1024, 800, 11.4]

// console.log(arrayToSort.sort())

arrayToSort.sort((a, b) => {
    return a - b;
})

console.log(arrayToSort);

/**
 * .find
 * Returneaza primul element care indeplineste conditia data
 */

let arrayToFind = [1, 2, 78, 9, 2, 45];
const value2 = arrayToFind.find((element) => {
    return element === 2;
})

console.log(value2);

arrayToFind = [
    { name: 'Mihai', city: 'Tokyo' },
    { name: 'Sergiu', city: 'Singapore' },
    { name: 'Cipri', city: 'Lisabona' },
    { name: 'Abdul', city: 'Dubai' },
    { name: 'Mihai', city: 'Taipei' }
]

const foundElem = arrayToFind.find(element => {
    return element.name === 'Mihai';
})

console.log(foundElem);

// Pt arrow funtions, daca avem un singur elemet, parantezele rotunde pot sa lipseasca.
// Daca se scrie pe o singura linie si este o singura expresie, parantezele acoldae pot sa lipseasca, iar returnul se face implicit

/**
 * .includes
 * Verificam daca un element exista intr-un array
 */

let includedElem = arrayToSort.includes(200);
console.log(includedElem);

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

const mihai = createPerson('Mihai', 22, 'male');
const maria = createPerson('Maria', 21, 'female');

console.log(mihai);

/**
 * Create objects using - object literal -
 */

const person = {
    name: 'Mihai',
    lastName: 'Lazar',
    age: 22,
    adress: {
        city: 'cluj',
        zip: 40000
    },
    sayHi: function () {
        console.log(`${this.lastName} says hi`);
    },
    sayHiArrow: () => {
        console.log(`${person.lastName} says hi`);
    }
}

person.sayHi;
person.sayHiArrow;

/**
 * Create obj using 'new' keyword
 */

const otherPerson = new Object(person);
otherPerson.name = 'Mihai F';

console.log(person);
console.log(otherPerson);

const bicycle = {
    gear: 21,
    setGear: function (gear) {
        this.gear = gear;
    }
}

bicycle.gear = 14;
console.log(bicycle);
bicycle.setGear(25);
console.log(bicycle);