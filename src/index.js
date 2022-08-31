let status = false;
//DOM render functions
function renderOneAnimal(animal){
    //Build animal
    let card = document.createElement('li')
    card.innerHTML=`
    <img class="cards" src="${animal.image_link}">
    <div class="content">
        <h4>Name: ${animal.name}</h4>
        <p>$<span class="donation-count">${animal.donation}</span></p>
        <p>Habitat: ${animal.description}</p>
    </div>
    <div>
        <button style='margin-right:120px'>Donate $0</button>
        <button>Set Free</button>
    </div>
    `
    //add animal card to the DOM
    document.querySelector('#animal-list').appendChild(card)
}


//fetch requests
// Get fetch for animal resources
function getAllAnimals(){
    fetch('http://localhost:3000/animal')
    .then(res => res.json())
    .then(animalData => animalData.forEach(animal => renderOneAnimal(animal)))
}
getAllAnimals()

//Initial Render
//Get data and render animal to DOM
function initialize(){
    getAllAnimals()
    //animalData.forEach(animal => renderOneAnimal(animal))
}
initialize()
