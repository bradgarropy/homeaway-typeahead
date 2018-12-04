import React from "react"

// styles
import "../scss/NotFound.scss"

// components
import GithubOctoface from "./GithubOctoface"

const NotFound = () => {
    return (
        <div className="not-found">
            <GithubOctoface />
            <p>Not found.</p>
        </div>
    )
}

NotFound.propTypes = {}
NotFound.defaultProps = {}

// export
export default NotFound
