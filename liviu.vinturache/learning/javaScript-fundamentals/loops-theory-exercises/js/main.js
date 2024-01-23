// alert() function displays a message box with a specified message and an OK button. It halts the further execution of the code until the user presses the OK button.
/**
 * Conditional structures block
 */

// if...else
// if (condition) {
//   statement1;
// } else {
//   statement2;
// }

let first = 4;
let second = 3;
if(first === second) {
  console.log('Equals')
} else {
  console.log('Not equals')
}

if(first >= second) {
  console.log('Egale')
} else if (first !== second) {
  console.log('Inegale')
} else {
  console.log('Insert a number')
}

// switch ... case ... break
// switch(expression) {
//   case label1;
//   statement1
//   break;
//   case label2;
//   statement2;
//   break;
//   ...
//   default;
//   statementDef
//   break
// }
let getCurrentLang = 'fr';
switch(getCurrentLang) {
  case 'en':
    console.log('English');
    break;
  case 'ro':
    console.log('Romanian');
    break;
  default:
    console.log('French');
}
// switch can be written out with condition:  if ... else
const check = 4;
if(check === 1 || check === 3) {
  console.log('Impar');
} else if (check === 2){
  console.log('Doi');
}else if(check === 4) {
  console.log('Patru');
} else {
  console.log('else');
}
// written with switch
switch(check) {
  case 1:
  case 3:
    console.log('Impare')
    break;
  case 2:
    console.log(2);
    break;
  case 4:
    console.log(4);
    break;
  default:
    console.log('else')
}

/**
 * Loops (bucle)
 * Structuri iterative
 */

let onePhone = 0;
// Expresiile de mai jos fac acelasi lucru
// marksOf10lei = marksOf10lei + 1;
// marksOf10lei += 1;
// marksOf10lei++;
// marksOf10lei += 3;
// console.log(marksOf10lei);

let total = '1000 Lei';

onePhone = onePhone + 1;
onePhone = onePhone + 1;
// ....
onePhone = onePhone + 1; // de 10 ori ca sa ajung la totalul asta, nu este o solutie eficienta, pentru asta folosim loops

// While loop
while (onePhone < 'total') {
    onePhone += 1;
}

console.log(`Avem ${onePhone} telefoane de 1000 lei`);

// another example
let roomTemperature = 15;
let desiredTemprature = 23;

while (roomTemperature < desiredTemprature) {
    roomTemperature += 1;
}
let isAcOn = true;
while (roomTemperature > desiredTemprature) {
    roomTemperature--;
}
isAcOn = false;

console.log(`Temperatura in camera este ${roomTemperature}`)

// another example
let eatingLunch = 12;
let preferredLunchTime = 13;

while (eatingLunch < preferredLunchTime) {
  eatingLunch +=1;
}
let preferredHour=true;

while (eatingLunch > preferredLunchTime) {
  eatingLunch--;

}
preferredHour=false;
console.log(`Mananc pranzul la ora: ${eatingLunch}`)


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

let pigs = 0;
let totalPigs = 5;
for(i=0; i < totalPigs; i++) {
  console.log(i);
  pigs +=1;
}
console.log(i);

let namePig = 'Angel';
let desiredNamePig = 'Ricky';
for(i<0; i < desiredNamePig; i++) {
  console.log(i);
  namePig = 'Numele Porcului este';
}
console.log(`Avem Numele ${namePig} and ${desiredNamePig}`)


// var nedeclarat;
// nedeclarat = 5;
// console.log(nedeclarat);

let countries = ['Romania', 'Spain', 'Greece', 'Ireland'];
console.log(countries);
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
console.log(countries[3]);
// using for to see one by one countries name in console from left to right, or index 0...3
for( let i = 0; i < countries.length; i++)
  console.log(countries[i]);
// using for to see one by one countries name in console from right to left
for (let i = countries.lenght - 1; i >= 0; i--)
  console.log(countries[i]);




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