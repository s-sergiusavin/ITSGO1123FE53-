const accountSettingsButton = document.getElementById('accountSettingsButton')
const accountSettingsList = document.getElementsByClassName('accountSettingsMenu')[0]

const logoutButton = document.getElementById('logoutButton')

accountSettingsButton.addEventListener('click', function() {
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

const commentButton  = document.getElementById('commentButton')
const commentInput = document.getElementById('commentInput')
const commentInputButton = document.getElementById('commentInputButton')

const commentMessage = document.getElementById('commentMessage')
 const removeCommentButton = document.getElementById('removeCommentButton')

 commentButton.addEventListener('click', function() {
    commentInput.focus()
    //commentInput.blur() 
 })

 commentInput.addEventListener('keydown', function(event) {
    if(event.key === ' Enter') {
        commentMessage.innerHTML = commentInput.value;
        commentInput.value = ''
        this.blur()
    }
 })

 commentInputButton.addEventListener('click', 
    setComment()
 )