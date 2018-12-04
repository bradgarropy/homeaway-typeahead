// packages
import axios from "axios"

const auth = {
    username: process.env.REACT_APP_GITHUB_USERNAME,
    password: process.env.REACT_APP_GITHUB_PASSWORD,
}

async function searchUsers(query) {
    const params = {q: query}
    const response = await axios.get("https://api.github.com/search/users", {
        params,
        auth,
    })

    const users = response.data.items
    return users
}

async function getUser(username) {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}`,
            {auth},
        )

        const user = response.data
        return user
    } catch (error) {
        return {}
    }
}

// exports
export {searchUsers, getUser}
