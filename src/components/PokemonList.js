import React from "react"

// components
import PokemonCard from "./PokemonCard"

// api
import {getPokemonList, getPokemons} from "../api/pokemon"

// styles
import "../scss/PokemonList.scss"

class PokemonList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 0,
            limit: 15,
            pokemons: [],
            pokemonList: [],
        }
        this.onScroll = this.onScroll.bind(this)
        this.getMore = this.getMore.bind(this)
    }

    async componentDidMount() {
        window.addEventListener("scroll", this.onScroll)

        const {pokemons, offset, limit} = this.state

        const pokemonList = await getPokemonList()
        const newPokemons = await getPokemons(
            pokemonList.slice(offset, offset + limit),
        )

        this.setState({
            pokemonList,
            pokemons: pokemons.concat(newPokemons),
            offset: offset + limit,
        })
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll)
    }

    async getMore() {
        const {pokemonList, pokemons, offset, limit} = this.state
        const newPokemons = await getPokemons(
            pokemonList.slice(offset, offset + limit),
        )
        this.setState({
            pokemons: pokemons.concat(newPokemons),
            offset: offset + limit,
        })
    }

    onScroll() {
        const {innerHeight, scrollY} = window
        const {scrollHeight} = document.body
        const scrolled = Math.ceil(innerHeight + scrollY) === scrollHeight
        scrolled && this.getMore()
    }

    render() {
        const {pokemons} = this.state
        return (
            <div className="pokemon-list">
                {pokemons &&
                    pokemons.map((pokemon, index) => (
                        <PokemonCard key={index} pokemon={pokemon} />
                    ))}
            </div>
        )
    }
}

PokemonList.propTypes = {}
PokemonList.defaultProps = {}

// export
export default PokemonList
