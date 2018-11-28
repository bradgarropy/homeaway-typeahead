import React from "react"

// components
import GithubLogo from "./GithubLogo"

// styles
import "../scss/Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <GithubLogo />
        </div>
    )
}

Footer.propTypes = {}
Footer.defaultProps = {}

// export
export default Footer
