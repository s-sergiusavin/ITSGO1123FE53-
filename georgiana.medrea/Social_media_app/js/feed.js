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

// Send message to user/group

const onlineUserElements = document.querySelectorAll('#onlineUser')
console.dir(onlineUserElements)

onlineUserElements.forEach(element => {
    element.addEventListener('click', function (event) {
        if (event) {
            element.style.background = 'aquamarine'
            let message = prompt('Insert your message for user below: ')
            if (message !== null && message !== '') {
                alert('Your message for user was: ' + message)
                console.log(message)
            } else {
                alert('Insert your message first!')
            }
        }
    })
})

const onlineGroupElements = document.querySelectorAll('#onlineGroup')

onlineGroupElements.forEach(element => {
    element.addEventListener('click', function (event) {
        if (event) {
            element.style.background = 'aquamarine'
            let message = prompt('Insert your message for the group below: ')
            if (message !== null && message !== '') {
                alert('Your message for user was: ' + message)
                console.log(message)
            } else {
                alert('Insert your message first!')
            }
        }
    })
})

const bloodDonationElement = document.getElementById('bloodDonation')
const climateCenterElement = document.getElementById('climateCenter')
const playGamesElement = document.getElementById('playGames')
const videoGamesElement = document.getElementById('videoGames')
const marketplaceElement = document.getElementById('marketplace')
const adActivityElement = document.getElementById('adActivity')
const adsManagerElement = document.getElementById('adsManager')
const ordersPaymentsElement = document.getElementById('ordersPayments')
const fundraisersElement = document.getElementById('fundraisers')

bloodDonationElement.addEventListener('click', function() {
    alert('There are not scheduled nearby any blood donation events!')
})

climateCenterElement.addEventListener('click', function() {
    alert('Facts about climate change: 97% of climate scientists agree that humans are causing global warming!')
})

playGamesElement.addEventListener('click', function() {
    alert('You did not play any games lately!')
})

videoGamesElement.addEventListener('click', function() {
    alert('You did not play any video games lately!')
})

marketplaceElement.addEventListener('click', function() {
    let message = prompt('If you want to use Marketplace, you need first to agree to use your profile info! Enter AGREE or OK or YES below:')
    if (message === 'AGREE' || message === 'agree' || message === 'Agree' || message === 'OK' || message === 'ok' || message === 'Ok' || message === 'YES' || message === 'yes' || message === 'Yes') {
        alert('Your marketplace account is created!')
        console.log(message)
    } else {
        alert('You need first to agree to use your profile info, before using Marketplace!')
    }
})

adActivity.addEventListener('click', function() {
    alert('You do not have any ads running!')
})

adsManager.addEventListener('click', function() {
    alert('Ads manager account is available only for business accounts!')
})

ordersPayments.addEventListener('click', function() {
    alert('No payment history!')
})

fundraisers.addEventListener('click', function() {
    alert('You have not raised money for any cause!')
})



