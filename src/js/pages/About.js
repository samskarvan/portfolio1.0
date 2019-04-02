import React, { Fragment, Component } from 'react'

import ContentBlock from '../components/ContentBlock/ContentBlock.js'
import HeroBanner from '../components/HeroBanner/HeroBanner.js'
import EmployeeGrid from '../components/EmployeeGrid/EmployeeGrid.js'

class About extends Component {
    render() {
        return (
            <Fragment>
                <HeroBanner />
                <h1>About</h1>
                <ContentBlock image={false} />
                <EmployeeGrid />
                <ContentBlock />
            </Fragment>
        )
    }
}

export default About
