import React, { Component, Fragment } from 'react'

import { NavLink, Link } from 'react-router-dom'

import HeaderMobile from '../HeaderMobile/HeaderMobile.js'

import './Header.scss'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <div className='header-nav'>
                    <div className='header-nav-logo'>
                        <NavLink to='/' activeClassName='selected'>
                            <div className='header-nav-logo-asset' />
                        </NavLink>
                    </div>
                    <ul className='header-nav-list'>
                        <li className='header-nav-list-item'>
                            <NavLink to='/contact' activeClassName='selected'>
                                contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <HeaderMobile />
            </Fragment>
        )
    }
}

export default Header
