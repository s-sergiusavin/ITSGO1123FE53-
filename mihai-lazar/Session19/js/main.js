function logStuff(stuff) {
    console.log(`Rezultatul este: ${stuff}`);
}

logStuff(10);

console.log(logStuff(10)); //returneaza undefined

let sum = 0;

function addToSum(number) {
    return sum += number;
    // return sum = sum + number;
}

addToSum(3);
logStuff(addToSum(10));

let totalSum = addToSum(10);
addToSum(5)
logStuff(totalSum);
logStuff(sum);

// const sumNumbers=function(number1, number2){
//     return number1+number2;
// }

const sumNumbersArrow = (number1, number2) => {
    return number1 + number2;
}

let sumTwoNumbersVal = sumNumbersArrow(5, 10);
console.log(sumTwoNumbersVal);

let sumNumbersStoredGlobaly;

const sumTwoNumbersAlt = (number1, number2) => {
    sumNumbersStoredGlobaly = number1 + number2;
}

sumTwoNumbersAlt(3, 4);
logStuff(sumNumbersStoredGlobaly);

const verifyEquality = (number1, number2) => {
    if (number1 === number2) {
        return true;
    } else {
        return false;
    }
}

console.log(verifyEquality(3, 3));
console.log(verifyEquality(3, 4));

const verifyEqualitySimplified = (number1, number2) => {
    return number1 === number2;
}

logStuff(verifyEquality(2, 2));
logStuff(verifyEqualitySimplified(2, 2));

const doubleValue = (value) => {
    return value * 2;
    logStuff('Mihai')//tot ce e dupa return nu va fi executat
}

logStuff(doubleValue(3));

const addEvenValues = (val1, val2) => {
    if (val1 % 2 === 0 && val2 % 2 === 0) {
        return val1 + val2;
    }
    return 'Numerele nu sunt pare';
}

logStuff(addEvenValues(4, 6));
logStuff(addEvenValues(4, 3));

const greet = (name = 'Jhon Smith') => {
    console.log(`Salut ${name}!`);
}

greet();
greet('Mihai');
greet('');
greet('(*%*^%^&');
greet(57);
greet(null);

debugger
//tasta F8 revine la normal iese din debug
//F10 sare un pas
//F11 intra intr-o funtie
const removeFromBiggest = (number1, number2) => {
    if (number1 > number2) {
        return number1 - number2;
    } else {
        return number2 - number1;
    }
}

logStuff(removeFromBiggest(5, 7));
logStuff(removeFromBiggest(15, 7));
logStuff(removeFromBiggest(-5, -3));

function verifyNumber(number) {
    if (number > 10 && number < 50) {
        return 'Da';
    } else {
        return "Nu";
    }
}

logStuff(verifyNumber(90));
logStuff(verifyNumber(10.00001));
logStuff(verifyNumber(10));

const puppy = {
    name: 'Rex',
    age: 1,
    favToys: ['duck', 'cat', 'bone'],
    bark: function () {
        console.log('Ham')
    },
    barkLoud() {
        console.log('HAM')
    }
}

const anotherpuppy = puppy;
anotherpuppy.name = 'Rexx';
console.log(puppy);
console.log(anotherpuppy);
puppy.bark();
anotherpuppy.barkLoud();

function nameDog(name) {
    return `Dog ${name}`;
}

const rex = nameDog('Rex');
console.log(rex);

const nameDogCopy = nameDog;
console.log(nameDogCopy);
console.log(nameDogCopy('Azorel'));

function addOne(value) {
    return value + 1;
}

function showValue(value, funtieCallback) {
    return funtieCallback(value);
    // similar cu return addOne(value), adica addOne de 5 care va returna 6
}

const totalValueCallback = showValue(5, addOne);

console.log(totalValueCallback);

const menu = {
    burger: 'Big Mac',
    soda: 'Pepsi',
    size: 'Big',
    price: 35,
    'French-fries': 'No salt'
}

console.log(menu.burger);
console.log(menu['French-fries']);

const num3 = 3;
const letterA = 'a';
let stringConcat = 'x';
stringConcat = stringConcat + num3;
stringConcat += letterA;
console.log(stringConcat);

const firstWord = 'Primul';
const link = 'si';
const secondWord = 'al doilea';
const concatenatedString = firstWord + ' ' + link + ' ' + secondWord;
console.log(concatenatedString.toUpperCase());

const createString = (array) => {
    let string = ' ';
    for (let i = 0; i <= array.lenght; i++) {
        string = string + array[i] + ' ';
    }
}
console.log(concatenatedString[3, '5', 7, 2, 1]);

const reverseArray = (array) => {
    const newArray = [];
    for (let i = array.lenght - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverseArray([1, 2, 3, 4]))

let lightVal = false;

const toggleLights = () => {
    // if(lightVal===true){
    //     lightVal=false;
    // }else{
    //     lightVal=true;
    // }

    lightVal = !lightVal;
    if (lightVal) {
        return 'Luminile sunt aprinse';
    } else {
        return 'Luminile sunt stinse';
    }
}

console.log(toggleLights());//tema: fa funtie cu funtii multiple (pt casa)