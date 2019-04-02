import React, { Fragment, Component } from 'react'
import ContentBlock from '../components/ContentBlock/ContentBlock.js'
import HeroBanner from '../components/HeroBanner/HeroBanner.js'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <HeroBanner />
                <ContentBlock />
            </Fragment>
        )
    }
}

export default Home
