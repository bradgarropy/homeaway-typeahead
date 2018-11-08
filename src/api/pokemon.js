// packages
import axios from "axios"

async function getPokemonList() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    const pokemonList = response.data.results
    return pokemonList
}

async function getPokemons(pokemonList) {
    const promises = pokemonList.map(pokemon => axios.get(pokemon.url))
    const responses = await Promise.all(promises)
    const pokemons = responses.map(response => response.data)
    return pokemons
}

async function getPokemon(name) {
    try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}/`,
        )
        const pokemon = response.data
        return pokemon
    } catch (error) {
        return {}
    }
}

// exports
export {getPokemonList, getPokemons, getPokemon}
