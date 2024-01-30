// @ts-nocheck
/**
 * change some properties for login.html with js
 */
const registerButtonElement = document.getElementById("registerButtonStyle");
function styleButton(element) {
  element.style.backgroundColor = "grey";
  element.style.border = "1px solid yellow";
  element.style.color = "white";
}
styleButton(registerButtonElement);

function mouseEnter() {
  registerButtonStyle.style.backgroundColor = "purple";
}

const mouseLeave = () => {
  registerButtonStyle.style.backgroundColor = "grey";
};

const loginBtnElement = document.getElementById("btn");
loginBtnElement.innerText = "Wrong password";
console.dir(loginBtnElement);

const focusInput = () => {
  loginBtnElement.style.backgroundColor = "red";
  loginBtnElement.style.border = "1px solid yellow";
};
function blurInput() {
  loginBtnElement.style.backgroundColor = "grey";
}
