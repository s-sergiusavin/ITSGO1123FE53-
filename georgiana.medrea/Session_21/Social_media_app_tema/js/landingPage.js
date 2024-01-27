
const focusInput = () => {
    document.getElementsByTagName('label')[0].innerText = 'Enter below your first and last name';
    document.getElementsByTagName('label')[0].style.textTransform = 'uppercase';
    document.getElementsByTagName('input')[0].style.backgroundColor = '#ffbf00';
    document.getElementsByTagName('input')[0].placeholder = '';
}

const blurInput = () => {
    document.getElementsByTagName('label')[0].innerText = 'Enter your name';
    document.getElementsByTagName('label')[0].style.textTransform = '';
    document.getElementsByTagName('input')[0].style.backgroundColor = 'white';
    document.getElementsByTagName('input')[0].placeholder = 'Your name';
}

function onKeyDown() {
    document.getElementsByTagName('input')[0].style.backgroundColor = 'white';
}

function onKeyUp() {
    document.getElementsByTagName('input')[0].style.backgroundColor = 'teal';
}

const onClickBookNow = () => {
    document.getElementsById('callToActionButton').value = 'Reservation done!';
}