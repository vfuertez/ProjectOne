const baseURL= "https://pokeapi.co/api/v2/pokemon/"
console.log(baseURL)

function searchPokemon() {
    
    const name = document.querySelector("#pokemonName").value;
    const url = `${baseURL}${name}`

    $.ajax(url)
    .then((data) => {
        console.log(data)
        document.querySelector(".pokemonDisplay").innerHTML = `
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

const pokeGrid = document.querySelector(".pokemonDisplayGrid")
console.log(pokeGrid)

function getPokeInfo(){
const promises = [];

for(let i = 1; i <=300; i++){

    const secondURL = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(secondURL).then((res) => res.json()));

}
Promise.all(promises).then((result) =>{
    const pokemon = result.map((poke) => ({
        name: poke.name,
        id: poke.id,
        sprites: poke.sprites['front_default']

    }))
    getPokeInfo(pokemon)

})
}

const pokedexDisplay = (pokemon) => {
    console.log(pokemon);
    const pokemonList = pokemon.map(pokemon => `
    `)
}

getPokeInfo()