import React, { Component, Fragment } from 'react'

import { NavLink } from 'react-router-dom'

import './HeaderMobile.scss'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayNav: false,
        }
    }

    toggleNav() {
        const { displayNav } = this.state

        this.setState({
            displayNav: !displayNav,
        })
    }

    closeNav() {
        this.setState({
            displayNav: false,
        })
    }

    render() {
        const { displayNav } = this.state

        return (
            <Fragment>
                <div
                    className={`mobile-header-nav ${
                        displayNav ? '-opened' : ''
                    }`}
                >
                    <div className='mobile-header-nav-logo'>LOGO</div>
                    <button
                        type='button'
                        className={`icon headermobile-icon ${
                            displayNav ? 'opened' : ''
                        }`}
                        onClick={(): Function => this.toggleNav()}
                    >
                        <span />
                    </button>
                    <ul className='mobile-header-nav-list'>
                        <li
                            className='mobile-header-nav-list-item'
                            onClick={() => this.closeNav()}
                        >
                            <NavLink to='/'>Logo</NavLink>
                        </li>

                        <li
                            className='mobile-header-nav-list-item'
                            onClick={() => this.closeNav()}
                        >
                            <NavLink to='/services'>services</NavLink>
                        </li>

                        <li
                            className='mobile-header-nav-list-item'
                            onClick={() => this.closeNav()}
                        >
                            <NavLink to='/about-us'>who we are</NavLink>
                        </li>

                        <li
                            className='mobile-header-nav-list-item'
                            onClick={() => this.closeNav()}
                        >
                            <NavLink to='/contact'>contact</NavLink>
                        </li>

                        <li
                            className='mobile-header-nav-list-item'
                            onClick={() => this.closeNav()}
                        >
                            <NavLink to='/concept'>concept</NavLink>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Header
