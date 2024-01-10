console.log(5);

// Acesta este o linie cu cod comentat

/**
 * 
 * ACesta este un multi line comment
 */

//primitives (primitive): number,string,boolean,undefined,null,symbol,bigInt
// refrences (referinte): objects: array,functions

/**  Variables declaration types
 * 
 * var = nu se mai foloseste
 * let = variabila dinamica si i se poate schimba valoarea
 * const  = variabila statica nu i se poate schimba valoarea
*/

/**
 * number
 */

let oneNumber = 11;
let anotherNumber = 5;
let total;

console.log(oneNumber);
console.log(anotherNumber);
console.log(total);

total = oneNumber + anotherNumber;
total = oneNumber - anotherNumber;
total = oneNumber * anotherNumber;
total = oneNumber / anotherNumber;
total = oneNumber ** anotherNumber; //11 la puterea a 5
total = oneNumber % anotherNumber; // modulo operator = restul din impartire adica 11 / 2 = 1


console.log(total);


/**String = siruri de caractere */

const fullName = 'Enache David';
const address = "Brasov/', Romania";   //     /' = to escape
const zip = '500500';

// fullName = 'Bradd Pitt';
const age = 32;

const personalInfo = `salut
 ${fullName},  ${age} asd as`;


console.log(personalInfo);


/**
 * boolean adevarat fals
 */

let lightsOn = true;
lightsOn = true;

/**
 * undefined vs null
 * 
 */
let dogName;
dogName = null;

console.log(dogName);


/**
 * 
 * array 
 * (liste)
 */

const random = [1, 'doi', null, true, ['false', 'patru']];

console.log(random);
console.log(random.length);
console.log(random[0]);
console.log(random[4]);


