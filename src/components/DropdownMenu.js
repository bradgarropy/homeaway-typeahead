import React from "react"
import PropTypes from "prop-types"

// styles
import "../scss/DropdownMenu.scss"

class DropdownMenu extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
        onClick: PropTypes.func.isRequired,
    }

    render = () => {
        const {items, onClick} = this.props

        return (
            <ul className="dropdown-menu">
                {items.map((item, index) => (
                    <li key={index} onClick={onClick}>
                        {item}
                    </li>
                ))}
            </ul>
        )
    }
}

// export
export default DropdownMenu
