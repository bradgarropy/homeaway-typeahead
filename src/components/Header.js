import React from "react"

// components
import BuiltBy from "./BuiltBy"
import GithubLogo from "./GithubLogo"

// styles
import "../scss/Header.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <GithubLogo />
                <p>Typeahead</p>
            </div>
            <BuiltBy />
        </header>
    )
}

Header.propTypes = {}
Header.defaultProps = {}

// export
export default Header
