function logStuff(stuff) {
  console.log(`rezultatul este: ${stuff}`);
}
logStuff(10);

let sum = 0;

function addTwoSum(number) {
  return (sum += number);
}
addTwoSum(3);
logStuff(addTwoSum(10));
//
let totalSum = addTwoSum(10);
addTwoSum(5);
logStuff(totalSum);
logStuff(sum);

// const sumNumbers = function (number1, number2) {
//   return number1 + number2;
// };

const sumNumbersArrow = (number1, number2) => {
  return number1 + number2;
};

let sumTwoNumbersValue = sumNumbersArrow(5, 10);
console.log(sumTwoNumbersValue);

let sumNumbersStoredGlobally;

const sumTwoNumbersAlternative = (num1, num2) => {
  sumNumbersStoredGlobally = num1 + num2;
};
sumTwoNumbersAlternative(3, 4);
logStuff(sumNumbersStoredGlobally);

const verifyEquality = (num1, num2) => {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
};
console.log(verifyEquality(3, 3));
console.log(verifyEquality(3, 4));

const varifyEqualitySimplify = (num1, num2) => {
  return num1 === num2;
};
console.log(verifyEquality(2, 2));
console.log(varifyEqualitySimplify(2, 2));

const doubleValue = (value) => {
  return value * 2;
  logStuff("David"); // ce se scrie dupa return nu se baga in seama (nu functioneaza)
};
logStuff(doubleValue(3));

const addEventValue = (val1, val2) => {
  if (val1 % 2 === 0 && val2 % 2 === 0) return val1 + val2;
  return "numerele nu sunt pare";
};
logStuff(addEventValue(4, 6));

const sayName = (name = "John Smith") => {
  console.log(`salut ${name}!`);
};
sayName();
sayName("mihai");
//
const removeFromBiggest = (num1, num2) => {
  if (num1 < num2) {
    return num2 - num1;
  } else {
    return num1 - num2;
  }
};
logStuff(removeFromBiggest(5, 7));

//debuger tasta f8 revine la normal iese din proces
// tasta f10 sara un pas
//f11 intram intr o functie

const puppy = {
  name: "rex",
  age: 1,
  favoriteToys: ["duck", "bone", "cat"],
  bark: function () {
    console.log("ham");
  },
  barkLoud() {
    console.log("HAMMM!!");
  },
};

const anotherPuppy = puppy;
anotherPuppy.name = "rexx";
console.log(puppy);
console.log(anotherPuppy);
puppy.bark();
anotherPuppy.bark();

function nameDog(name) {
  return `Dog ${name}`;
}

const rex = nameDog("Rex");
console.log(rex);

const nameDogCopy = nameDog;
console.log(nameDogCopy);
console.log(nameDogCopy("azorel"));

function addOne(value) {
  return value + 1;
}

function showValue(value, functieCallBack) {
  return functieCallBack(value);
  //similiar return addOne(value)
}

const totalValueCallBack = showValue(5, addOne);
console.log(totalValueCallBack);

const menu = {
  burger: "big mac",
  juice: "cola",
  size: "big",
  price: "35",
  "french-fries": "no salt",
};
console.log(menu.burger);
console.log(menu["french-fries"]);

const num3 = 3;
const letA = "a";
let stringConcat = "x";
stringConcat = stringConcat + num3;
stringConcat += letA;
console.log(stringConcat);

const firstWord = "Primul";
const link = "si";
const secondWord = "al doilea";
const concatedString = firstWord + " " + link + " " + secondWord;

console.log(concatedString);

const createString = (array) => {
  let string = "";
  for (let i = 0; i < array.length; i++) {
    string = string + array[i] + "";
  }
  return string;
};
console.log(createString([3, "5", 7, 2, 1]));
