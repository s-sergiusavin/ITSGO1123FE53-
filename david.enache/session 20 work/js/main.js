/**a
 * array methods
 */

const array = [1, 2, 3, "4", 5, 6, 7];

console.log(array.length);
// array[1] = 100;
// console.log(array);

/**
 * Add or Remove elements in array
 */

array.push(5); //adaugam element la finalul array ului
console.log(array);

array.pop(); //scoatem ultomul element
console.log(array);

console.log(array.unshift("zero")); //returneaza lenght ul
console.log(array);
console.log(array.shift()); //returneaza elementul scos
console.log(array);

// lifo    last in first out
// fifo   first in first out

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// array.forEach(function (){})
// array.forEach(() => {})

// array.forEach(iterateInArray)
// function iterateInArray(element){
//     console.log(element)
// }

array.forEach(function (element) {
  console.log("E " + element);
});

// .map()  method => iterates trought an array and RETURN this array

const newArray = array.map((element) => {
  return element + 1;
});
console.log(newArray);

/**
 * Returns the index of an array
 * .indexOff()
 */

console.log(array.indexOf(3)); //indexu elementul 3 este 2
array[2] = 7;

console.log(array);
array[array.indexOf("4")] = 777;
console.log(array);
console.log(array.indexOf(-15)); //daca elementul nu exista va returna in consola automax -1

//copy array elements

let myNum = 7;
let anotherNum = myNum;
myNum = 5;
console.log(myNum);
console.log(anotherNum);

let arrayCopy = array;
array[0] = "zero";
console.log(array);
console.log(arrayCopy);

/**
 * slice() method(copy portion on array) and splice method (cut portions of array)
 */

// arrayCopy = array.slice(2); //copiaza toate elementele de la o pozitie specificata
// console.log(arrayCopy);
// arrayCopy = array.slice(0, 5); //copiaza de la indexul specificat prin primul paramentru pana la cel de al doile (nu e in inclus al doile)
// console.log(arrayCopy);

console.log("-------------");
let changedArray = array.splice(2, 3); // decupeaza toate elementele unui array incepand cu pozitia specifacata si al doilea parametru reprezinta cate elemente sa scoate
console.log(changedArray);

//* .filter()
//filtering array elements  // returneaza un nou array cu elementele initiale care indeplinesc conditia
//nu modifica array ul initial

const lessThanThree = array.filter((element) => {
  return element < 3;
});
console.log(lessThanThree);

//.reverse()  //inverseaza array ul initial  modifica array ul initial

array.reverse();
console.log(array);

//.concat()
// imbinarea array urilor

const concatArray = ["add", "me"];
// const newConcatedArray = array.concat(concatArray);
// console.log(newConcatedArray);
console.log(array.concat(concatArray));

//.join()
//transform array into string
//nu ne modifica array ul initial ci ne returneaza

const stringFromArray = array.join();
console.log(stringFromArray);

//.reduce()
// reduce array  ia un array si il transforma intr o valoare
//returneaza un alt array
console.log("----------");

const reduceArray = [1, 2, 3, 4];
const reduceValue = reduceArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(reduceArray);
console.log(reduceValue);

//.sort()   //sorting an array
//modifica array ul initial

let arrayToSort = [1, 7, 200, 34, -65, 11.4, 124, 123];

// console.log(arrayToSort.sort());

arrayToSort.sort((a, b) => {
  //a - b sortare crescatoare            b - a sortare desc.
  return b - a;
});
console.log(arrayToSort);

//.find()
//returneaza primul element care indeplineste conditia

let arrayToFind = [1, 2, 3, 4, 2, 5, 6, 7, 8];
const value2 = arrayToFind.find((element) => {
  return element === 2;
});

console.log(value2);

arrayToFind = [
  { name: "david", city: "iasi" },
  { name: "cipri", city: "vaslui" },
  { name: "alina", city: "bucuresti" },
  { name: "mirel", city: "bacau" },
  { name: "abdul", city: "dubai" },
  { name: "david", city: "hong kong" },
];
const foundElem = arrayToFind.find((element) => {
  return element.name === "david";
});
console.log(foundElem);

//pentru arrow function daca avem un singur parametru parantezele rodunde pot sa lipseasca
//daca se scrie pe o singur linie si este un parametru acoladele pot sa lipseacsa
//iar return ul se face implicit

/**
 * .includes()
 * verificam daca un element exista intr un array
 */

let includedElem = arrayToSort.includes(20023); //verificam daca exista elem intr un array si arata true sau false
console.log(includedElem);

//objects

const createPerson = (name, age, gender) => {
  return {
    firstName: name,
    age: age,
    gender, //gender:gender
  };
};
const david = createPerson("david", 20, "male");
const dragod = createPerson("dragod", 21, "female");

console.log(david);

/**
 * create objects using OBJECT LITERLA method
 */

const person = {
  name: "david",
  lastName: "enache",
  age: 55,
  address: {
    city: "vaslui",
    zip: 500500,
  },
  sayHi: function () {
    console.log(`${this.lastName} say hi`);
  },
  sayHiArrow: () => {
    console.log(`${this.lastName} say hi`);
  },
};
person.sayHi();
person.sayHiArrow();
person.lastName = "popescu";
person.sayHi();

/**
 * create objects using 'new keyword'
 */

const anotherPerson = new Object(person);
anotherPerson.name = "sergiu s";
console.log(person);
console.log(anotherPerson);

const bicycle = {
  gear: 21,
  setGear: function (gear) {
    this.gear = gear;
  },
};

bicycle.gear = 14;
console.log(bicycle);
bicycle.setGear(25);
console.log(bicycle);

/**
 * classes
 */

class car {
  constructor(model, maxSpeed) {
    this.model = model;
    this.maxSpeed = maxSpeed;
  }
}

const vw = new car("vw", 150);
const porshe = new car("porshe", 450);

vw.maxSpeed = 100;

console.log(vw);
console.log(porshe);
