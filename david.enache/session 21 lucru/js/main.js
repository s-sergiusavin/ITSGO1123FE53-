// element selectors = Methods used to target and manipulate HTML elements
// They allow you to select one or multiple Html elements
//from the dom (Doctuments Object Model)

// 1.document.getElementById()    // Element or Null
// 2.document.getElementByClass() //HTML COLLECTION
// 3.document.getElementByTag() //HTML COLLECTION
// 4.document.querrySelector() // Element or null
// 5.document.querrySelectorAll() // Nodelist  


// 1.document.getElementById()    // Element or Null
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading)


// 2.document.getElementByClass() //HTML COLLECTION
const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "yellow" // Face primul fruct galben

for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow"
}        // face toate fructele galbene


fruits.array.forEach(element => {
    
});     //HTML COLLECTION NU FOLOSESC FOREACH;


Array.from(fruits).forEach(fruits => {
    fruits.style.backgroundColor = "yellow"
})      //face toate fructele galbene



// 3.document.getElementByTag() //HTML COLLECTION
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = "yellow" // root vegetables il coloreaza cu galben

for(let h4Element of h4Elements){
h4Element.style.backgroundColor = "yellow"
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen"
}

Array.from(h4Elements).forEach(h4Element =>{
    h4Element.style.backgroundColor = "yellow"
})



// 4.document.querrySelector() // Element or null

const element = document.querySelector(".fruits");

element.style.backgroundColor = "yellow"


// 5.document.querrySelectorAll() // Nodelist  

const fruits = document.querySelectorAll(".fruits")

fruits[0].style.backgroundColor = "yellow";
 fruits.forEach(fruits => {
    fruits.style.backgroundColor = "yellow"
 })