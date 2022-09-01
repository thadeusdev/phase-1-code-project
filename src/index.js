//Event listeners
document.querySelector('#animal-form').addEventListener('submit', handleSubmit)

//Event handlers
function handleSubmit(e){
    e.preventDefault()
    let animalObj = {        
        name: e.target.name.value,
        image_link: e.target.image_link.value,
        description: e.target.description.value,
        donations: 0,
        id:1
    }
    console.log(animalObj)
    renderOneAnimal(animalObj)
    addAnimal(animalObj)
}


//DOM render functions
function renderOneAnimal(animal){
    //Build animal
    let card = document.createElement('li')
    card.innerHTML=`
    <img class="cards" src="${animal.image_link}">
    <div class="content">
        <h4>Name: ${animal.name}</h4>
        <p>$<span class="donation-count">${animal.donations}</span></p>
        <p>${animal.description}</p>
    </div>
    <div>
        <button style='margin-right:120px' id="donate">Donate $50</button>
        <button>Set Free</button>
    </div>
    `
    //Event listener to update donations
    card.querySelector('#donate').addEventListener('click', () => {
        animal.donations+=50
        card.querySelector('span').textContent = animal.donations
        updateDonations(animal)
    })

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

function addAnimal(animalObj){
    // console.log(JSON.stringify(animalObj))
    fetch('http://localhost:3000/animal',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(animalObj)
    })
    .then(res => res.json())
    .then(animal => console.log(animal))
    .catch(error => console.log(error.message))
}

function updateDonations(animalObj){
    fetch(`http://localhost:3000/animal/${animalObj.id}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(animalObj)
    })
    .then(res => res.json())
    .then(animal => console.log(animal))
}

//Initial Render
//Get data and render animal to DOM
function initialize(){
    getAllAnimals()
    //animalData.forEach(animal => renderOneAnimal(animal))
}
initialize()
