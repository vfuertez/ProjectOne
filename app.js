document.getElementById("search").addEventListener("click", searchPokemon);



const baseURL= "https://pokeapi.co/api/v2/pokemon/"
console.log(baseURL)

function searchPokemon(name) {
    //const name = document.querySelector("#pokemonName")
    const url = `${baseURL}${name}`

    $.ajax(url)
    .then((data) => {
        document.querySelector(".container_1").innerHTML = `
        <div>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="">
</div>
<div class="pokemonInfo">
<h1>${name}</h1>
<p>${data.types.map( type => type.type.name).join(', ')}</p>
</div>
        `
        //console.log(data)
    })
    // name.preventDefault();
}

searchPokemon("charizard")