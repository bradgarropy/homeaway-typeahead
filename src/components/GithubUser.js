import React from "react"
import PropTypes from "prop-types"

// styles
import "../scss/GithubUser.scss"

const GithubUser = ({user}) => {
    return <div className="github-user">{user.login}</div>
}

GithubUser.propTypes = {
    user: PropTypes.object,
}

GithubUser.defaultProps = {}

// export
export default GithubUser
