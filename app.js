const baseURL= "https://pokeapi.co/api/v2/pokemon/"
console.log(baseURL)

function searchPokemon() {
    const name = document.querySelector("#pokemonName").value;
    const url = `${baseURL}${name}`

    $.ajax(url)
    .then((data) => {
        document.querySelector(".pokemonDisplay").innerHTML = `
        <div>
    <img src="${data.sprites['front_default']}" alt="${data.name}">
</div>
<div class="pokemonInfo">
<h1>${data.name}</h1>
<p>${data.types.map( type => type.type.name).join(', ')}</p>
</div>
        `
    })
    // name.preventDefault();
}

//searchPokemon("charmander")

document.querySelector("#search").addEventListener("click", searchPokemon);