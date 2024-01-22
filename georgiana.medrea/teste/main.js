// Teste

const foo = 0;
switch (foo) {
    case -1:
        console.log("negative 1");
        break;
    case 0: // Value of foo matches this criteria; execution starts from here
        console.log(0);
    // Forgotten break! Execution falls through
    case 1: // no break statement in 'case 0:' so this case will run as well
        console.log(1);
        break; // Break encountered; will not continue into 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log("default");
}

switch (undefined) {
    case console.log(1):
    case console.log(2):
}

//   const action = "say_hello";
// switch (action) {
//   case "say_hello":
//     const message = "hello";
//     console.log(message);
//     break;
//   case "say_hi":
//     const message = "hi";
//     console.log(message);
//     break;
//   default:
//     console.log("Empty action received.");
// }

const action = "say_hello";
switch (action) {
    case "say_hello": {
        const message = "hello";
        console.log(message);
        break;
    }
    case "say_hi": {
        const message = "hi";
        console.log(message);
        break;
    }
    default: {
        console.log("Empty action received.");
    }
}

// switch (expr) {
//     case "Oranges":
//       console.log("Oranges are $0.59 a pound.");
//       break;
//     case "Apples":
//       console.log("Apples are $0.32 a pound.");
//       break;
//     case "Bananas":
//       console.log("Bananas are $0.48 a pound.");
//       break;
//     case "Cherries":
//       console.log("Cherries are $3.00 a pound.");
//       break;
//     case "Mangoes":
//     case "Papayas":
//       console.log("Mangoes and papayas are $2.79 a pound.");
//       break;
//     default:
//       console.log(`Sorry, we are out of ${expr}.`);
//   }

//   console.log("Is there anything else you'd like?");

const foo1 = 5;
switch (foo1) {
    case 2:
        console.log(2);
        break; // it encounters this break so will not continue into 'default:'
    default:
        console.log("default");
    // fall-through
    case 1:
        console.log("1");
}

const Animal = "Giraffe";
switch (Animal) {
    case "Cow":
    case "Giraffe":
    case "Dog":
    case "Pig":
        console.log("This animal is not extinct.");
        break;
    case "Dinosaur":
    default:
        console.log("This animal is extinct.");
}

const foo2 = 1;
let output = "Output: ";
switch (foo2) {
    case 0:
        output += "So ";
    case 1:
        output += "What ";
        output += "Is ";
    case 2:
        output += "Your ";
    case 3:
        output += "Name";
    case 4:
        output += "?";
        console.log(output);
        break;
    case 5:
        output += "!";
        console.log(output);
        break;
    default:
        console.log("Please pick a number from 0 to 5!");
}

let n = 0;

while (n < 3) {
  n++;
}

console.log(n);

let n1 = 0;
let x = 0;

while (n1 < 3) {
  n1++;
  x += n1;
}

let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);

const arr = [1, 2, 3, 4, 5, 6];
for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
  console.log(arr[l], arr[r]);
}

function A() {
    console.log("called A");
    return false;
  }
  function B() {
    console.log("called B");
    return true;
  }
  
  console.log(A() && B());
  // Logs "called A" to the console due to the call for function A,
  // && evaluates to false (function A returns false), then false is logged to the console;
  // the AND operator short-circuits here and ignores function B

  function A() {
    console.log("called A");
    return false;
  }
  function B() {
    console.log("called B");
    return true;
  }
  
  console.log(B() || A());
  // Logs "called B" due to the function call,
  // then logs true (which is the resulting value of the operator)

  function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const cube = function (x) {
    return x * x * x;
  };
  
  const numbers = [0, 1, 2, 5, 10];
  console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]

  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

function foo3(i) {
    if (i < 0) {
      return;
    }
    console.log(`begin: ${i}`);
    foo3(i - 1);
    console.log(`end: ${i}`);
  }

  foo3(3);

// Logs:
// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3
  
  function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  
  console.log(addSquares(2, 3)); // 13
  console.log(addSquares(3, 4)); // 25
  console.log(addSquares(4, 5)); // 41

  
