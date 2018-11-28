// packages
import axios from "axios"

async function searchUsers(query) {
    const params = {q: query}
    const response = await axios.get("https://api.github.com/search/users", {
        params,
    })

    const users = response.data.items
    console.log(users)
    return users
}

async function getUser(username) {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    const user = response.data
    return user
}

// exports
export {searchUsers, getUser}
