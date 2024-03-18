/**
 * http requests
 */

/**
 * RESTful services
 * Representational state of transfer
 * CRUD
 * Create
 * Read
 * Update
 * Delete
 */

/**
 * http implementation of rest services
 * Create => POST
 * Read => GET
 * Update => PUT / PATCH (Update partial)
 * Delete => DELETE
 */

const myFirstPromise = new Promise(function (resolve, reject) {
    // setTimeout(resolve, 3000, 'Value sent')
    setTimeout(reject, 3000, 'Error sent')
})

// console.log(myFirstPromise) // nu ne putem folosi de promise-uri ca alte valori

myFirstPromise.then(
    (value) => {
        console.log('fulfiled' + value)
    },
    (error) => {
        console.log('rejected' + error)
    }
)

/**
 * GET request
 */

const singleUserURL = 'https://reqres.in/api/users/2'

// fetch(singleUserURL).then((response) => {
//     console.log(response)
//     response.json().then(data => {
//         console.log(data)
//     })
// })

const singleUserData = fetch(singleUserURL).then(response => {
    return response.json()
})

singleUserData.then(data => console.log(data))

/**
 * Async/await requests
 */

async function getSingleUser() {
    const response = await fetch(singleUserURL)
    return response.json()
}

getSingleUser().then(data => {
    console.log('Data with async/await')
    console.log(data)
})

/**
 * GET request with error hangling
 */

const singleUserNotFoundURl = 'https://reqres.in/api/users/23'
const userListURL = 'https://reqres.in/api/users?page=2'

// ? in url se numeste querry param

const allUserList = new Promise((resolve, reject) => {
    fetch(userListURL).then(response => {
        console.log(response)
        if (response.status !== 200) {
            throw 'ai o eroare'
        }
        return response.json()
    })
        .then(data => {
            resolve(data)
        })
        .catch(error => {
            reject(error)
        })
})

allUserList.then(
    value => {
        console.log(value)
    },
    error => {
        console.log(error)
    }
)

/**
 * POST method
 */

const createUserURL = 'https://reqres.in/api/users'
const user = {
    "name": "morpheus",
    "job": "leader"
}

const createUser = new Promise((resolve, reject) => {
    fetch(createUserURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })//pana in punctul acesta se face requestul
        .then(response => {
            console.log(response)
            if (response.status !== 201) {
                throw 'Ai o eroare la crearea userului'
            }
            return response.json()
        })
        .then(data => {
            resolve(data)
        })
        .catch(error => {
            reject(error)
        })
})

createUser.then(
    value => console.log(value),
    error => console.log(error)
)

/**
 * POST request with error
 */

const registerURL = 'https://reqres.in/api/register'
const userUnsuccessful = {
    "email": "sydney@fife"
}
const userSuccessful = {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}

const registerUrlConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userUnsuccessful)
}

const registerUser = new Promise((resolve, reject) => {
    fetch(registerURL, registerUrlConfig) // pana in punctul acesta se face requestul
        .then(response => {
            console.log(response)
            if (response.status !== 200) {
                console.error('Ai o eroare la register')
            }
            return response.json()
        })
        .then(data => resolve(data))
        .catch(error => reject(error))
})

registerUser.then(
    value => console.log(value),
    error => console.error(error)
)

/**
 * PUT request
 */

const updateUserURL = 'https://reqres.in/api/users/2'
const updatedUser = {
    "name": "morpheus",
    "job": "zion resident"
}

const updateUserUrlConfig = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUser)
}

const updateUser = new Promise((resolve, reject) => {
    fetch(updateUserURL, updateUserUrlConfig)
        .then(response => {
            return response.json()
        })
        .then(data => resolve(data))
        .catch(error => reject(data))
})

updateUser.then(
    value => console.log(value),
    error => console.error(error)
)

/**
 * DELETE request
 */

const deleteUserUrlHardcoded = 'https://reqres.in/api/users/2';
const baseURL = 'https://reqres.in/api/';
const deletedUserId = '2';
const deleteUserURl = `${baseURL}users/${deletedUserId}`

const deleteUserUrlConfig = {
    method: 'DELETE'
}

const deleteUser = new Promise((resolve, reject) => {
    fetch(deleteUserURl, deleteUserUrlConfig)
        .then(response => {
            if (response.status !== 204) {
                throw 'Ai o eroare la stergera userului'
            }
        })
})