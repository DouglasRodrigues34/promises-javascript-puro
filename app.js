// let randomNumber = 9

// setTimeout(() => {
//     randomNumber += 100
//     console.log(randomNumber)
// }, 2000)

// console.log(randomNumber)

// ************************************************************************* //

// const aPromise = new Promise((resolve, reject) => {
//     const aNumber = 37

//     // resolve(aNumber)
//     reject(aNumber)
// })

// aPromise
//     .then(value => value)
//     .then(value => {
//         console.log(value)
//     })
//     .catch(rejectValue => {
//         console.log({rejectValue})
//     })

// ************************************************************************* //


const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.querySelector('[data-js="dog-img"]')

const validateHTTPStatus = dogData => {
    if (!dogData.ok) {
        throw new Error(`HTTP error, status ${dogData.status}`)
    }
    return dogData.json()
}

const setDogImage = ({ message: url }) => {
    dogImg.setAttribute('src', url)
}

const handleRequestError = error => {
    console.log(error.message)
}

fetch(url)
    .then(validateHTTPStatus)
    .then(setDogImage)
    .catch(handleRequestError)