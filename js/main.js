//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#randomizerButton').addEventListener('click', addInterval)


let intervalID
let objectID

function addInterval(){
  clearInterval(intervalID)
  getObjectID()
  intervalID = setInterval(getObjectID, 7000)
}

function getObjectID(){
    objectID = Math.floor(Math.random() * 21)

    fetch(`https://ghibliapi.herokuapp.com/films`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data[objectID].title
      document.querySelector('img').src = data[objectID].image
      document.querySelector('h3').innerText = data[objectID].director
      document.querySelector('.description').innerText = data[objectID].description
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}

document.querySelector('#pauseButton').addEventListener('click', pause)

function pause() {
  clearInterval(intervalID)
}


function myCallback() {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.drinks)
    document.querySelector('h2').innerText = data.drinks[0].strDrink
    document.querySelector('img').src = data.drinks[0].strDrinkThumb
    document.querySelector('h3').innerText = data.drinks[0].strInstructions
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

}