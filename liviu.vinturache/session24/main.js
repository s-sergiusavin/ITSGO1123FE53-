/**
 * HTTP Requests
 */

/**
 * RESTful services
 * Representation state of transfer
 * CRUD
 * Create
 * Read
 * Update
 * Delete
 */

/**
 * HTTP implementation of rest services
 * Create => POST
 * Read => GET
 * Update => PUT / PATCH (update partial)
 * Delete => DELETE
 */

// const myFirstPromise = new Promise(function(resolve, reject) {
//     // setTimeout(resolve, 3000, 'Value sent')
//     setTimeout(reject, 3000, 'Error sent')
// })

// console.log(myFirstPromise) // Nu ne putem folosi de promisuri cum eram obisnuiti cu alte valori

// myFirstPromise.then(
//     (value) => {
//         console.log('fullfield ' + value)
//     },
//     (error) => {
//         console.log('rejected ' + error)
//     }
// )

/**
 * GET request
 */

const singleUserUrl = 'https://reqres.in/api/users/2'

// fetch(singleUserUrl).then( (response) => {
//     console.log(response)
//     response.json().then( data => {
//         console.log(data)
//     })
// })

const singleUserData = fetch(singleUserUrl).then( response => {
    return response.json()
})

// singleUserData.then( data => console.log(data))

/**
 * Async/await requests
 */

async function getSingleUser() {
    const response = await fetch(singleUserUrl)
    return response.json()
}

// getSingleUser().then( data => {
//     console.log('Data with async/await')
//     console.log(data)
// })

/**
 * Get request with error handling
 */

const singleUserNotFoundUrl = 'https://reqres.in/api/users/23'
const userListUrl = 'https://reqres.in/api/users?page=2'

// ? in url se numeste querry param

const allUserList = new Promise( (resolve, reject) => {
    fetch(singleUserNotFoundUrl).then( response => {
        console.log(response)
        if (response.status !== 200) {
            throw "Ai o eroare"
        }
        return response.json()
    })
    .then( data => {
        resolve(data)
    })
    .catch( error => {
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
 * POST request
 */

const createUserUrl = 'https://reqres.in/api/users'
const user = {
    "name": "morpheus",
    "job": "leader"
}

const createUser = new Promise( (resolve, reject) => {
    fetch(createUserUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }) // pana in punctul acesta se face requestul
    .then( response => {
        console.log(response)
        if(response.status !== 201) {
            throw 'Ai o erare la creare userului'
        }
        return response.json()
    })
    .then( data => {
        resolve(data)
    })
    .catch( error => {
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

const registerUrl = 'https://reqres.in/api/register'
const userUsuccessful = {
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
    body: JSON.stringify(userSuccessful)
}

const registerUser = new Promise((resolve, reject) => {
    fetch(registerUrl, registerUrlConfig) // pana in punctul acesta se face requestul
    .then( response => {
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

const updateUserUrl = 'https://reqres.in/api/users/2'
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
    fetch(updateUserUrl, updateUserUrlConfig)
    .then( response => {
        return response.json()
    })
    .then( data => resolve(data))
    .catch( error => reject(data))
})

updateUser.then(
    value => console.log(value),
    error => console.error(error)
)

/**
 * DELETE request
 */

const deleteUserUrlHardcoded = 'https://reqres.in/api/users/2'
const baseUrl = 'https://reqres.in/api/'
const deletedUserId = '2';
const deleteUserUrl = `${baseUrl}users/${deletedUserId}`

const deletUserUrlConfig = {
    method: 'DELETE'
}

const deleteUser = new Promise( (resolve, reject) => {
    fetch(deleteUserUrl, deletUserUrlConfig)
    .then(response => {
        if (response.status !== 204) {
            throw 'Ai o eroare la stergerea userului'
        }
    })
})




