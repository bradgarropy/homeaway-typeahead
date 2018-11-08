import React from "react"
import PropTypes from "prop-types"

// styles
import "../scss/PokemonCard.scss"

const PokemonCard = ({pokemon}) => {
    return (
        <div className="pokemon-card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
        </div>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired,
}

PokemonCard.defaultProps = {}

// export
export default PokemonCard
