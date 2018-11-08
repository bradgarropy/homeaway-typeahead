import React from "react"
import PropTypes from "prop-types"

// styles
import "../scss/SearchBarMatches.scss"

const SearchBarMatches = ({matches, onClick}) => {
    return (
        <ul className="search-bar-matches">
            {matches.map((match, index) => (
                <li key={index} onClick={onClick}>
                    {match}
                </li>
            ))}
        </ul>
    )
}

SearchBarMatches.propTypes = {
    matches: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
}

SearchBarMatches.defaultProps = {}

// export
export default SearchBarMatches
