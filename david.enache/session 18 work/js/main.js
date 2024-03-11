// let testLet = "let-global";
// const testConst = "const-global";
// var testVar = "var-global";

// //let and const nu pot fi redeclarate in acelasi scop
// if (true) {
//   let testLet = "if-let";
//   const testConst = "if-const";
//   var testVar = "if-var";
//   console.log(testLet);
//   console.log(testConst);
//   console.log(testVar);
//   if (true) {
//     console.log("----------------");

//     let testLet = "if2-let";
//     const testConst = "if2-const";
//     var testVar = "if2-var";
//     console.log(testLet);
//     console.log(testConst);
//     console.log(testVar);
//     console.log("----------------");
//   }
//   if (true) {
//     testLet = "if3-let";
//     const testConst = "if3-const";
//     testVar = "if3-var";
//     console.log(testLet);
//     console.log(testConst);
//     console.log(testVar);
//   }
// }
// console.log(testLet);
// console.log(testConst);
// console.log(testVar);

let outsideVar = "--------";

if (true) {
  let outsideVar = "inside";
  console.log(outsideVar);
}

console.log(outsideVar);

let globalVeriable = "unchanged";

function addTwo(number) {
  globalVeriable = "changed!!!";
  const total = number + 2;
}
console.log(globalVeriable);
// addTwo(5);
// console.log(globalVeriable);

let needMoney = true;
if (needMoney === true) {
  addTwo(3);
}
console.log(globalVeriable);

function showVaslui() {
  console.log("Vaslui");
}
showVaslui();

const showIasi = () => {
  console.log("Iasi");
};
showIasi();

// const addFive = (number) => {
//   return number + 5

// }

const addFive = (number) => number + 5;

//valoarea returnata a unei functii

const changeEur = (value) => {
  return value * 5;
};
const fiveEur = changeEur(5);
console.log(fiveEur);
console.log(changeEur(10));

/**function with default params
 *
 *
 */
// = nu inseamna ca ia valoarea mereu ci numai atunci CAND nu este trimisa nici o valoare
const makeBurger = (ingredient = "porc") => {
  // if (ingredient === undefined) {
  //   ingredient = "pui";
  // } ce am scris aici este echivalentu cu ce am scris mai sus cu = 'porc'
  console.log("burger ul meu pref este cu " + ingredient);
};
makeBurger("vita ");
makeBurger();

let number5 = 5;
let string5 = "5";
if (number5 === string5) {
  console.log("egale");
} else {
  console.log("inegale");
}

// ternary operatr ===> conditie ? expresie pentru adevar : expresie pt false

number5 === string5 ? console.log("egale") : console.log("inegale");

console.log(number5 === string5 ? "egale" : "inegale");

// const rateMovie = (movie) => {
//   if (movie === "Fast and Furios") {
//     console.log("Filmul este de nota 10");
//   } else if (movie === "The shinnig") {
//     console.log("filmul este de nota 9");
//   } else if (movie === "Undisputed") {
//     console.log("filmul este de nota 8");
//   } else if (movie === "Fury") {
//     console.log("Filmul este de nota 7");
//   } else {
//     console.log("te rugam sa intruduci filmu");
//   }
// };

const rateMovie = (movie) => {
  switch (movie) {
    case "Fast and Furios":
      console.log("Filmul este de nota 10");
      break;
    case "The shinnig":
      console.log("filmul este de nota 9");
      break;
    case "Undisputed":
      console.log("filmul este de nota 8");
      break;
    case "Fury":
      console.log("Filmul este de nota 7");
    default:
      console.log("te rugam sa intruduci filmu");
  }
};
rateMovie("Fast and Furios"); //log 10
rateMovie("The shinnig"); //log 9
rateMovie("Undisputed"); //log 8
rateMovie("Fury"); //log 7
rateMovie(); //log te rugam sa introduci un film

//object with function as a property

const complexObject = {
  name: "David",
  address: {
    city: "vaslui",
    zip: 505050,
  },
  favoriteMovie: ["top gun", "undisputed", "home alone"],
  hasPasaporte: true,
  hobbies: ["travel", "eat", "drink"],
  watchMovie: function (movie) {
    console.log("uita te la " + movie);
  },
  sleep: () => {
    console.log("du te la culcare");
  },
  work() {
    console.log("mergi la munca");
  },
  age: 25,
};
console.log(complexObject.name);
console.log(complexObject.favoriteMovie[2]);
console.log(complexObject.address.zip);
complexObject.sleep();
complexObject.watchMovie(complexObject.favoriteMovie[1]);

//flip a coin

let valoriMoneda = ["cap", "stema"];

console.log(valoriMoneda[0]);
console.log(valoriMoneda[1]);

console.log(Math.random());
console.log(Math.round(Math.random()));
if (valoriMoneda[Math.round(Math.random())] === "cap") {
  console.log("a iesit cap");
} else {
  console.log("a iesit stema");
}

//palindrom game

const palindrom = [1, 9, 7, 8, 7, 9, 1];

const checkPalindrom = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - 1 - i])
      return "array ul nu este palindrom";
  }
  return "array ul este palindrom";
};

console.log(checkPalindrom(palindrom));
