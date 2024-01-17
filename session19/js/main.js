function logStuff(stuff) {
    console.log(`Rezultatul este: ${stuff}`)
}

logStuff(10);

let sum = 0;

function addToSum(number) {
    return sum += number;
    return sum = sum + number;
}

addToSum(3);
logStuff(addToSum(10));

let totalSum = addToSum(10);
addToSum(5);
logStuff(totalSum);
logStuff(sum);

// const sumNumbers =function(number1, number2) {
//      return number1 + number2;
// }

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

const verifyEqualitySimplified = (num1, num2) => {
    return num1 === num2;
}

logStuff(verifyEquality(2,2));
logStuff(verifyEqualitySimplified(2,2))

const doubleValue = (value) => {
    return value * 2;
    logStuff('Edi');
    return 'Edi';
}

logStuff(doubleValue(3));

const addEvenValue = (val1, val2) => {
    if (val1 % 2 === 0 && val2 % 2 === 0){
        return val1 +val2;
    }

    return 'Numerele nu sunt pare';
}

logStuff(addEvenValue(4, 6))
logStuff(addEvenValue(4, 3))

const greet = (name = 'Jhon Smith') => {
    console.log(`salut ${name}!`);
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
        return 'Nu'
    }
}

logStuff(verifyNumber(90))
logStuff(verifyNumber(10.0001))
logStuff(verifyNumber(10))

const puppy = {
    name: 'Rex',
    age: 1,
    favoriteToys: ['duck', 'cat', 'Bone'],
    bark: function(){
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
const rex = nameDog('Rex');
console.log(rex);

const nameDogCopy = nameDog;
console.log(nameDogCopy)
console.log(nameDogCopy('Azorel'))

function addOne(value) {
    return value + 1;
}

function showValue(value, functionCallback) {
    return functionCallback(value);
}

const totalValueCallback = showValue(5, addOne);

console.log(totalValueCallback);
