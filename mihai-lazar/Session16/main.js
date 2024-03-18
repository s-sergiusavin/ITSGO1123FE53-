console.log('Mihai');

// Ac este cod comentat

/**
 * Multi line comment
 * 
 * 
 */

// data types

// primitives : number, string, boolean, undefined, null, symbol, bigInt
// refrences : objects: array, funtions

/**
 * variables declaration types
 */

// let - variabila dinamica, i se poate schimba valoarea
// const - variabila statica, nu i se poate schimba valoarea

/**
 * number
 */

const oneNumber = 11;
const anotherNumber = 5;
let total;

console.log(oneNumber);
console.log(anotherNumber);
console.log(total);

total = oneNumber + anotherNumber;
total = oneNumber - anotherNumber;
total = oneNumber / anotherNumber;
total = oneNumber * anotherNumber;
total = oneNumber ** anotherNumber; //ridicare la putere/ exponent
total = oneNumber % anotherNumber;  //modulo operator => restul impartirii

console.log(total);

/**
 * string
 * (siruri de caratere)
 */

const fullName = 'Mihai\' Lazar';
const adress = 'Cluj-Napoca, Romania';
const zip = '500500';
const age = 90;
const persoanlInfo = `Ho, mukate kuru no ka!`;
const anotherInfo = 'Salut, \n' + fullName + 'cu varsta ' + age + ' i mult de scris aci';

console.log(persoanlInfo);
console.log(anotherInfo);

/**
 * Array
 */

const random = [1, 2, null, true, 'false', [3, 'patru']];

console.log(random);
console.log(random.length);
console.log(random[0]);
console.log(random[4]);
console.log(random[5]);
console.log(random[5][1]);

const daysOfWeek = ['monday', 'tuesday', 'wednessday', 4];
console.log(daysOfWeek);
const index = daysOfWeek.length;
console.log(daysOfWeek[index - 1]);

daysOfWeek[3] = 'thursday';
console.log(daysOfWeek);

/**
 * onjects
 */

const person = {
    fullName: 'Mihai Lazar',
    age: 90,
    lovesWinter: true,
    adress: {
        city: 'Cluj',
        zip: 40000
    },
    residencePermit: true,
    hobbies: ['music', 'games']
};

console.log(person);
console.log(person.fullName);
console.log(person.adress.zip); //cand folosim puncte se numeste dont notation
console.log(person,adress['zip']);

person.fullName = 'jotaro kujo';
console.log(person.fullName);

const actor={
    name: 'ryan gosling',
    job: 'act'
};

// nu se pot schimab pt ca const (exemple)
// person = actor;
// person= 5;