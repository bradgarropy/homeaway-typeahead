import React from "react"
import PropTypes from "prop-types"

// styles
import "../scss/PokemonCard.scss"

const PokemonCard = ({pokemon}) => {
    console.log(pokemon)
    const {id: number, name, height, weight, abilities, stats} = pokemon

    return (
        <div className="pokemon-card">
            <img src={pokemon.sprites.front_default} alt={name} />
            <p>{number}</p>
            <p>{name}</p>
            <p>{height}</p>
            <p>{weight}</p>
            {stats.map((stat, index) => (
                <p key={index}>
                    {stat.stat.name}: {stat.base_stat}
                </p>
            ))}
            {abilities.map(({ability}, index) => (
                <p key={index}>{ability.name}</p>
            ))}
        </div>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired,
}

// export
export default PokemonCard
