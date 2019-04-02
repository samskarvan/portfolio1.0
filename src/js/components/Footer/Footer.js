import React, { Component, Fragment } from 'react'

import './Footer.scss'

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const footerItems = []
        const array = [
            {
                content: `<li>Desert Concierge Collective</li>
                          <li>Serving the Coachella Valley</li>`,
            },
            {
                content: `<li>desertconciergecollective@gmail.com</li>
                          <li>949.412.9200</li>`,
            },
            {
                content: `<li>instagram</li>
                          <li>facebook</li>`,
            },
        ]

        array.forEach((item, index) => {
            const { content } = item
            footerItems.push(
                <div className='footer-item' key={index}>
                    <ul
                        className='footer-list'
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>,
            )
        })

        return <div className='footer'>{footerItems}</div>
    }
}

export default Footer
