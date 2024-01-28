const addToStory = document.querySelector('.addToStory');

function mouseEnterAddTo() {
    addToStory.style.backgroundColor = 'white';
}

function mouseLeaveAddTo() {
    addToStory.style.backgroundColor = 'lightBlue';
}

const editProfile = document.getElementsByClassName('editProfile');

function mouseEnterEdit() {
    editProfile[0].style.backgroundColor = 'white';
}

function mouseLeaveEdit() {
    editProfile[0].style.backgroundColor = 'lightBlue';
}

const onClickAddTo = () => {
    addToStory.style.backgroundColor = 'turquoise';
}

