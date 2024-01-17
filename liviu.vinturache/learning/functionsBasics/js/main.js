/**
 ############Functions theory & practice#################
 ####Function Declaration#####
 1. function as a keyword most used
 functionKeyword  = functionName(params - we can have 0 or more params) {
  - execution block - 0 or more expressions
  - can contain return, but after return we must not having expressions
  - if we have a value after return, function will return that value and stops the execution
  - if we don't have a value after return or we don't have return, function will show in console undefined
 }

 2. Function expresion : const function name= function keyword (params) { execution block }

 3. arrow Function: const function name = (params) => { execution block }

 ####Function call####
 functionName(arguments)

 */

// Keyword function example
function functionName(param) {
  let result = param + 1;
  console.log(`The result is = ${result}`);
}
functionName(2);

function myCity(param) {
  let city = "Hometown is " + param;
  console.log(`My ${city}`);
}
myCity("Bucharest");

function footballPlayer(val1, val2) {
  let bestPlayers = val1 + val2;
  console.log(`Best football players are: ${bestPlayers}`);
}

footballPlayer("Messi & ", "Ronaldo ");

function checkNumbers(val1, val2) {
  if (val1 === val2) {
    console.log("Egale");
  } else {
    console.log("Inegale");
  }
}
checkNumbers(2,2);

// 2. Function expressions
const functionExpression = function() {
  console.log('Do something');
}
functionExpression();

const addNumbers = function(val1) {
  let total = val1 + 10;
  console.log(`Totalul este ${total}`)
}

addNumbers(2)

const multiplyNumbers = function (val1, val2, val3) {
  let total = val1 * val2 * val3;
  console.log(`Totalul inmultirii este...${total}`)
}
multiplyNumbers(2,4,6)

const compareNumbers = function(param1, param2) {
  if(param1 === param2){
    console.log('Egale')
  }else {
    console.log('Inegale')
  }
}
compareNumbers(2,2)

// arrow function
const arrowFunction = () => {
  console.log('Do arrow function');
}

arrowFunction();

const nameCity = (val1) => {
  let favCity = val1;
  console.log(`Favorite city is.. ${favCity}`)
}

nameCity('Timisoara')

// Functions with params

let number = 100;

const addNumber = function(number) {
  let result = 10 + number;
  console.log (`Totalul sumei este ${result}`)

}
addNumber(300)

function addToNumber(number) {
  console.log(`Show number ${number}`)
}
addToNumber(100);

const substractFrom100 = (number) => {
  console.log(`Rezultatul este ${100 - number}`);
}

substractFrom100(20);
