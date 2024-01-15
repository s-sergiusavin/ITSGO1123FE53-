// SESSION 17

// let myNumber = 5;
// let secondNumber = 2;
// let result;

// let myString = "Acesta este un mesaj";
// myString = `Rezultatul 2 + 2 = ${2 + 3 + result}`;
// console.log(myString);

// const myArray = [5, '4', true, null, [5.3, 1], { name: 'Sergiu' }];

// console.log(myArray[0]);
// console.log(myArray[5].name);
// console.log(myArray[3]);

// const myBurger = {
//     souce: 'ketchup',
//     juice: 'coca-cola',
//     french: 'french fries',
//     address: {
//         address: 123123,
//         zip: 500500
//     }

// }
// console.log(myBurger.souce);
// console.log(myBurger.juice);
// console.log(myBurger.address.zip);
// console.log(myBurger.address.address);


// let marksOf10lei = 0;
// let total = 10;

// marksOf10lei = marksOf10lei + 1;

// console.log(marksOf10lei);


// While loop

// while (marksOf10lei < total) {
//     marksOf10lei += 1;
// }

// console.log(`Avem ${marksOf10lei} bancnote de 10 lei`);


// let roomTemperature = 19;
// let desiredTemprature = 24;

// while (roomTemperature < desiredTemprature) {
//     roomTemperature += 1;
// }
// console.log(roomTemperature);


// let isAcOn = true;

// while (roomTemperature > desiredTemprature) {
//     roomTemperature--;
// }
// isAcOn = false;
// console.log(roomTemperature);

// let marksOf5Lei = 0;
// let total5Lei = 5;

// // for (initializare ; conditie ; operatiune la finalul operatiei)
// // codul din interiorul parantezelor acolade va fi denumit bloc de executie

// let index = 7;
// console.log(index, 'index');

// for (index = 0; index < total5Lei; index++) {
//     console.log(index);
//     marksOf5Lei += 1;
// }

// console.log(index);




// let countries = ['Romania', 'Bulgaria', 'Ucraina', 'Turcia'];
//  console.log(countries);

// //  for (let index = 0; index < countries.length; index++) {
// //     console.log(countries[index]);
// // }

// for (let index = countries.length - 1; index >= 0; index--) {
//     console.log(countries[index]);
// }



// let val1 = 5;
// let val2 = '5';

// if (val1 === val2) {
//     console.log('Variabile sunt egale');
// } else {
//     console.log('Variabilele nu sunt egale');
// }

// if (val1 !== val2) {
//     console.log('Variabilele nu sunt egale');
// } else {
//     console.log('Variabile sunt egale');
// }


// if (' ') {
//     console.log('Valoarea din conditie este adevarata')
// } else {
//     console.log(`Valoarea din conditie este falsa`)
// }




// let temperature = 30;
// let optimalTemperature = 25;
// let maxTemperature = 20;

// // if (temperature >= optimalTemperature) {
// //     if (temperature < maxTemperature) {
// //         console.log('Afara este superb');
// //     } else {
// //         console.log('Afara este mult prea cald');
// //     }
// // } else {
// //     console.log('Afara este urat');
// // }


// if (temperature >= optimalTemperature && temperature < maxTemperature) {
//     console.log('Afara este superb');
// } else {
//     console.log('Afara este urat');
// }


// let pizzaPrice = 57;
// let hasGorgonozola = true;

// if (pizzaPrice <= 56 || (hasGorgonozola && pizzaPrice <= 40)) {
//     console.log('Pizza isi merita banii');
// } else {
//     console.log('Pizza nu isi merita banii'); 
// }


// val1 = 5;
// val2 = '5';

// val1 === val2 ? console.log('Egale') : console.log('Inegale');


// Function declaration: function keyword urmat de numele functiei, paranteze rotunde, paranteze acolade
// function logSomething() {
//     console.log('Functia logSomething() a fost invocata/apelata (called)');
// }

// logSomething();


// const doSomething = function() {
//     console.log('Do something');
// }

// doSomething();

// Arrow function

// const doArrowFunction = () => {
//     console.log('Do arrow function');
// }

// doArrowFunction();

// let number = 800; // variabila number nu se va confunda cu parametrul functiei de mai jos

// function addToFive(number) {
//     let result = 5 + number;
//     console.log(`Rezultatul este ${result}`)
// }
// addToFive(3);

// function addToThree(number1) {
//     let result = 3 + number1;
//     console.log(`Rez este ${3 + number1}`);
// }
// addToThree(4);

// const substractFrom100 = (number) => {
//     console.log(`Rezultatul este ${100 - number}`);
// }

// substractFrom100(20);



// SESSION 18



// let testLet = 3;
// const testConst = 5;
// var testVar = 7;

// if (true) {
//     let testLet = 'if-let';
//     const testConst = 'if-const';
//     var testVar = 'if-var';
//     console.log(testLet)
//     console.log(testConst)
//     console.log(testVar)

// }
// if (true) {
//     console.log('-----------------');
//     let testLet = 'if2-let';
//     const testConst = 'if2-const';
//     var testVar = 'if2-var';
//     console.log(testLet)
//     console.log(testConst)
//     console.log(testVar)
//     console.log('-----------------');
// }

// if (true) {
//     console.log('if3---------------')
//     testLet = 'if3-let';
//     // testConst = 'if3-const';
//     testVar = 'if3-var';
//     console.log(testLet);
//     console.log(testConst);
//     console.log(testVar);
//     console.log('if3---------------')
// }
 
// final
