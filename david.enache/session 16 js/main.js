console.log("David");

// Data Types

//primitive: number,string,boolean,undifined,symbol,null   //stocheaza valoare cum ar stoca un cufar banii
//referinte: object:array,functions  //referinta nu se schimba

//variabile

//var nu se mai foloseste
//let = variabila dinamica i se poate schimba valoarea
//const = nu isi poate schimba valoarea

/**
 * number
 */
let oneNumber = 11;
let anotherNumber = 5;
let total;
console.log(oneNumber);
console.log(anotherNumber);
console.log(total);

total = oneNumber + anotherNumber;
total = oneNumber - anotherNumber;

console.log(total);

//string (siruri de caractere)

const fullName = "Enache' David";
const adress = "Iasi' Romania";
const zip = "505050";
const age = 20;

const personalInfo = `Salut ${fullName}, cu varsta de ${age} ani `;
console.log(personalInfo);

/**\
 *boolean //adevarat sau fals
 */
let lightsOn = false;
lightsOn = true;

//undifined vs null

let dogName;
dogName = null;

console.log(dogName);

//Array (liste)

const random = [1, null, true, "false", [3, "patru"]];
console.log(random[4][1]);

const daysOfWeek = ["monday", "tuesday", "wednesday"];
console.log(daysOfWeek);
console.log(daysOfWeek.length);

daysOfWeek[3] = "thursday";
console.log(daysOfWeek);

//objects

const person = {
  fullName: "Enache David",
  age: 20,
  lovesWinter: false,
  adress: {
    city: "Iasi",
    zip: "404040",
  },
  residencePermit: true,
  hobbies: ["ski", "travel"],
};

console.log(person);
console.log(person.fullName);

console.log(person.adress.zip); //ambele sunt bune
console.log(person.adress["zip"]);

person.fullName = "brad pit"; //pot schimba numele sau orice altceva din obiect dar nu pot schimba obiectul in sine
console.log(person.fullName);

const actor = {
  name: "brad pitt",
  job: "act",
};
console.log(actor);
