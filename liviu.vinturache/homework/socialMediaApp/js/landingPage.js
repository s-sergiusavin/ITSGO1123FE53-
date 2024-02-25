/**
 * change some properties for landingPage.html with js
 */

// change color of the "Book now button" using id
// const callToActionButton = document.getElementById("callToActionButton");

// function changeColor(element) {
//   element.style.backgroundColor = "#C2BBF0";
//   element.style.border = '1px soild blue';
// }
// changeColor(callToActionButton);

const callToActionButtonChange = document.getElementById('callToActionButton')

callToActionButton.style.border = '1px solid grey'
callToActionButton.style.backgroundColor = 'orange'
callToActionButton.style.color = '#020122'

function mouseEnter() {
  callToActionButton.style.backgroundColor = 'orange'
}

const mouseLeave = () => {
  callToActionButton.style.backgroundColor = 'lightblue'
  callToActionButton.style.border = '2px solid lightblue'
  callToActionButton.innerText = 'black'
}

// change the placeholder in upperCase using ID
const nameUpperCase = document.getElementById('name')
function changeUpperCase(element) {
  element.style.textTransform = 'uppercase'
}
changeUpperCase(nameUpperCase)

// change 'Enter your name' color
const enterNameColor = document.getElementById('enterNameColor')
function changeNameColor(element) {
  element.style.color = 'orange'
}
changeNameColor(enterNameColor)

// change container background color using class
function commonColors(element) {
  element.style.backgroundColor = '#FFFFB3'
}
const formContainer = Array.from(
  document.getElementsByClassName('formContainer')
)
formContainer.forEach(commonColors)
