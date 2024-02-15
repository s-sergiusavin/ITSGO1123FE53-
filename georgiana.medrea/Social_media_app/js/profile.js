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

likeButton.addEventListener('click', function() {
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

shareButton.addEventListener('click', function() {
    isShared = !isShared
    noOfSharesElem.innerText = isShared
    ? Number(noOfSharesElem.innerText) + 1
    : Number(noOfSharesElem.innerText) - 1

    this.classList.toggle('touched')
})