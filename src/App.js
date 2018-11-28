import React from "react"
import {Component} from "react"
import {BrowserRouter as Router} from "react-router-dom"
import isEmpty from "lodash.isempty"

// components
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import GithubUser from "./components/GithubUser"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer"

// styles
import "./scss/App.scss"

// api
import {getUser} from "./api/github"

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            submitted: false,
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    async onSubmit(event, search) {
        event.preventDefault()

        const user = await getUser(search)
        this.setState({
            user,
            submitted: true,
        })
    }

    render() {
        const {user, submitted} = this.state

        return (
            <Router>
                <div className="app">
                    <Header />
                    <div className="content">
                        <SearchBar onSubmit={this.onSubmit} />
                        {!isEmpty(user) && submitted && (
                            <GithubUser user={user} />
                        )}
                        {isEmpty(user) && submitted && <NotFound />}
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}

// export
export default App
