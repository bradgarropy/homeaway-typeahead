import React from "react"
import PropTypes from "prop-types"
import isEmpty from "lodash.isempty"

// components
import SearchBarMatches from "./SearchBarMatches"

// styles
import "../scss/SearchBar.scss"

// api
import {getPokemonList} from "../api/pokemon"

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: "",
            matches: [],
            pokemonList: [],
        }

        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    async componentDidMount() {
        const pokemonList = await getPokemonList()
        this.setState({pokemonList})
    }

    onChange(event) {
        const {name, value} = event.target
        const {pokemonList} = this.state

        const matches = pokemonList
            .map(pokemon => pokemon.name)
            .filter(name => name.startsWith(value))
            .slice(0, 7)

        this.setState({
            [name]: value,
            matches,
        })
    }

    onClick(event) {
        event.persist()

        const search = event.target.innerText
        this.setState({search}, () => this.onSubmit(event))
    }

    onSubmit(event) {
        event.preventDefault()

        const {onSubmit} = this.props
        const {search} = this.state
        onSubmit(event, search)

        this.setState({
            search: "",
            matches: [],
        })
    }

    render() {
        const {search, matches} = this.state

        return (
            <div className="search-bar">
                <form onSubmit={this.onSubmit}>
                    <input
                        autoComplete="off"
                        name="search"
                        value={search}
                        onChange={this.onChange}
                    />
                    {search &&
                        !isEmpty(matches) && (
                        <SearchBarMatches
                            matches={matches}
                            onClick={this.onClick}
                        />
                    )}
                </form>
            </div>
        )
    }
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

SearchBar.defaultProps = {}

// export
export default SearchBar
