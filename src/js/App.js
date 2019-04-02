import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Home from './pages/Home.js'
import Services from './pages/Services.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Concept from './pages/Concept.js'

import '../scss/App.scss'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <div className='content'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/services' component={Services} />
                        <Route exact path='/about-us' component={About} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/concept' component={Concept} />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App
