
const baseURL= "https://pokeapi.co/api/v2/pokemon/"
console.log(baseURL)

function searchPokemon() {
    
    const name = document.querySelector("#pokemonName").value;
    const url = `${baseURL}${name}`

    $.ajax(url)
    .then((data) => {
        console.log(data)
        document.querySelector("#searchDisplay").innerHTML = `
        <div>
    <img id="searchImage" src="${data.sprites.front_default}" alt="${data.name}">
</div>
<div class="pokemonInfo">
<h1>${data.name}</h1>
<p>${data.types.map( type => type.type.name).join(', ')}</p>
<p>HP: ${data.stats[0].base_stat}  
<p>Defense: ${data.stats[2].base_stat} </p></p>
<p>Attack: ${data.stats[1].base_stat}</p>
<p>Speed: ${data.stats[5].base_stat}</p>
</div>
        `
    })
    // .preventDefault();
}
document.querySelector("#search").addEventListener("click", searchPokemon);



const displayGrid = document.querySelector("#gridDisplay")

function getPokeInfo() {

    const pokeArray = [];

    for( let number = 1; number <= 905; number++){

const secondUrl = `https://pokeapi.co/api/v2/pokemon/${number}`;
          pokeArray.push(fetch(secondUrl)
.then( (res) => res.json()));
    }
    Promise.all(pokeArray).then( (res) => {
        const pokemonInfo = res.map((poke) => {
        return{
            pokemonSprites: poke.sprites.front_default,
            pokemoName: poke.name,
            pokemonID: poke.id,
            pokemonType:poke.types.map( type => type.type.name).join(', '),
        }});
        pokedexDisplay(pokemonInfo)
    })
};

const pokedexDisplay = (pokemon) => {
const pokeDeck = pokemon.map(poke => `
<ol id="deckDisplay">

    <img class="image" src="${poke.pokemonSprites}"/>
    <h4>${poke.pokemonID}. ${poke.pokemoName}</h4>
    <p>${poke.pokemonType}</p>
</ol>
`)
.join('');
gridDisplay.innerHTML = pokeDeck;
};
getPokeInfo()