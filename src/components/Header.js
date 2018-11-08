import React from "react"

// components
import BuiltBy from "./BuiltBy"

// styles
import "../scss/Header.scss"

const Header = () => {
    return (
        <header className="header">
            <p>Typeahead</p>
            <BuiltBy />
        </header>
    )
}

Header.propTypes = {}
Header.defaultProps = {}

// export
export default Header
