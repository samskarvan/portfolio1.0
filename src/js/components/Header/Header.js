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
                            Logo
                        </NavLink>
                    </div>
                    <ul className='header-nav-list'>
                        <li className='header-nav-list-item'>
                            <NavLink to='/services' activeClassName='selected'>
                                services
                            </NavLink>
                        </li>
                        <li className='header-nav-list-item'>
                            <NavLink to='/about-us' activeClassName='selected'>
                                who we are
                            </NavLink>
                        </li>
                        <li className='header-nav-list-item'>
                            <NavLink to='/contact' activeClassName='selected'>
                                contact
                            </NavLink>
                        </li>
                        <li className='header-nav-list-item'>
                            <NavLink to='/concept' activeClassName='selected'>
                                concept
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
