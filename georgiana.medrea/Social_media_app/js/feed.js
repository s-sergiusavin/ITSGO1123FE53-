const accountSettingsButton = document.getElementById('accountSettingsButton')
const accountSettingsList = document.getElementsByClassName('accountSettingsMenu')[0]

const logoutButton = document.getElementById('logoutButton')

accountSettingsButton.addEventListener('click', function () {
    if (accountSettingsList.style.display === 'flex') {
        accountSettingsList.style.display = 'none'
    } else {
        accountSettingsList.style.display = 'flex'
    }
})

logoutButton.addEventListener('click', () => {
    window.open('../login.html', '_self')
})

const noOfLikesElem = document.getElementById('likesNumber')
const noOfSharesElem = document.getElementById('sharesNumber')

const likeButton = document.getElementById('likeButton')
const shareButton = document.getElementById('shareButton')

let isLiked = false
let isShared = false

function getNumberOfLikes() {
    noOfLikesElem.innerText = noOfLikesElem.innerText || 21
}

function getNumberOfShares() {
    noOfSharesElem.innerText = noOfSharesElem.innerText || 27
}

function getData() {
    getNumberOfLikes()
    getNumberOfShares()
}

getData()

likeButton.addEventListener('click', function () {
    isLiked = !isLiked
    console.dir(noOfLikesElem)

    // if (isLiked) {
    //     noOfLikesElem.innerText = Number(noOfLikesElem.innerText) + 1
    // } else {
    //     noOfLikesElem.innerText = Number(noOfLikesElem.innerText) - 1
    // }

    noOfLikesElem.innerText = isLiked
        ? noOfLikesElem.innerText = Number(noOfLikesElem.innerText) + 1
        : noOfLikesElem.innerText = Number(noOfLikesElem.innerText) - 1

    this.classList.toggle('touched')
})

shareButton.addEventListener('click', function () {
    isShared = !isShared
    noOfSharesElem.innerText = isShared
        ? Number(noOfSharesElem.innerText) + 1
        : Number(noOfSharesElem.innerText) - 1

    this.classList.toggle('touched')
})

// Send message to user/group using promp and alert

const onlineUserElements = document.querySelectorAll('#onlineUser')
console.dir(onlineUserElements)

onlineUserElements.forEach(element => {
    element.addEventListener('click', function (event) {
        if (event) {
            element.style.background = 'aquamarine'
            let message = prompt('Insert your message for user below: ')
            alert('Your message for user was: ' + message)
            console.log(message)
        }
    })
})

const onlineGroupElements = document.querySelectorAll('#onlineGroup')

onlineGroupElements.forEach(element => {
    element.addEventListener('click', function (event) {
        if (event) {
            element.style.background = 'aquamarine'
            let message = prompt('Insert your message for the group below: ')
            alert('Your message for group was: ' + message)
            console.log(message)
        }
    })
})




