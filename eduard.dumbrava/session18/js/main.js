/** 
 * Scope
 */

// let test = 'let';
// const testConst = 'const';
// var testVar = 'var';


// // let testLet =3;
// // const testConst=5;


// if(true) {
//     let testLet = 'if-let';
//     const testConst = 'if-const';
//     var testVar = 'if-var';

//     console.log(testLet)
//     console.log (testConst)
//     console.log(testVar)
//     if(true){
//         console.log('------------');

//         console.log('------------');
//     }
// }


// console.log(testConst)
// console.log(testVar)
// console.log(testLet);


let outsideVar = '-----------';
if(true) {
     let outsideVar='Inside';
      console.log(outsideVar);
}

console.log(outsideVar);

let globalVariable = 'unchange';

function addTow(number) {
    globalVariable = 'change!!!';
    const total = number + 2;
}



console.log(globalVariable);
// addTow(5);
// console.log(globalVariable);

let needMoney = true;
if ( needMoney === true) {
    addTow(3);
}
console.log(globalVariable);

showTimisoara()

function showTimisoara() {
    console.log('showTimisoara');
}

showTimisoara()


const showCluj = () => {
    console.log('Cluj');
}

showCluj()


const showBrasov = function() {
    console.log('Brasov');
}

showBrasov()


// const addFive =(number) => {
//     return number + 5;
// }

const addFive = number => number + 5 ;


const changeEur =  (value) => {
    return value * 5;
}


const fiveEur = changeEur(5);
console.log(fiveEur);
console.log(changeEur(10));

const makeBurger = (ingredient = 'porc') => {
    if(ingredient === undefined) {
        ingredient = 'pui';
    }
    console.log('Burgerul meu preferat este cu ' + ingredient);
}

makeBurger('vita');
makeBurger();

let number5 = 5;
let string5 = '5';

number5 === string5 ? console.log('Egale') : console.log('Inegale')
console.log(number5 === string5 ? 'Egale' : 'Inegale');


// const rateMovie = (movie) => {
//     if(movie === 'Fast & Furios') {
//         console.log('Filmul e de nota 10');
//     }else if(movie === 'The shinnig') {
//         console.log('Filmul e de nota 9');
//     }else if(movie === 'Undisputed') {
//         console.log('Filmul e de nota 8');
//     }else if(movie === 'Fury') {
//         console.log('Filmul e de nota 7');
//     }else {
//         console.log('Te rugam sa introduci numele filmului');
//     }  
// }


const rateMovie = (movie) => {
    switch(movie){
        case 'Fast & Furios':
        console.log('Filmul e de nota 10');
        break;
        case 'The shinnig':
            console.log('Filmul e de nota 9');
            break;
        case 'Undisputed':
            console.log('Filmul e de nota 8');
            break;
            case'Fury':
            console.log('Filmul e de nota 7');
            break;
            default:
            console.log('Te rugam sa introduci numele filmului');              
    }
}


rateMovie('Fast & Furios') 
rateMovie('The shinnig')
rateMovie('Undisputed')
rateMovie('Fury')
rateMovie()

const complexObject = {
    name:'Edi',
    address: {
        city: 'Constanta',
        zip: 123999
    },
    favoriteMovie: [ 'Tokyo Drift' , 'Demon Slayer', 'One Piece'],
    hasPassport: true,
    hobbies: ['travel','play','drink'],
    watchMovie: function(movie) {
        console.log('uita-te la ' + movie);
    },
    sleep: () => {
        console.log('du-te la culcare')
    },
    work() {

    console.log('Mergi la munca')
   },
   age: 19
}

console.log(complexObject.name)
console.log(complexObject.favoriteMovie[2]);
console.log(complexObject.address.zip)
complexObject.sleep();
complexObject.watchMovie(complexObject.favoriteMovie[1])
console.log(console);


//Flip a coin

let valoriMoneda = ['cap', 'stema'];
console.log(valoriMoneda[0]);
console.log(valoriMoneda[1]);
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.round(Math.random()));

if(valoriMoneda[Math.round(Math.random())] === 'cap' ) {
    console.log('A iesit cap');
}else {
    console.log('A iesit stema');
}

// Palindrom game

const palindrome = [1, 9, 7, 8, 7, 9, 1];

const checkPalindrome = (array) => {
    for(let i = 0; i < array.length / 2; i++ ) {
        if (array[i] !==array[array.length - 1 -i]) {
            return 'Arrayul nu este palindrom';
        }
    }
    return 'Arrayul este palindrom';
}


console.log(checkPalindrome(palindrome));

//final