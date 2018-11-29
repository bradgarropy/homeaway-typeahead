import PropTypes from "prop-types"
import React from "react"

// styles
import "../scss/GithubUser.scss"

// icons
import Octicon, {
    Gist,
    Link,
    Location,
    Mail,
    Organization,
    Repo,
} from "@githubprimer/octicons-react"

const GithubUser = ({user}) => {
    const {
        avatar_url: avatar,
        name,
        login: username,
        bio: description,
        company,
        location,
        email,
        blog,
        public_repos: repos,
        public_gists: gists,
    } = user

    return (
        <div className="github-user">
            <img src={avatar} alt={`${name}'s avatar`} />

            <div className="names">
                <p id="name">{name}</p>
                <p id="username">{username}</p>
                <p id="description">{description}</p>
            </div>

            <div className="icon-table">
                <Octicon icon={Organization} className="icon" />
                <span>{company}</span>

                <Octicon icon={Location} className="icon" />
                <span>{location}</span>

                <Octicon icon={Mail} className="icon" />
                <a href={`mailto:${email}`}>{email}</a>

                <Octicon icon={Link} className="icon" />
                <a href={blog}>{blog}</a>

                <Octicon icon={Repo} className="icon" />
                <span>{repos}</span>

                <Octicon icon={Gist} className="icon" />
                <span>{gists}</span>
            </div>
        </div>
    )
}

GithubUser.propTypes = {
    user: PropTypes.object,
}

// export
export default GithubUser
