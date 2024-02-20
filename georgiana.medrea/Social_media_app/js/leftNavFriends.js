const noOfFriendsElement = document.getElementById('friendsNumber')
const confirmBtnElements = document.querySelectorAll('.confirm')
const removeBtnElements = document.querySelectorAll('.remove')
const friendRequestElements = document.querySelectorAll('.friendRequest')


let isFriend = false

function getNumberOfFriends() {
    noOfFriendsElement.innerText = noOfFriendsElement.innerText || 447
}

getNumberOfFriends()

confirmBtnElements.forEach(element => {
    element.addEventListener('click', function() {
        isFriend = !isFriend

        if (isFriend) {
            noOfFriendsElement.innerText = Number(noOfFriendsElement.innerText) + 1
        } else {
            noOfFriendsElement.innerText = Number(noOfFriendsElement.innerText)
        }
    })
})

friendRequestElements.forEach(element => {
    element.addEventListener('click', function() {
        element.style.display = "none"
    })
})

