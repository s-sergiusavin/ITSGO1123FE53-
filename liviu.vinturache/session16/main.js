// @ts-nocheck
console.log('liviu');

// Aceasta este o linie cu cod comentat - doar pe linie

/** Aceasta este un multi line comment
 *  Multi line comment
 * care nu va fi luat in considerare si putem adauga ce dorim astfel incat sa
 * fie sugestiv
 */


/**
 * Data types - tipuri de date
 */

// Primitives (primitive): number, string, boolean, undefined, null, symbol, bigInt - don't have objects, methods or properties -

// References (referinte): objects: array, functions, date. - mutable , their contents can be changed after are created

// - Objects: collections of keys-values pairs, where keys are strings and values can be of any data type, including other objects.

// - Arrays- are ordered collections of values, indexed by integers. Are used for storing and manipulating lists of data. Arrays are specialized type of object with additional built-in methods.

// - Functions: are first class citizens in JavaScript. They are objects that can be invoked and passed around as arguments to other functions. Functions are used to encapsulating reusable code and implementing logic in java script programs.

// - Date: the Date object represents date and time information. It provides methods for working with dates, time and timezones.

/**
 * Variables declaration types
 */

// var - nu se mai foloseste
// let - variabila dinamica, i se poate schimba valoare
// const - variabila statica, nu i se poate schimba valoarea

/**
 * Number
 */

// let, const = keyword ne permite sa declaram variabila
// operatiunea de dupa egal se numbeste alocare / asignare.

// console.log() - o sa ne scrie in consola de fiecare data cand facem console log la ceva/variabila/operatiune.

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
// '' - in general astea se folosesc
// "" - si acestea se pot folosi

// a escapa / escape reprezinta slash-ul inversat atunci cand avem cel putin 2 valori si doar una e in ghilimele. '...\', '...'

const fullName = 'Liviu\' Vinturache';
const adress = "Timisoara\", Romania";
const zip = '300787';

// fullName = 'Bradd Pitt'; - nu putem schimba valoarea variabile din cauza ca e de tipul const si a fost deja asignat fullName = 'Liviu Vinturache';

// use back-ticks (``) rather than the quotes ("") to define a string: let text = `He's often called "Johnny"`;
// This back-ticks writting is an alternative and efficient solution:

// 1. allow simple string concentration ("variable interpolation"): "string " + variable becomes `string ${variable}`

// 2. there is no need to escape (\) single or double quotes
// "\"Welcome to W3Docs!\""
// becomes `"Welcome to W3Docs"`

// 3. hey allow multi-line code without new line character (\n)
// "Welcome to\nW3Docs!"
// becomes
// `Welcome to W3Docs`

// ${} - is used to insert a variable to a string, sometimes is a faster way than using quotes
// ${expression} and $ is placeholder
// \n - ne duce pe un rand now cand scriem string-uri
const age = 30;
// prima modalitate
const personalInfo = `Salut
${fullName}, cu varsta de ${age} de ani si avand codul postal ${zip}.
Cum ti s-a parut cursul pana acum?`;
// a doua modalitate:
const anotherInfo = 'Salut, \n' + fullName + ' cu varsta de ' + age +
    ' Bine ai venit la curs';

console.log(personalInfo);
console.log(anotherInfo);

/**
 * Boolean - tip de date cu 2 valori adevarat sau fals
 * aproape 100% din cazuri se declara cu let, pastreaza valoarea care ulterior o putem schimba, stocheaza valori de true sau false pentru a ne putea verifica.
 */

let lightsOn = false;
lightsOn = true;

/**
 * Undefined vs null - are o singura valoarea si este asociat automat de javaScript
 * la o declaratie care nu e declarata nici o valoare o sa returneze undefined as default by compiler in console
 * null - este o valoare fara ghilimele, cand mentionam in mod explicit ca e o varibila care nu are asignata o valoare
 */
//

let dogName;
dogName = null;

console.log(dogName);

/**
 * Array (liste) - o enumerare de elemente, nu trebuie sa fie neaparat de acelasi tip, perechi de cheie/identificator si valoare
 * declarare variabila = [ valori pe care le asignam]
 * lenght - lungimea numarului elementelor din lista
 * index - reprezinta pozitia si numaratoarea incepe de la 0
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
// Suprascriem valoarea 4 cu Thursday alocand daysOfWeek[3] adica pentru index[3] dam o noua valoare "Thursday".
daysOfWeek[3] = 'Thursday';
daysOfWeek[4] = "Friday"

// daysOfWeek = ['Friday']; // assignment to constant variable error, am schimbat referinta

console.log(daysOfWeek);

/**
 * Objects
 */

const person = {
    fullName: 'Liviu Vinturache',
    age: 30,
    lovesWinter: false,
    address: {
        city: 'Timisoara',
        zip: '300779'
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
//     fullName: 'Liviu' // !!! Error, pt redeclarare
// }

const actor = {
    name: 'Brad Pitt',
    job: 'Act'
};

console.log(actor);

// Assignment to constant variables errors
// person = actor;
// person = 5;

// Test - learning

const firstMum = 'mama';
const secondDad = 2;
let parents;
parents = firstMum + secondDad;
console.log (firstMum);
console.log (secondDad);
console.log(parents);

// Adunare string-uri cu numere
const firstNumber = 2;
const secondNumber = 3;
const thirdNumber = '4';
let sumNumbers;

console.log(firstNumber);
console.log (secondNumber);
console.log (thirdNumber);
sumNumbers = firstNumber + secondNumber + thirdNumber;

console.log(sumNumbers);
//

const number1 = '2';
const number2 = 3;
const number3 = 4;
let numbers;

console.log(number1);
console.log (number2);
console.log (number3);
numbers = number1 + number2 + number3;

console.log(numbers);

const movieName = 'The Godfather'
const rating = 9.2;
const director = 'F.F. Copola'

const film = {
    movieName: 'The Godfather',
    rating: 9.2,
    director: 'F.F. Copola'
}

console.log(film);
console.log(film.movieName);
console.log(film.rating);
console.log(film.director);

// Alt exemplu

const animal1 = 'gaina';
const animal2 = 'caine';
const animal3 = 'porc';

const animals = ['gaina', 'caine', 'porc']
console.log(animals);
console.log(animals[0]);
console.log(typeof 'animal1');
console.log (7 %'2');
console.log('Liviu');

