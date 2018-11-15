import React from "react"
import {Component} from "react"
import {BrowserRouter as Router} from "react-router-dom"
import isEmpty from "lodash.isempty"

// components
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import PokemonCard from "./components/PokemonCard"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer"

// styles
import "./scss/App.scss"

// api
import {getPokemon} from "./api/pokemon"

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemon: {},
            submitted: false,
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    async onSubmit(event, search) {
        event.preventDefault()

        const pokemon = await getPokemon(search)
        this.setState({
            pokemon,
            submitted: true,
        })
    }

    render() {
        const {pokemon, submitted} = this.state

        return (
            <Router>
                <div className="app">
                    <Header />
                    <div className="content">
                        <SearchBar onSubmit={this.onSubmit} />
                        {!isEmpty(pokemon) && submitted && (
                            <PokemonCard pokemon={pokemon} />
                        )}
                        {isEmpty(pokemon) && submitted && <NotFound />}
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}

// export
export default App
