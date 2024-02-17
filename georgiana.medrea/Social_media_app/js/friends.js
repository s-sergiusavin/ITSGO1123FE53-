const noOfFriendsElement = document.getElementById('friendsNumber')
console.dir(noOfFriendsElement)
const confirmBtnElements = document.querySelectorAll('#confirm')
console.dir(confirmBtnElements)
const removeBtnElements = document.querySelectorAll('#remove')
console.dir(removeBtnElements)
const friendRequestElements = document.querySelectorAll('#friendRequest')
console.dir(friendRequestElements)

let isFriend = false

function getNumberOfFriends() {
    noOfFriendsElement.innerText = noOfFriendsElement.innerText || 447
}

function getData() {
    getNumberOfFriends()
}

getData()

confirmBtnElements.forEach(element => {
    element.addEventListener('click', function () {
        isFriend = !isFriend
        console.dir(noOfFriendsElement)

        if (isFriend) {
            noOfFriendsElement.innerText = Number(noOfFriendsElement.innerText) + 1

            friendRequestElements.forEach(element => {
                element.addEventListener('click', function () {
                    element.style.display = "none"
                })
            })
        }
        else {
            noOfFriendsElement.innerText = Number(noOfFriendsElement.innerText)
        }
    })
})

friendRequestElements.forEach(element => {
    element.addEventListener('click', function () {
        element.style.display = "none"
    })
})