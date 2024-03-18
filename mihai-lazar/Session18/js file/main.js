/**
 * Scope
 */

let testLet = 'let-global';
const testConst = 'const-global';
var trestVar = 'var-global';

// let % cont can not be redeclared in the same scope
// let testLet=3;
// const testConst = 5;
// var trestVar=7;

if (true) {
    let testLet = 'if-let';
    const testConst = 'if-const';
    var trestVar = 'if-var';
    console.log(testLet);
    console.log(testConst);
    console.log(trestVar);
    if (true) {
        console.log('..............')

        let testLet = 'if2-let';
        const testConst = 'if2-const';
        var trestVar = 'if2-var';
        console.log(testLet);
        console.log(testConst);
        console.log(trestVar);

        console.log('..............')
    }

    if (true) {

        testLet = 'if3-let';
        // testConst = 'if3-const'; const e neschimbabil
        trestVar = 'if3-var';
        console.log(testLet);
        console.log(testConst);
        console.log(trestVar);
    }
}

console.log(testLet);
console.log(testConst);
console.log(trestVar);

let outsidelLet = '---------';

if (true) {
    outsidelLet = 'inside';
    console.log(outsidelLet);
}
console.log(outsidelLet);

let globalVariable = 'unchanged';

function addTwo(number) {
    globalVariable = 'changed';
    const total = number + 2;
}

console.log(globalVariable);
// addTwo(5);
// console.log(globalVariable);

let needMoney = false;
if (needMoney === true) {
    addTwo(3);
}

console.log(globalVariable);

showTimisoara()

function showTimisoara() {
    console.log('Timisoara');
}
showTimisoara()

// showCluj() se poate folosi doar dupa declararea funtii tip arrow

const showCluj = () => {
    console.log('Cluj');
}
showCluj()

// const addFive = (number) => {
//     return number + 5;
// }

// Daca am un singur parametru, parantezele rotunde sunt optionale
// Daca avem o siingura expresie, parantezele acolade pot sa dispara iar returnul este implicit

const addFive = number => number + 5;

// Valuarea returnata a unei funtii

const changeEur = (value) => {
    const total = value * 5;
    console.log('Acest text va fi vizibil');
    return total;
    console.log('orice cod aflat dupa return in interiorul unui bloc de executie nu va fi executat');
}

const fiveEur = changeEur(5);
console.log(fiveEur);
console.log(changeEur(10));

/**
 * functions with default params
 * parametrii default funtioneaza la fel pt toate tiipurile de functii
 */

// egal inseamna ca ia valoare dor in cazul in care nu primeste alta valoare
const makeBurger = (ingredient = 'porc') => {
    // if(ingredient===undefined){
    //     ingredient='vita';
    // }
    console.log('Burgerul meu preferat este cu ' + ingredient);
}

makeBurger('pui');
makeBurger();

let number5 = 5;
let string5 = '5';

if (number5 === string5) {
    console.log('egale');
} else {
    console.log('inegale');
}

// Ternary operator ===> conditie ? pt adevar : expresie pt false
number5 === string5 ? console.log('egale') : console.log('inegale');
console.log(number5 === string5 ? 'egale' : 'inegale');

// const rateMovie = (movie) => {
//     if (movie === 'Evangelion') {
//         console.log('Filmul e de nota 10');
//     } else if (movie === 'The Shining') {
//         console.log('Filmul e de nota 9');
//     } else if (movie === 'Fury') {
//         console, log('filmul e de nota 8');
//     } else if (movie === 'jjk 0') {
//         console.log('Filmul e de nota 7');
//     } else {
//         console.log('log te rugam sa introduci numele filmului');
//     }
//     console.log()
// }

// rateMovie('Evangelion') //log 10
// rateMovie('The shining') //log 9
// rateMovie('Fury') //log 8
// rateMovie('jjk 0') //log 7
// rateMovie() //log te rugam sa introduci numele filmului

const rateMovie = (movie) => {
    switch (movie) {
        case 'Evangelion':
            console.log('Filmul e de nota 10');
            break
        case 'The Shining':
            console.log('Filmul e de nota 9');
            break
        case 'Fury':
            console, log('filmul e de nota 8');
            break
        case 'jjk 0':
            console.log('Filmul e de nota 7');
            break
        default:
            console.log('log te rugam sa introduci numele filmului');
    }
}

rateMovie('Evangelion') //log 10
rateMovie('The shining') //log 9
rateMovie('Fury') //log 8
rateMovie('jjk 0') //log 7
rateMovie() //log te rugam sa introduci numele filmului

// Objects with functions as a property

const complecObject = {
    name: 'Mihai',
    adress: {
        city: 'Cluj',
        zip: 40000
    },
    favMovies: ['Evangelion', 'Interstellar'],
    hasPassport: true,
    hobbies: ['Music', 'Games'],
    watchMovie: function (movie) {
        console.log('UIta-te la ' + movie);
    },
    sleep: () => {
        console.log('Culca-te');
    },
    work() {
        console.log('Mergi la munca');
    },
    age: 22
}

console.log(complecObject.name);
console.log(complecObject.favMovies[0]);
console.log(complecObject.adress.zip);
complecObject.sleep();
complecObject.watchMovie(complecObject.favMovies[1]);

// Flip a coin

let valoriMoneda = ['cap', 'stema'];

console.log(valoriMoneda[0]);
console.log(valoriMoneda[1]);
console.log(Math.random());
console.log(Math.round(Math.random()));

if (valoriMoneda[Math.round(Math.random())] === 'cap') {
    console.log('cap');
} else {
    console.log('stema');
}

// Palindrom game

const palindrom = [1, 9, 7, 8, 7, 9, 1];

const checkPalindrom = (array) => {
    for (let i = 0; i < array.lenght / 2; i++) {
        if (array[i] !== array[array.lenght - 1 - i]) {
            return 'Nu este Palindrom';
        }
    }
    return 'Este Palindrom';
}
console.log(checkPalindrom(palindrom));