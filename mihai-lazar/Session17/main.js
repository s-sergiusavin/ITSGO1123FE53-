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
 * string
 * siruri de caractere
 */

let myString = "Ac este un mesaj";
//Template literals
// myString = `Rezultatul este`, $[result];

console.log(myString);

/**
 * Booleans
 */

let lightsOn = false;

/**
 * Array
 * (liste)
 * (vectori)
 */

const myArray = [5, '4', true, null, [5.3, 1], { name: 'Mihai' }];
console.log(myArray[0]);
console.log(myArray[4][0]);
console.log([5].name);

/**
 * Objects
 */

const myObj = {
    burger: 'Big Mac',
    drink: 'Cola Zero',
    'french-fries': 'Big',
    adress: {
        street: 'Stret',
        number: 1
    },
};

console.log(myObj.juice);
console.log(myObj['french-fries']);

/**
 * Loops
 * Structuri iterative
 */

let maxOf10lei = 0;

// maxOf10lei= maxOf10lei+1;
// maxOf10lei +=1;
// maxOf10lei++;
// maxOf10lei+=3;

let total = 10;
debugger;
maxOf10lei++
maxOf10lei++
//...
maxOf10lei++ //de 10 ori ca sa ajung la totalul asta


//While loop

while (maxOf10lei < total) {
    maxOf10lei++;
}

// console.log(`avem `, $,{ maxOf10lei } `bancnote de 10 lei`);

let roomTemperature = 19;
let desiredTemperature = 22;

while (roomTemperature < desiredTemperature) {
    roomTemperature++;
}

let isAcOn = true;

while (roomTemperature > desiredTemperature) {
    roomTemperature--;
}
isAcOn = false;

// do{
//     //action
// }while()


// for loop

let marksOf5lei = 0;
let total5lei = 5;

//for (initializare; conditie; operatiune la finalul operatiei)

let index = 7;
console.log(index, 'index');

for (index = 0; index < total5lei; index++) {
    console.log(index);
    marksOf5lei++;
}

console.log(index);

let countries = ['romania', 'bulgaria', 'serbia', 'turcia'];
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
console.log(countries[3]);

for (let index = 0; index < countries, length; index++) {
    console.log(countries[index]);
}

for (let index = countries.length - 1; index >= 0; index--) {
    console.log(countries[index]);
}

// if/else conditional structures

// == verifica egalitatea a 2 valori
// === verifica egalitatea si tipul de variabila

let val1 = 5;
let val2 = '5';

if (val1 === val2) {
    console.log('variabilele sunt egale');
} else {
    console.log('variabilele nu sunt egale');
}

if (val1 !== val2) {
    console.log('variabilele nu sunt egale');
} else {
    console.log('variabilele sunt egale');
}


let temperature = -3;
let optimalTemperature = 23;
let maxTemp = 28;

if (temperature >= optimalTemperature) {
    if (temperature < maxTemp) {
        console.log('afara e frumos');
    } else {
        console.log('afara este mult prea cal');
    }

} else {
    console.log('afara e urat');
}

// logical operators
// && = and - daca cel putin o conditie este falsa, totul este fals
// || = or - daca vel putin o caonditie este adevarata, totul este adevarat

if (temperature >= optimalTemperature && temperature < maxTemp) {
    console.log('afara e frumos');
} else {
    console.log('afara e urat');
}

let pizzaPrice = 30;
let hasCheese = true;

if (pizzaPrice <= 35 || (hasCheese && pizzaPrice <= 40)) {
    console.log('pizza isi merita banii');
} else {
    console.log('pizza nu isi merita banii');
}

// ternary operator
// conditie ? valoare de adevar : valoare in caz de flas

val1 = 5;
val2 = '5';

val1 === val2 ? console.log('egale') : console.log("inegale");

// expresie identica cu cea de sus

if (val1 == val2) {
    console.log('egale');
} else {
    console.log("inegale");
}

/**
 * Functions
 */

// Function declaration: funtion keyword urmat de numele functiei, paranteze rotunde, paranteze patrate
function logSomething() {
    console.log('funtia logSomething a fost apelata');
}

logSomething();

// funtion expression: const denumirea funtiei = funtion keyword () {}

const doSomething = function () {
    console.log('doSomething');
}

doSomething();

//arrow funtion

const doArrowFuntion = () => {
    console.log('do arrow funtion');
}

doArrowFuntion();

//funtions with params

let number = 800; // variabila number nu se va confunda cu parametrul funtiei de mai jos

function addToFive(number) {
    let result = 5 + number;
    console.log('rezultatul este ', result)
}

addToFive(3);
addToFive(10);

const subtractFrom100 = (number) => {
    console.log('rezultatul este ', 100 - number);
}

subtractFrom100(20);
subtractFrom100('marcel') // NaN - not a number, error atunci cand se incearca op matematice cu altceva in afara de numere
