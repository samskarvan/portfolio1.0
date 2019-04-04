import React, { Fragment, Component } from 'react'
// import ContentBlock from '../components/ContentBlock/ContentBlock.js'
import HeroBanner from '../components/HeroBanner/HeroBanner.js'
import ContactForm from '../components/ContactForm/ContactForm.js'

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <HeroBanner heroBlurb={{ header: 'Get in touch' }} />
                <ContactForm />
            </Fragment>
        )
    }
}

export default Contact
