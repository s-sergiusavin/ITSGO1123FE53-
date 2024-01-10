logSomething();

/**
 * Numbers
 */

let myNumber = 5;
let secondNumber = 2;
let result;

result = myNumber + secondNumber;
result = myNumber - secondNumber;
result = myNumber * secondNumber;
result = myNumber / secondNumber;
result = myNumber % secondNumber;

/**
 * String
 * siruri de caractere
 */

let myString = "Acesta este un mesaj";
myString = "O'heary";
// Template literals
// In template literals cu sintaxa ${} executam in interiorul parantezelor cod de javascript
myString = `Rezultatul este ${result}`;
myString = `Rezultatul 2 + 2 = ${2 + 3 + result}`;

console.log(myString);

/**
 * Boolean
 */

let lightsOn = false;

/**
 * Array 
 * (liste)
 * (vectori)
 */

const myArray = [5, '4', true, null, [5.3, 1], { name: 'Sergiu' }];
console.log(myArray[0]);
console.log(myArray[4][0]);
console.log(myArray[5].name);

/**
 * Objects
 */

const myObj = {
    burger: 'Big Tasty',
    juice: ' Cola Zero',
    'french-fries': 'Big Size',
    address: {
        street: 'Street',
        number: 1
    },
    sauce: ['Ketchup', 'Mayo']
};

console.log(myObj.juice);
console.log(myObj["french-fries"]);

/**
 * Loops (bucle)
 * Structuri iterative
 */

let marksOf10lei = 0;
// Expresiile de mai jos fac acelasi lucru
// marksOf10lei = marksOf10lei + 1;
// marksOf10lei += 1;
// marksOf10lei++;
// marksOf10lei += 3;
// console.log(marksOf10lei);

let total = 10;

marksOf10lei = marksOf10lei + 1;
marksOf10lei = marksOf10lei + 1;
// ....
marksOf10lei = marksOf10lei + 1; // de 10 ori ca sa ajung la totalul asta

// While loop

while (marksOf10lei < total) {
    marksOf10lei += 1;
}

console.log(`Avem ${marksOf10lei} bancnote de 10 lei`);

let roomTemperature = 19;
let desiredTemprature = 24;

while (roomTemperature < desiredTemprature) {
    roomTemperature += 1;
}

let isAcOn = true;

while (roomTemperature > desiredTemprature) {
    roomTemperature--;
}
isAcOn = false;

// do {
//     // action
// } while ()

// For loop

let marksOf5Lei = 0;
let total5Lei = 5;

// for (initializare ; conditie ; operatiune la finalul operatiei)
// codul din interiorul parantezelor acolade va fi denumit bloc de executie

let index = 7;
console.log(index, 'index');

for (index = 0; index < total5Lei; index++) {
    console.log(index);
    marksOf5Lei += 1;
}

console.log(index);

// var nedeclarat;
// nedeclarat = 5;
// console.log(nedeclarat);

let countries = ['Romania', 'Bulgaria', 'Ucraina', 'Turcia'];
console.log(countries);
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
console.log(countries[3]);

for (let index = 0; index < countries.length; index++) {
    console.log(countries[index]);
}

for (let index = countries.length - 1; index >= 0; index--) {
    console.log(countries[index]);
}

// If/else -- conditional structures - blocks

// == verifica egalitatea a doua valori
// === verifica egalitatea si tipul variabilelor

let val1 = 5;
let val2 = '5';

if (val1 === val2) {
    console.log('Variabile sunt egale');
} else {
    console.log('Variabilele nu sunt egale');
}

// Truthy vs Falsy values
// Falsy: 0, '', false, undefined, null

if (val1 !== val2) {
    console.log('Variabilele nu sunt egale');
} else {
    console.log('Variabile sunt egale');
}

if (' ') {
    console.log('Valoarea din conditie este adevarata')
} else {
    console.log(`Valoarea din conditie este falsa`)
}


let temperature = 53;
let optimalTemperature = 25;
let maxTemperature = 35;

if (temperature >= optimalTemperature) {
    if (temperature < maxTemperature) {
        console.log('Afara este superb');
    } else {
        console.log('Afara este mult prea cald');
    }
} else {
    console.log('Afara este urat');
}

// Logical operators
// && - and (si) - daca cel putin o conditie este falsa, totul este fals aka trebuie sa fie toate conditiile adevarate pt ca rezulattul sa fie adevarat
// || - or (sau) - daca cel putin o conditie este adevarata, totul este adevarat 

if (temperature >= optimalTemperature && temperature < maxTemperature) {
    console.log('Afara este superb');
} else {
    console.log('Afara este urat');
}

let pizzaPrice = 55;
let hasGorgonozola = true;

if (pizzaPrice <= 35 || (hasGorgonozola && pizzaPrice <= 40)) {
    console.log('Pizza isi merita banii');
} else {
    console.log('Pizza nu isi merita banii'); 
}

// Ternary operator - sunt 3 parti
// conditie ? valoare de adevar : valoare in caz de fals

val1 = 5;
val2 = '5';

val1 === val2 ? console.log('Egale') : console.log('Inegale');

// Expresie identica cu cea din operatorul ternar

if (val1 === val2) {
    console.log('Egale')
} else {
    console.log('Inegale')
}

/**
 * Functions
 */

// Function declaration: function keyword urmat de numele functiei, paranteze rotunde, paranteze acolade
function logSomething() {
    console.log('Functia logSomething() a fost invocata/apelata (called)');
}

logSomething();
logSomething();

// Function expresion : const denumirea functiei = function keyword () {}

const doSomething = function() {
    console.log('Do something');
}

doSomething();

// Arrow function

const doArrowFunction = () => {
    console.log('Do arrow function');
}

doArrowFunction();

// Functions with params

let number = 800; // variabila number nu se va confunda cu parametrul functiei de mai jos

function addToFive(number) {
    let result = 5 + number;
    console.log(`Rezultatul este ${result}`)
}

addToFive(3);
addToFive(10);

const substractFrom100 = (number) => {
    console.log(`Rezultatul este ${100 - number}`);
}

substractFrom100(20);
substractFrom100('Marcel'); // NaN - not a number, modul js-ului de a ne spune ca am facut o operatie 
// matematica intre un numar si ceva care nu este un numar
substractFrom100('5');
console.log(`${100 + '5'}`);
console.log(`${100 + 'marcel'}`);
console.log(`${100 + '' + 3}`);