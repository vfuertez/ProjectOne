
const baseURL= "https://pokeapi.co/api/v2/pokemon/"
console.log(baseURL)

function searchPokemon() {
    
    const name = document.querySelector("#pokemonName").value;
    const url = `${baseURL}${name}`

    $.ajax(url)
    .then((data) => {
        console.log(data)
        document.querySelector("#pokemonDisplay").innerHTML = `
        <div>
    <img src="${data.sprites['front_default']}" alt="${data.name}">
</div>
<div class="pokemonInfo">
<h1>${data.name}</h1>
<p>${data.types.map( type => type.type.name).join(', ')}</p>
<p></p>
</div>
        `
    })
    // .preventDefault();
}
document.querySelector("#search").addEventListener("click", searchPokemon);



const displayGrid = document.querySelector("#pokeGridDisplay")
function getPokeInfo() {
    const promises = [];


    for( let i = 1; i <= 905; i++){

const secondUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
promises.push(fetch(secondUrl).then( (res) => res.json()));
    }
    Promise.all(promises).then( (result) => {
        const pokemonInfo = result.map((poke) => ({
            name: poke.name,
            id: poke.id,
            sprites: poke.sprites['front_default'],
        }));
        pokedexDisplay(pokemonInfo)
    })
}

const pokedexDisplay = (pokemon) => {
const pokeDeck = pokemon.map(poke => `
<p id="deckDisplay">

    <img class="image" src="${poke.sprites}"/>
    <h4>${poke.id}. ${poke.name}</h4>
</p>
`)
.join('');
pokeGridDisplay.innerHTML = pokeDeck;
};
getPokeInfo()