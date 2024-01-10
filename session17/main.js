/**
 * Numbers
 */

let myNumber = 5;
let secondNumber = 2;
let result ;

result = myNumber + secondNumber ;
result = myNumber - secondNumber ;
result = myNumber * secondNumber ;
result = myNumber / secondNumber ;
result = myNumber % secondNumber ;

/**
 * string
 * siruri de caractere
 */

let myString =" Acestea este un mesaj";
myString = "o'heary"
//Template literals
myString = `Rezultatul este ${result}`;

console.log(myString);

/**
 * Boolean
 */
let lightson = false;

/**
 * Array
 * (liste)
 */

const myArray = [5, '4', true, null, [5.3, 1], {name:'Edi'}];
console.log(myArray[0]);
console.log(myArray[4][0]);
console.log(myArray[5].name);

/**
 * objects
 */

const myObj = {
    burger: 'Big Tasty',
    juice: 'Cola zero',
    'french-fries': 'Big',
    adress: {
        street:'street',
        number: 1
    },
    sauce:['Ketchup'],
};
console.log(myObj.burger);
console.log(myObj["french-fries"]);

/**
 * Loops(bucle)
 */

let markOf10lei =0;
//markOf10lei =markOf10lei+1;
//markOf10lei += 1;
//markOf10lei++;
//console.log(markOf10lei);

let total =10;

markOf10lei =  markOf10lei + 1;
markOf10lei =  markOf10lei + 1;
//....
markOf10lei =  markOf10lei + 1;

while(markOf10lei < 10) {
    markOf10lei += 1;
};
console.log(`Avem ${markOf10lei} bancnote de 10 lei`);

let roomTempratur = 19;
let desiredTemprature =24;

while(roomTempratur < desiredTemprature) {
    roomTempratur += 1;
};

let isAcOn = true;

while(roomTempratur > desiredTemprature) {
    roomTempratur--; 
};

isAcOn= false;

// do{
//   //action
// } while()

// For loop

let marksOf5lei =0;
let total5lei =5;

//for(initializare ; conditie ; operatiune la finalul operatiei)

for(index =0; index < total5lei; index++) {
    console.log(index);
    marksOf5lei += 1;
};
console.log(index);


let countries = ['Romania', 'Bulgaria', 'Ucraina', 'Turcia'];
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
console.log(countries[3]);

for(let index =0; index < countries.length; index++ ) { 
    console.log(countries[index]);
}

for (let index = countries.length -1; index >= 0; index-- ) {
    console.log(countries[index]);
}


// if/else

let val1 = 5;
let val2 ='5';

if(val1 == val2) {
    console.log('Variabilele sunt egale');
}else {
    console.log('Variabilele nu sunt egale ');
}

if(val1 !== val2) {
    console.log('Variabilele sunt egale');
}else {
    console.log('Variabilele nu sunt egale ');
}

if(5) {
    console.log('Valoarea din conditie este adevarata')
} else {
    console.log('Valoarea din conditie este falsa')
}


let temperature = -3;
let optimalTemperature =25;
let maxTemperature = 35;

if(temperature >= optimalTemperature) {
    if(temperature <maxTemperature) {
        console.log('Afara este superb');
    } else {
        console.log('Afara este prea cald');
    }
} else{
    console.log('Afara este urat')
}

if(temperature >=optimalTemperature && temperature < maxTemperature)   {
    console.log('Afara este superb')
} else {
    console.log('Afara este urat')
}

let pizzaPrice =55;
let hasGorgonzola = true;

if( pizzaPrice <= 35 || (hasGorgonzola && pizzaPrice <=40))   {
    console.log('Pizza isi merita banii')
} else {
    console.log('pizza nu isi merita banii')
}


function logSomething() {
    console.log('Functia logSomething() a fost invocata/apelata (called)');
}
logSomething();  
logSomething();


const doSomething = function() {
    console.log('Do something')
}

doSomething();


const doArrowFunction = () => {
    console.log('Do Arrow Function');
}

doArrowFunction();

function addToFive(number) {
    let result = 5 + number;
    console.log(`Rezultatul este ${result}`)
}

addToFive(3);
addToFive(10);