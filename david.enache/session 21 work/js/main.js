/**
 * test object demo
 */

const example = {
  title: "Exemple Object",
  sayHi() {
    console.log("Hi!");
  },
};

/**
 * method to get html element by any selector
 */
//returneaza primul element pe care il gaseste

const redSquare = document.querySelector(".redSquare");
console.dir(redSquare);

redSquare.style.backgroundColor = "green";

//css background-color se transforme in backgroundColor
// css padding-left se trans in paddingLeft etc etc

const blueSquares = document.querySelectorAll(".blueSquare"); //cauta dupa clasa
// const blueSquares = document.querySelectorAll('#blueSquare') //cauta dupa id
// const blueSquares = document.querySelectorAll('div') //cauta dupa numele tagului
console.dir(blueSquares);
blueSquares[0].style.backgroundColor = "yellow";
blueSquares[1].style.backgroundColor = "yellow";
blueSquares[2].style.backgroundColor = "yellow";

blueSquares.forEach((element) => {
  element.style.backgroundColor = "orange";
});

/**
 *
 *method to get element by id
 */

const changedListElem = document.getElementById("changedList");
console.dir(changedListElem);

changedListElem.style.border = "1px solid black";
changedListElem.style.backgroundColor = "lightblue";

/**
 * method to ged elem by tag name
 */ //getElementsByTagName

const paragraphsElem = document.getElementsByTagName("p");
console.dir(paragraphsElem);
paragraphsElem[0] = "This text will be modifed later with JS";
paragraphsElem[1].style.textTransform = "uppercase";

/**
 * method to get html events by class name
 */ //getElementsByClassName

const styledMessages = document.getElementsByClassName("styledMessages");
console.dir(styledMessages);
// styledMessages.forEach((element) => {
// dosomethins
// });

for (let i = 0; i < styledMessages.length; i++) {
  const tagName = styledMessages[i].tagName;
  styledMessages[
    i
  ].innerText = `This message was a ${tagName} and was styled by js`;
}
console.log(styledMessages);

const greenSquare = document.querySelector(".greenSquare");

function changeGreenSquare() {
  greenSquare.style.backgroundColor = "lightgreen";
}

function mouseEnter() {
  greenSquare.style.backgroundColor = "purple";
  greenSquare.style.border = "";
  greenSquare.innerText = "";
}

const mouseLeave = () => {
  greenSquare.style.backgroundColor = "white";
  greenSquare.style.border = "3px solid black";
  greenSquare.innerText = "black";
};

const focusInput = () => {
  greenSquare.style.backgroundColor = "red";
  document.getElementsByTagName("label")[0].innerText =
    "change after focus event";
};

const blurInput = () => {
  greenSquare.style.backgroundColor = "black";
};

const onKeyDown = () => {
  greenSquare.style.backgroundColor = "teal";
};
const onKeyUp = () => {
  greenSquare.style.backgroundColor = "pink";
};
