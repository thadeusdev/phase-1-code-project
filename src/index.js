//DOM render functions
function renderOneAnimal(animal){
    //Build animal
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML=`
    <img src="${animal.image_link}">
    <div class="content">
    <h4>${animal.name}</h4>
    </div>
    `
    //add animal card to the DOM
    document.querySelector('#animal-list').appendChild(card)
}




//fetch requests
// Get fetch for animal resources
function getAllAnimals(){
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/9')
    .then(res => res.json())
    .then((animal => renderOneAnimal(animal)))
}

//Initial Render
//Get data and render animal to DOM
function initialize(){
    getAllAnimals()
    //animalData.forEach(animal => renderOneAnimal(animal))
}
initialize()
