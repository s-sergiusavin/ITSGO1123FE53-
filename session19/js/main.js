function logStuff(stuff) {
    console.log(`Rezultatul este: ${stuff}`)
}

logStuff(10);

let sum = 0;

function addToSum(number) {
    return sum += number;
    return sum = sum + number;

logStuff(addToSum(10));

// sum = 13
let totalSum = addToSum(10);
addToSum(5);
logStuff(totalSum);
logStuff(sum);

// const sumNumbers =function(number1, number2) {
//      return number1 + number2;

const sumNumbersArrow =(number1,  number2) =>{
        return number1 + number2;
}

let sumNumbersValue = sumNumbersArrow(5, 10);
console.log(sumNumbersValue);

let sumNumbersStoredGlobally;

const sumTowNumbersAlternative = (num1, num2) => {
    sumNumbersStoredGlobally = num1 + num2;
}

sumTowNumbersAlternative(3, 4);
logStuff(sumNumbersStoredGlobally);

const verifyEquality =(num1, num2) => {
    if (num1 === num2) {
        return true;
     } else {
        return false;
     }
}

console.log(verifyEquality(3,3));
console.log(verifyEquality(3,4));
// const sumNumbers = function(number1, number2) {
//     return number1 + number2;

const sumNumbersArrow = (number1, number2) => {
    return number1 + number2;
}

let sumTwoNumbersValue = sumNumbersArrow(5, 10);
console.log(sumTwoNumbersValue);

let sumNumbersStoredGlobally;
const sumTwoNumbersAlternative = (num1, num2) => {
    sumNumbersStoredGlobally = num1 + num2;
}

sumTwoNumbersAlternative(3, 4);
logStuff(sumNumbersStoredGlobally);

const verifyEquality = (num1, num2) => {
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}

console.log(verifyEquality(3, 3));
console.log(verifyEquality(3, 4));

const verifyEqualitySimplified = (num1, num2) => {
}

logStuff(verifyEquality(2,2));
logStuff(verifyEqualitySimplified(2,2))

const doubleValue = (value) => {
    return value * 2;
    logStuff('Edi');
    return 'Edi';
logStuff(verifyEquality(2, 2));
logStuff(verifyEqualitySimplified(2, 2))

const doubleValue = (value) => {
    // logStuff('Sergiu');
    return value * 2;
    logStuff('Sergiu'); // tot ce este dupa return, nu va fi executat
    return 'Sergiu'; // nu se executa
}

logStuff(doubleValue(3));

const addEvenValue = (val1, val2) => {
    if (val1 % 2 === 0 && val2 % 2 === 0){
        return val1 +val2;
    if (val1 % 2 === 0 && val2 % 2 === 0) {
        return val1 + val2;
    }

    return 'Numerele nu sunt pare';
}

logStuff(addEvenValue(4, 6))
logStuff(addEvenValue(4, 3))

const greet = (name = 'Jhon Smith') => {
    console.log(`salut ${name}!`);
const greet = (name = 'John Smith') => {
    console.log(`Salut ${name}!`);
}

greet();
greet('Mihai');
greet(' ');
greet('!"!@#$%^&*(');
greet(57);
greet(null);


const reoveFromBiggest =( num1, num2) => {
    if (num1 < num2) {
        return num2 - num1
    } else {
        return  num1 - num2;
    }
}

logStuff(reoveFromBiggest(5, 7))
logStuff(reoveFromBiggest(15, 7))

function verifyNumber (number){
    if(number > 10 && number < 50) {
        return 'Da'
    }else {
greet('!"£$%^&');
greet(57);
greet(null);

// debugger;
// F8 revine la nromal, iese din procesul de debug
// F10 sare un pas
// F11 intram intr-o functie

const removeFromBiggest = (num1, num2) => {
    if (num1 < num2) {
        return num2 - num1
    } else {
        return num1 - num2;
    }
}

logStuff(removeFromBiggest(5, 7)) // 2
logStuff(removeFromBiggest(15, 7)) // 8
logStuff(removeFromBiggest(-5, -3)) // 2

function verifyNumber (number) {
    if(number > 10 && number < 50) {
        return 'Da'
    } else {
        return 'Nu'
    }
}

<<<<<<< HEAD
logStuff(verifyNumber(90))
logStuff(verifyNumber(10.0001))
logStuff(verifyNumber(10))
=======
logStuff(verifyNumber(90)) // Nu
logStuff(verifyNumber(10.0001)) // Da
logStuff(verifyNumber(10)) // Nu
>>>>>>> main

const puppy = {
    name: 'Rex',
    age: 1,
<<<<<<< HEAD
    favoriteToys: ['duck', 'cat', 'Bone'],
    bark: function(){
=======
    favouriteToys: ['Duck', 'Cat', 'Bone'],
    bark: function() {
>>>>>>> main
        console.log('Ham')
    },
    barkLoud() {
        console.log('HAM!!!')
    }
}

const anotherPuppy = puppy;
anotherPuppy.name = 'Rexx';
console.log(puppy)
console.log(anotherPuppy)
puppy.bark();
anotherPuppy.bark();
anotherPuppy.barkLoud();

function nameDog(name) {
    return `Dog ${name}`;
}
<<<<<<< HEAD
=======

>>>>>>> main
const rex = nameDog('Rex');
console.log(rex);

const nameDogCopy = nameDog;
console.log(nameDogCopy)
console.log(nameDogCopy('Azorel'))

function addOne(value) {
    return value + 1;
}

<<<<<<< HEAD
function showValue(value, functionCallback) {
    return functionCallback(value);
=======
function showValue(value, functieCallback) {
    return functieCallback(value);
    // similar return addOne(value), addOne(5) ==> 6
>>>>>>> main
}

const totalValueCallback = showValue(5, addOne);

console.log(totalValueCallback);
<<<<<<< HEAD
=======

const menu = {
    burger: 'Big Mac',
    juice: 'Cola',
    size: 'Big',
    price: 35,
    'french-fries': 'No salt'
}

console.log(menu.burger)
console.log(menu['french-fries']);

const num3 = 3;
const letA = 'a';
let stringConcat = 'x';
stringConcat = stringConcat + num3;
stringConcat += letA;
console.log(stringConcat);

const firstWord = 'Primul';
const link = 'si';
const secondWord = 'al doilea';
const concatedString = firstWord + ' ' + link + ' ' + secondWord;
console.log(concatedString.toUpperCase())

const createString = (array) => {
    let string = '';
    for(let i = 0; i < array.length; i++) {
        string = string + array[i] + ' ';
    }

    return string;
}

console.log(createString([3, '5', 7, 2, 1]))
console.log(createString([2, '3425', 17, 22, 1]))

const reverseArray = (array) => {
    const newArray = [];
    for(let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i])
    }

    return newArray;
}

console.log(reverseArray([1, 2, 3, 4]))

/**
 * Smart Home App
 */

let lightsValue = false;
let acValue = false;
let curtainsValue = false;
let windowsValue = false;

const toggleLights = () => {
    // if(lightsValue === true) {
    //     lightsValue = false;
    // } else {
    //     lightsValue = true;
    // }
    lightsValue = !lightsValue;

    if(lightsValue) {
        return 'Luminile au fost aprinse'
    } else {
        return 'Luminile au fost stinse';
    }
}

const toggleAc = () => {
    acValue = !acValue;
    if(acValue) {
        return 'Ac-ul a fost pornit'
    } else {
        return 'Ac-ul a fost oprit';
    }
}

const toggleCurtains = () => {
    curtainsValue = !curtainsValue;
    if(curtainsValue) {
        return 'Draperiile au fost deschise'
    } else {
        return 'Draperiile au fost inchise';
    }
}

const toggleWindows = () => {
    windowsValue = !windowsValue;
    if(windowsValue) {
        return 'Geamurile au fost deschise'
    } else {
        return 'Geamurile au fost inchise';
    }
}

const smoke = () => {
    if(!windowsValue) {
        toggleWindows();
    }

    if(!curtainsValue) {
        toggleCurtains()
    }

    if(!acValue) {
        toggleAc();
    }

    console.log('Smoking...')

    if('Winter') {
        toggleWindows()
    }
}

// const smoking = () => {
//     if (!windowsValue) {
//       windowsValue = !windowsValue;
//       if (windowsValue) {
//         return "Geamurile au fost deschise!";
//       } else {
//         return "Geamurile au fost inchise!";
//       }
//     }
  
//     if (!curtainsValue) {
//       curtainsValue = !curtainsValue;
//       if (curtainsValue) {
//         return "Draperiile au fost deschise!";
//       } else {
//         return "Draperiile au fost inchise!";
//       }
//     }
  
//     if (acValue) {
//       acValue = !acValue;
//       if (acValue) {
//         return "Ac-ul a fost pornit!";
//       } else {
//         return "Ac-ul a fost oprit!";
//       }
//     }
  
//     console.log("Smoking...");
  
//     if ("Winter") {
//       if (!windowsValue) {
//         windowsValue = !windowsValue;
//         if (windowsValue) {
//           return "Geamurile au fost deschise!";
//         } else {
//           return "Geamurile au fost inchise!";
//         }
//       }
//     }
//   };

console.log(toggleLights());
smoke();

>>>>>>> main
