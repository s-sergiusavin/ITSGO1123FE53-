const noOfLikesElements = document.querySelectorAll('#likesNumber')
const noOfSharesElements = document.querySelectorAll('#sharesNumber')

const likeButtonElements = document.querySelectorAll('#likeButton')
const shareButtonElements = document.querySelectorAll('#shareButton')

let isLiked = false
let isShared = false

function getNumberOfLikes() {
    noOfLikesElements.innerText = noOfLikesElements.innerText || 2
}

function getNumberOfShares() {
    noOfSharesElements.innerText = noOfSharesElements.innerText || 2
}

function getData() {
    getNumberOfLikes()
    getNumberOfShares()
}

getData()

likeButtonElements.forEach(element => {
    element.addEventListener('click', function () {
        isLiked = !isLiked

        if (isLiked) {
            noOfLikesElements.innerText = Number(noOfLikesElements.innerText) + 1
        } else {
            noOfLikesElements.innerText = Number(noOfLikesElements.innerText) - 1
        }

        this.classList.toggle('touched')
    })
})

shareButtonElements.forEach(element => {
    element.addEventListener('click', function () {
        getNumberOfShares()

        isShared = !isShared

        if (isShared) {
            noOfSharesElements.innerText = Number(noOfSharesElements.innerText) + 1
        } else {
            noOfSharesElements.innerText = Number(noOfSharesElements.innerText) - 1
        }

        this.classList.toggle('touched')
    })
})