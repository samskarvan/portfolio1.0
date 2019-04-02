import React, { Fragment, Component } from 'react'
import ContentBlock from '../components/ContentBlock/ContentBlock.js'
import HeroBanner from '../components/HeroBanner/HeroBanner.js'

class Services extends Component {
    render() {
        return (
            <Fragment>
                <HeroBanner />
                <h1>Services</h1>
                <ContentBlock />
            </Fragment>
        )
    }
}

export default Services
