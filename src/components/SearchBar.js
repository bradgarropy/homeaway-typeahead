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
        open: false,
    }

    debouncedSearchUsers = debounce(async value => {
        const users = value ? await searchUsers(value) : []
        this.setState({users})
    }, 300)

    onKeyUp = event => {
        if (event.key === "Escape") this.setState({open: false})
    }

    onFocus = () => {
        this.setState({open: true})
    }

    onBlur = () => {
        this.setState({open: false})
    }

    onChange = async event => {
        const {name, value} = event.target

        this.setState({[name]: value, open: true})
        this.debouncedSearchUsers(value)
    }

    onSelection = event => {
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
        const {search, users, open} = this.state
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
                        placeholder="🔎 search..."
                        onChange={this.onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onKeyUp={this.onKeyUp}
                    />
                    {search && !isEmpty(items) && (
                        <DropdownMenu
                            open={open}
                            items={items}
                            onSelection={this.onSelection}
                        />
                    )}
                </form>
            </div>
        )
    }
}

// export
export default SearchBar
