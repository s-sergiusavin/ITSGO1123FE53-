/**
 * Scope
 */

// let testLet = 'let-global';
// const testConst = 'const-global';
// var testVar = 'var-global';

// // let & const cannot be redeclared in the same scope
// // let testLet = 3;
// // const testConst = 5;
// // var testVar = 7;

// if (true) {
//     // let testLet = 'if-let';
//     // const testConst = 'if-const';
//     // var testVar = 'if-var';
//     // console.log(testLet)
//     // console.log(testConst)
//     // console.log(testVar)
//     if (true) {
//         console.log('-----------------');
//         let testLet = 'if2-let';
//         const testConst = 'if2-const';
//         var testVar = 'if2-var';
//         console.log(testLet)
//         console.log(testConst)
//         console.log(testVar)
//         console.log('-----------------');
//     }
//     if (true) {
//         console.log('if3---------------')
//         testLet = 'if3-let';
//         // testConst = 'if3-const';
//         testVar = 'if3-var';
//         console.log(testLet);
//         console.log(testConst);
//         console.log(testVar);
//         console.log('if3---------------')
//     }
// }

// console.log(testLet)
// console.log(testConst)
// console.log(testVar)

let outsideVar = '--------';

if (true) {
    let outsideVar = 'Inside';
    console.log(outsideVar);
}
console.log(outsideVar);

let globalVariable = 'unchanged';

function addTwo(number) {
    globalVariable = 'changed!!!';
    const total = number + 2;
}

console.log(globalVariable);
// addTwo(5);
// console.log(globalVariable);

let needMoney = true;
if (needMoney === true) {
    addTwo(3);
}
console.log(globalVariable);

showTimisoara() // poate fi apelata inainte de declaratie (HOISTING)

function showTimisoara() {
    console.log('Timisoara');
}

showTimisoara()
// showCluj() // eroare Nu poate fi apelata inainte de declaratie

const showCluj = () => {
    console.log('Cluj');
}

showCluj()

// console.log(variable); // erroare // eroare Nu poate fi apelata inainte de declaratie
const variable = 'myVariable';
console.log(variable);

// showBrasov()
const showBrasov = function () {
    // nu poate fi apelata inainta de declaratie
    console.log('Brasov');
}

showBrasov()

// const addFive = (number) => {
//     return number + 5;
// }

// Daca am un singur parametru, parantezele rotunde sunt optionale
// Daca avem o singura expresie, parantezele acolade pot sa dispara, iar returnul este implicit

const addfive = number => number + 5;

// Valoarea returnata a unei functii

const changeEur = (value) => {
    const total = value * 5;
    console.log('Acest text va fi vizibil');
    return total;
    return 'totalul poate fi orice';
    console.log('Orice cod aflat dupa return in interiorul unui bloc de executie, nu va fi executat');
}

const fiveEur = changeEur(5);
console.log(fiveEur);
console.log(changeEur(10))

/**
 * Function with default params
 * Parametrii default functioneaza la fel pt toate tipurile de functii
 */

//  egalul nu inseamna ca ia valoare intotdeauna ci numai atunci cand nu este trimisa nici-o valoare
const makeBurger = (ingredient = 'porc') => {
    if (ingredient === undefined) {
        ingredient = 'pui';
    }
    console.log('Burgerul meu preferat este cu ' + ingredient);
}

makeBurger('vita');
makeBurger();

let number5 = 5;
let string5 = '5';

if (number5 === string5) {
    console.log('Egale')
} else {
    console.log('Inegale')
}

//  Ternary operator ===> conditie ? expresie pt adevar : expresie pt false
number5 === string5 ? console.log('Egale') : console.log('Inegale')
console.log(number5 === string5 ? 'Egale' : 'Inegale');

// const rateMovie = (movie) => {
//     if (movie === 'Fast & Furious') {
//         console.log('Filmul e de nota 10');
//     } else if(movie === 'The shinning') {
//         console.log('Filmul e de nota 9');
//     } else if(movie === 'Undisputed') {
//         console.log('Filmul e de nota 8');
//     } else if(movie === 'Fury') {
//         console.log('Filmul e de nota 7');
//     } else {
//         console.log('Te rugam sa introduci numele filmului');
//     }
// }

const rateMovie = (movie) => {
    switch (movie) {
        case 'Fast & Furious':
            console.log('Filmul e de nota 10');
            break;
        case 'The shinning':
            console.log('Filmul e de nota 9');
            break;
        case 'Undisputed':
            console.log('Filmul e de nota 8');
            break;
        case 'Fury':
            console.log('Filmul e de nota 7');
            break;
        default:
            console.log('Te rugam sa introduci numele filmului');

    }
}

rateMovie('Fast & Furious') // log Filmul e de nota 10
rateMovie('The shinning') // log 9
rateMovie('Undisputed') // log 8
rateMovie('Fury') // log 7
rateMovie() // log Te rugam sa introduci numele filmului

// Objects with function as a property (methods)

const complexObject = {
    name: 'Sergiu',
    address: {
        city: 'Brasov',
        zip: 500550
    },
    favouriteMovies: ['Top Gun', 'Home Alone', 'Harry Potter'],
    hasPassport: true,
    hobbies: ['travel', 'eat', 'drink'],
    watchMovie: function (movie) {
        console.log('Uita-te la ' + movie);
    },
    sleep: () => {
        console.log('Du-te la culcare')
    },
    work() {
        console.log('Mergi la munca')
    },
    age: 25
}

console.log(complexObject.name)
console.log(complexObject.favouriteMovies[2]);
console.log(complexObject.address.zip)
complexObject.sleep();
complexObject.watchMovie(complexObject.favouriteMovies[1])
complexObject.work()
console.log(console);

// Flip a coin

let valoriMoneda = ['cap', 'stema'];

console.log(valoriMoneda[0]);
console.log(valoriMoneda[1]);
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.round(Math.random()))

if (valoriMoneda[Math.round(Math.random())] === 'cap') {
    console.log('A iesit cap');
} else {
    console.log('A iesit stema');
}

// Palindrom game

const palindrome = [1, 9, 7, 8, 7, 9, 1];

const checkPalindrome = (array) => {
    for (let i = 0; i < array.length / 2; i++) {
        if (array[i] !== array[array.length - 1 - i]) {
            return 'Arrayul nu este palindrom';
        }
    }
    return 'Arrayul este palindrom';
}

console.log(checkPalindrome(palindrome));