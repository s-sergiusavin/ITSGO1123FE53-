/**
 * Scope
 * 
 * 
 */

let testLet = 'let';
const testConst = 'const';
var testVar = 'var';

// let & const cannot be declared in the same scope

 if(true) {
    let testLet = 'if-let';
    const testConst = 'if-const';
    var testCar = 'if-var';
    console.log(testLet)
 console.log(testConst)
 console.log(testVar)
 if(true){
    console.log('--------------')
    console.log('--------------')
 }
 }

 console.log(testLet)
 console.log(testConst)
 console.log(testVar)

 let globalVariable = 'unchanged';
 function addTwo(number) {
    const total = number + 2
 }

 console.log(globalVariable);

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

 const showCluj = () => {
    console.log('Cluj');
 }

 showCluj()

 
 const variable = 'myVariable';
 console.log(variable);

 const showBrasov = function() {
    console.log('Brasov');
 }
 showBrasov()

const addFive = (number) => {
    return number + 5
}

const addfive = (number) => number + 5;

const changeEur = (value) => {
    const total = value * 5;

console.log('acest text va fi vizibil');
return total;
console.log('orice cod aflat dupa return in interiorul unui bloc de executie nu va fi executat')
}

const fiveEur = changeEur(5);
console.log(fiveEur)
console.log(changeEur(10))


let number5 = 5;
let string5 ='5';

const rateMovie = (movie) => {
   if(movie === 'Fast & Furious') {
      console.log('Filmul e de nota 10');
   } else if(movie === 'The Shinning') 
console.log('Filmul e de nota 10')
}

rateMovie('Fast & Furious') // log 10
rateMovie('The shinning') // log 9
rateMovie('Undisputed') // log 8
rateMovie('Fury') // log 7
rateMovie('Fury') // Te rugam sa introduci numele filmului

