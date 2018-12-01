import React from "react"
import PropTypes from "prop-types"
import isEmpty from "lodash.isempty"
import debounce from "lodash.debounce"

// components
import DropdownMenu from "./DropdownMenu"

// styles
import "../scss/SearchBar.scss"

// api
import {searchUsers} from "../api/github"

class SearchBar extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    state = {
        search: "",
        users: [],
    }

    debouncedSearchUsers = debounce(async value => {
        const users = value ? await searchUsers(value) : []
        this.setState({users})
    }, 300)

    onChange = async event => {
        // handle input
        const {name, value} = event.target
        this.setState({[name]: value})

        // debounce api
        this.debouncedSearchUsers(value)
    }

    onClick = event => {
        event.persist()

        const search = event.target.innerText
        this.setState({search}, () => this.onSubmit(event))
    }

    onSubmit = event => {
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
        const items = isEmpty(users)
            ? []
            : users.slice(0, 7).map(user => user.login)

        return (
            <div className="search-bar">
                <form onSubmit={this.onSubmit}>
                    <input
                        autoComplete="off"
                        name="search"
                        value={search}
                        onChange={this.onChange}
                    />
                    {search && !isEmpty(items) && (
                        <DropdownMenu items={items} onClick={this.onClick} />
                    )}
                </form>
            </div>
        )
    }
}

// export
export default SearchBar
