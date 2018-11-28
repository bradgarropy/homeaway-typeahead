import React from "react"
import PropTypes from "prop-types"
import isEmpty from "lodash.isempty"

// components
import SearchBarMatches from "./SearchBarMatches"

// styles
import "../scss/SearchBar.scss"

// api
import {searchUsers} from "../api/github"

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: "",
            users: [],
        }

        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    async onChange(event) {
        const {name, value} = event.target
        const users = await searchUsers(value)

        this.setState({
            [name]: value,
            users,
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
            users: [],
        })
    }

    render() {
        const {search, users} = this.state
        const matches = users.slice(0, 7).map(user => user.login)

        return (
            <div className="search-bar">
                <form onSubmit={this.onSubmit}>
                    <input
                        autoComplete="off"
                        name="search"
                        value={search}
                        onChange={this.onChange}
                    />
                    {search && !isEmpty(matches) && (
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
