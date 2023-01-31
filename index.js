import Dog from './Dog.js'
import dogsData from './data.js'

let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
document.getElementById("accept-button").addEventListener('click', () => isLikedButton(true)) 
document.getElementById("reject-button").addEventListener('click', () => isLikedButton(false)) 

render()

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    currentDogIndex+=1
    currentDogIndex === 3 ? currentDogIndex = 0 : false 
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
}

function isLikedButton(bool){
    currentDog.setMatchStatus(bool)
    document.getElementById("card").innerHTML += currentDog.getBadgeHtml()
    setTimeout(() => getNewDog(), 2000)
}
