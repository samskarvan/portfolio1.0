import React, { Component } from 'react'

import './HeroBanner.scss'

import Typer from '../typer.js'

class HeroBanner extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        const {
            heroBlurb: { header, subtitle },
        } = this.props
        return (
            <div className='hero-banner'>
                {header ? (
                    <div className='hero-banner-blurb'>
                        {header ? (
                            <h1 className='hero-banner-title'>
                                <Typer
                                    textToType={
                                        header ? header : `Samantha Skarvan`
                                    }
                                />
                            </h1>
                        ) : (
                            ''
                        )}
                        {subtitle ? (
                            <p className='hero-banner-text'>
                                <Typer textToType={subtitle} />
                            </p>
                        ) : (
                            ''
                        )}
                    </div>
                ) : (
                    ''
                )}
            </div>
        )
    }
}

export default HeroBanner
