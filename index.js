// write your code here!
// This variable has the data you're working with

console.log(data);


// Today's exercise: Pokemon Trading Cards

// Repo: boolean-uk-js-pokemon-trading-cards

// Description
// We're going to create a Pokemon Trading Cards show page. To achieve this, you'll use JS to dynamically create all the elements on the page!

// Instructions
// - Use this template as the starting point => https://codesandbox.io/s/pokemon-trading-cards-template-rd5vq?file=/index.js
// - Download the folder, don't use CodeSandbox, it will not work properly.
// - Make sure you check and understand the data that is given to you! 
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <section class="cards"></section>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

// Tips
// - Use functions to your advantage. Break each card into smaller parts, and think how you can turn them into functions.
// - Once you've got a card, think of a way to programmatically create all the others
// - Make sure you understand well the data structure before starting to create the cards

// Challenge
// Add an extra section to each card that contains information about which games each pokemon appeared in.

// Challenge 2
// See if you can find a way to toggle between the different images of each card! (this is a hard one! You might want to use google...)






// Creating the contatiner of the cards

// data.other.official-artwork
// function cardCreate(tittle, source, hp, attack, defence, specialAttack, specialDeffence, specel ) { 
//     const articleEl = document.createElement("article")
//     articleEl.setAttribute("class", "card")
    
//     let h2El = document.createElement("h2")
//     h2El.innerText = tittle
//     h2El.setAttribute("class", "card--tittle")
    
//     let imgEl = document.createElement("img")
//     imgEl.setAttribute("class", "card--img")
//     imgEl.setAttribute("src", source)
//     imgEl.setAttribute("alt", "Pokemon Images")
    
//     let textEl = document.createElement("div")
//     textEl.setAttribute("class", "card--text")
//     let hpEl = document.createElement("p")
//     hpEl.innerText = ("HP:", hp)
//     hpEl.append(textEl)
//     let attEl = document.createElement("p")
//     attEl.innerText =("Attack:", attack)
//     attEl.append(textEl)
//     let defEl = document.createElement("p")
//     defEl.innerText = ("Defence:", defence)
//     defEl.append(textEl)
//     let specAttEl = document.createElement("p")
//     specAttEl.innerText =("Special Attack:", specialAttack)
//     specAttEl.append(textEl)
//     let specDefEl = document.createElement("p")
//     specDefEl.innerText = ("Special Deffence:", specialDeffence)
//     specDefEl.append(textEl)
//     let speEl = document.createElement("p")
//     speEl.innerText = ("Special Element:", specialElement)
//     speEl.append(textEl)
    
//     articleEl.append(h2El, imgEl, textEl)
    
//     const containerEl = document.createElement("section")
//     containerEl.setAttribute("class", "cards")
    
//     containerEl.append(articleEl)
// }

// console.log(cardCreate)
// for (const element  of data) {
// cardCreate(data.name,  )
// }

// document.querySelector(".cards")
// const pokemon = data[0]

function createCard(pokemon){
const sectionEl = document.querySelector(".cards")

// ARTICLE
const articleEl = document.createElement("article")
articleEl.setAttribute("class", "card");
sectionEl.appendChild(articleEl)

// TITLE
let h2El = document.createElement("h2")
h2El.innerText = pokemon.name
h2El.setAttribute("class", "card--tittle")
articleEl.appendChild(h2El)

// IMAGE    
let imgEl = document.createElement("img")
imgEl.setAttribute("class", "card--img")
imgEl.setAttribute("src", pokemon.sprites.other["official-artwork"].front_default)
imgEl.setAttribute("alt", "Pokemon Images")
imgEl.style.border = "1px solid white"
imgEl.style.width = "280px"
articleEl.appendChild(imgEl)

// STATS
let textEl = document.createElement("div")
textEl.setAttribute("class", "card--text")
articleEl.appendChild(textEl)

for(const statCard of pokemon.stats) {
    let cardText = pokemonStat(statCard.stat.name, statCard.base_stat)
    textEl.appendChild(cardText)
}
}

function pokemonStat(text, stat) {
    let pText = document.createElement("p")
    pText.setAttribute("class", "")
    pText.innerText = `${text} - ${stat}`
    return pText
}

// ACTION
for (const pokemon of data){
    createCard(pokemon)
}

