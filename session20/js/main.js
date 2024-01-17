/**
 * Array methods
 */

const array = [1, 2, 3, '4', 5, 6, 7,]

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
array.pop() // scoatem ultimul elemaent de la finalul array-ului
console.log(array)
console.log(array.unshift('zero')) //returneaza lenghht-ul
console.log(array.shift()) //returneaza elementul scos
console.log(array)

//lifo last in first out
//fifo first in first out

// for (let i =0; i < array.length; i++) {
//     console.log(array[i])
// }

// array.forEach(function (){})

// Array.forEach( () => {})
// array.forEach(iterateArray);

array.forEach(function(element) {
    console.log('E' + element)
})
  
    
const newArray = array.map( (element) => {
    return element + 1;
})

console.log(newArray)

console.log('indexul elementului 3 este ' + array.indexOf(3));
array[2] = 7
console.log(array)
array[array.indexOf('4')] = 777;
console.log(array)
console.log(array.indexOf(-15)); // dacaelementul nu exista va returna -1 intodeauna
console.log(array.indexOf('asdf')); // dacaelementul nu exista va returna -1 intodeauna

let myNum = 7
let anotherNUm = myNum
myNum =5


console.log(myNum)
console.log(anotherNUm)

let arrayCopy = array;
array[0] = 'zero'

console.log(array)
console.log(arrayCopy)

/**
 * slice method
 */

 arrayCopy = array.splice(2); // copiaza toate elementele de la o pozitie specificata
 console.log('Array dupa slice')
 console.log(arrayCopy)
 arrayCopy= array.slice(0.5)//copiaza de la indexul specficat prein primul parametru pana la  cel de-al doilea (nu e inclus)
 console.log(arrayCopy)

 /**
  * splice method
  * cut portions of array
  */
 console.log('--------------')
console.log(array)
//  let changeArray = array.splice(2,3) //decupleaza toate elementele unui array incepand cu pozitia specificata,
//  console.log(array)
//  console.log(changeArray)

let changeArray = array.splice(2,3) //decupleaza toate elementele unui array incepand cu pozitia specificata,
 console.log(array)
 console.log(changeArray)


 /**
  * .filter
  * filter array elements
  */

 const lessThanTheree = array.filter( (element) => {
    return element < 3  
 })

 console.log(lessThanTheree)

 /**
  * .reverse
  * Reverse array
  * MODIFICA arrayul initial
  */

array.reverse()
console.log(array)

const concatArray = ['add', 'me'];
const newConcatenateArrat = array.concat(concatArray)
console.log(newConcatenateArrat)




