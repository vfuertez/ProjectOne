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
    data.preventDefault();
}

document.querySelector("#search").addEventListener("click", searchPokemon);