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

  
