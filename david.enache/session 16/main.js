console.log('sergiu');

// Aceasta este o linie cu cod comentat

/**
 * Multi line comment
 * care nu va fi luat in considerare
 * 
 * dsaf
 * dafs
 * asdf
 * 
 * dsafsadfadsf
 */

/**
 * Data types
 */

// Primitives (primitive): number, string, boolean, undefined, null, symbol, bigInt
// Refrences (referinte): objects: array, functions

/**
 * Variables declaration types
 */

// var - nu se mai foloseste
// let - variabila dinamica, i se poate schimba valoare
// const - variabila statica, nu i se poate schimba valoarea

/**
 * Number
 */

const oneNumber = 11;
const anotherNumber = 5;
let total;

console.log(oneNumber);
console.log(anotherNumber);
console.log(total);

total = oneNumber + anotherNumber;
total = oneNumber - anotherNumber;
total = oneNumber * anotherNumber;
total = oneNumber / anotherNumber;
total = oneNumber ** anotherNumber; // ridicare la putere
total = oneNumber % anotherNumber; // modulo operator => restul impartirii

console.log(total);

/**
 * String
 * (siruri de caractere)
 */

const fullName = 'Sergiu\' Savin';
const adress = "Brasov\", Romania";
const zip = '500500';

// fullName = 'Bradd Pitt';
const age = 30;

const personalInfo = `Salut
${fullName}, cu varsta de ${age} de ani.
Cum ti s-a parut cursul pana acum?`;
const anotherInfo = 'Salut, \n' + fullName + ' cu varsta de ' + age +
    ' Bine ai venit la curs';

console.log(personalInfo);
console.log(anotherInfo);

/**
 * Boolean
 */

let lightsOn = false;
lightsOn = true;

/**
 * Undefined vs null
 */

let dogName;
dogName = null;

console.log(dogName);

/**
 * Array
 * (liste)
 */

const random = [1, 'doi', null, true, 'false', [3, 'patru']];

console.log(random);
console.log(random.length);
console.log(random[0]);
console.log(random[4]);
console.log(random[5]);
console.log(random[5][1]);
console.log(random[random.length - 1][1]);

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 4];
console.log(daysOfWeek);
const index = daysOfWeek.length;
console.log(daysOfWeek[index - 1]);

daysOfWeek[3] = 'Thursday';

// daysOfWeek = ['Friday']; // assignment to constant variable error, am schimbat referinta

console.log(daysOfWeek);

/**
 * Objects
 */

const person = {
    fullName: 'Sergiu Savin',
    age: 30,
    lovesWinter: false,
    address: {
        city: 'Brasov',
        zip: '500500'
    },
    residencePermit: true,
    'residence-permit': false,
    hobbies: ['sky', 'travel']
};

console.log(person);
console.log(person.fullName);
console.log(person.address.zip);  // cand folosim punct se numeste metodata dotnotation
console.log(person.address['zip']); // cand folosim [] se numeste bracket notation
console.log(person["residence-permit"]);

person.fullName = 'Brad Pitt';
console.log(person.fullName)

// person = {
//     fullName: "Tom Cruise" // !!! Error, assignment to constant variable
// }

// let person = {
//     fullName: 'Sergiu' // !!! Error, pt redeclarare
// }

const actor = {
    name: 'Brad Pitt',
    job: 'Act'
};

console.log(actor);

// Assignment to constant variables errors
// person = actor;
// person = 5;
