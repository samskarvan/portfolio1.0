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
                content: `<li>samskarvan@gmail.com</li>`,
            },
            {
                content: `<li>github</li>
                          <li>linkedin</li>`,
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
