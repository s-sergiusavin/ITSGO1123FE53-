const array = [1, 4, 5, 6, 7, 9, 10, 11]

// array.push(4)


// console.log(array);

// array.pop()

// console.log(array.unshift('zero')) // returneaza length-ul

// console.log(array.shift()) // returneaza elemntul scos


// array.forEach(function (element) {
//     console.log('E ' + element)
// })


// const newArray = array.map((element) => {
//     return element + 1;
// })

// console.log(newArray)


// const oldArray = array.map((element) => {
//     return element + 5;
// })
// console.log(oldArray)
// console.log('Indexul elementului 3 este: ' + array.indexOf(4));
// let myNum = 7
// let anotherNum = myNum
// myNum = 5;
// console.log(myNum)
// console.log(anotherNum)


// let arrayCopy = array;
// array[0] = 'zero'

// console.log(array)
// console.log(arrayCopy)


// arrayCopy = array.slice(2); // copiaza toate elementele de la o pozitie specificata
// console.log('Array dupa slice ' + array)
// console.log(arrayCopy)
// arrayCopy = array.slice(0, 3) // copiaza de la indexul specificat prin primul parametru pana la cel de-al doilea (nu e inclus)
// // console.log(arrayCopy)
// let changedArray = array.splice(3, 5) // decupeaza toate elementele unui array incepand cu indexul initial si NUMARUL DE ELEMENTE
// console.log(array)
// console.log(changedArray)


/**
 * .filter()
 * Filtering array elements
 * Returneaza UN NOU array cu elementele initiale care indeplinesc conditia
 * NU modifica arrayul initial
 */

// const lessThanThree = array.filter((element) => {
//     return element < 10
// })  
// console.log(lessThanThree)

// const lessThanFour = array.filter((element) => {
//     return element > 3
// })
// console.log(lessThanFour)

/**
 * .reverse()
 * Reverse array
 * MODIFICA arrayul initial
//  */

// array.reverse()
// console.log(array)

/**
 * .concat()
 * Imbinarea array-urilor
 */
// const concatArray = ['add', 'me'];
// console.log(array.concat(concatArray))

/**
 * .join()
 * Transform array into string
 */

// const redeclaredArray = [1, 2, 3, 4, 5]
// let stringFromArray = redeclaredArray.join(' 🥳 ')
// console.log(stringFromArray)

/**
 * .reduce()
 * Reduce array
 * Ia un array si il transforma intr-o valoare
 */
// const reduceArray = [1, 2, 3, 4]
// const reducedValue = reduceArray.reduce((accumulator, currentValue) => {
//     return accumulator * currentValue
// })
// console.log(reduceArray)
// console.log(reducedValue)



/**
 * .sort()
 * Sorting an array
 * modifica arrayul initial
 */


let arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11.4, 'asd', 'aac', 'sum']

// console.log(arrayToSort.sort());


// arrayToSort.sort((a, b) => {
//     return a - b;

// })

// console.log(arrayToSort)


/**
 * .find()
 * Returneaza PRIMUL ELEMENT care indeplineste conditia
//  */

// let arrayToFind = [1, 2, 78, 9, 2, 45]
// const value2 = arrayToFind.find((element) => {
//     return element === 2;
// })

// console.log(value2);


// arrayToFind = [
//     { name: 'Sergiu', city: 'Hong Kong' },
//     { name: 'Liviu', city: 'Singapore' },
//     { name: 'Cipri', city: 'Lisabona' },
//     { name: 'Alina', city: 'Polul Nord' },
//     { name: 'Abdul', city: 'Dubai' },
//     { name: 'Sergiu', city: 'Bangkok' },
// ]

// const foundElem = arrayToFind.find(element => {
//     return element.name === 'Sergiu';
// })
// console.log(foundElem)

/**
 * .includes()
 * Verificam daca un element exista intr-un array
 */

let includedElem = arrayToSort.includes(2005);
console.log(includedElem)