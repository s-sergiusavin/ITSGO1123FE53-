const demoBoxElement = document.getElementById("testBox");

console.log(demoBoxElement);

demoBoxElement.className = "red";
demoBoxElement.className = "";

demoBoxElement.classList.add("blue");
demoBoxElement.classList.remove("blue");
demoBoxElement.classList.toggle("blue");

/**
 * get or set attributs
 
*/
const demoImageElement = document.getElementById("demoImage");
const newImageElement = document.getElementById("newImage");

const imgSrc = demoImageElement.getAttribute("src");
console.log(imgSrc);
newImageElement.setAttribute("src", imgSrc);

// const ulElem = document.getElementsByTagName("ul")[0];
// ulElem.addEventListener("click", () => {
//   ulElem.classList.toggle("blue");
// });

const listItemsElements = document.querySelectorAll("li");
listItemsElements.forEach((listItem) => {
  //   listItem.addEventListener("mouseover", function () {
  //     this.classList.add("red");
  //     // console.dir(this);
  //   });

  //   listItem.addEventListener("mouseout", function () {
  //     this.classList.remove("red");
  //   });
  listItem.addEventListener("click", toggleListItems);
});

function toggleListItems() {
  const toggleValue = this.classList.toggle("red");
  console.log(toggleValue);
  if (toggleValue) {
    const span = document.createElement("span");
    span.innerText = "x";
    this.appendChild(span);
  } else {
    this.getElementsByTagName("span")[0].remove();
    console.dir(this);
    console.dir(document);
  }
}

const clickMeElement = document.getElementById("clickMe");
clickMeElement.style.cursor = "pointer";

const demoInputElement = document.getElementById("demoInput");

demoInputElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && demoInputElement.value.length > 3) {
    demoInputElement.style.background = "lightgreen";
  }
});

const ulElem = document.getElementsByTagName("ul")[0];

clickMeElement.addEventListener("click", function () {
  const newLiElement = document.createElement("li");
  ulElem.appendChild(newLiElement);
  if (demoInputElement.value) {
    newLiElement.innerText = demoInputElement.value;
    demoInputElement.value = "";
  }
});
