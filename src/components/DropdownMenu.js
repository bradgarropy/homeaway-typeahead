import React from "react"
import PropTypes from "prop-types"
import isEmpty from "lodash.isempty"

// styles
import "../scss/DropdownMenu.scss"

class DropdownMenu extends React.Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
        onSelection: PropTypes.func.isRequired,
    }

    state = {selected: -1}

    increment = () => {
        const {selected} = this.state
        const {items} = this.props

        selected === items.length - 1
            ? this.setState({selected: -1})
            : this.setState({selected: selected + 1})
    }

    decrement = () => {
        const {selected} = this.state
        const {items} = this.props

        selected === -1
            ? this.setState({selected: items.length - 1})
            : this.setState({selected: selected - 1})
    }

    onKeyUp = event => {
        if (event.key === "ArrowUp") this.decrement()
        if (event.key === "ArrowDown") this.increment()
    }

    componentDidMount = () => {
        window.addEventListener("keyup", this.onKeyUp)
    }

    componentWillUnmount = () => {
        window.removeEventListener("keyup", this.onKeyUp)
    }

    render = () => {
        const {selected} = this.state
        const {open, items, onSelection} = this.props

        if (!open) return null
        if (isEmpty(items)) return null

        return (
            <ul className="dropdown-menu">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={index === selected ? "hover" : ""}
                        onMouseDown={onSelection}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        )
    }
}

// export
export default DropdownMenu
