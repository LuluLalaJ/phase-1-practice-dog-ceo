console.log('%c HI', 'color: firebrick')

const dogImgUrl = "https://dog.ceo/api/breeds/image/random/4"; 
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dogImgDiv = document.getElementById('dog-image-container');
const breedUl = document.getElementById('dog-breeds')


function fetchDog() {
    fetch(dogImgUrl)
    .then(response => response.json())
    .then(imgData => imgData.message.forEach(imgURL => addImg(imgURL)))
}

fetchDog ()

function fetchBreed() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(breedData => {
        let allBreeds = breedData.message
        Object.entries(allBreeds).forEach(entry => addBreed(entry))
    })
}

fetchBreed() 

function addImg(imgURL) {
    const dogImg = document.createElement('img')
    dogImg.src = imgURL
    dogImgDiv.appendChild(dogImg)
}

function addBreed(breedInfo) {
    const breedLi = document.createElement('li')
    breedLi.textContent = breedInfo[0]
    breedLi.addEventListener('click', () => {
        if (breedLi.style.color !== 'pink') {
            breedLi.style.color = 'pink'
        } else {
            breedLi.style.color = 'black'}
    })
    breedUl.appendChild(breedLi)
}

const dropDownBox = document.getElementById('breed-dropdown')
dropDownBox.addEventListener('change', (event) => filterBreed(event))

function filterBreed(event) {
    //filter breed by initial 
    const option = event.target.value
    const currentBreeds = document.getElementById('dog-breeds');
    if (option === "select initial") {
        for (const breed of currentBreeds.children) {
            breed.style.display = 'block'
        }
    } else {
        for (const breed of currentBreeds.children) {
            if (breed.textContent[0] !== option) {
                breed.style.display = 'none'
            } else {
                breed.style.display = 'block'
            }
        } 
    }
}
