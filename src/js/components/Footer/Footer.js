import React, { Component, Fragment } from 'react'

import './Footer.scss'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: null,
        }
    }

    render() {
        const footerItems = []
        const array = [
            {
                content: `<li>samskarvan@gmail.com</li>
                        <li>
                            <p>linkedIN</p>
                            <p>github</p>
                        </li>`,
            },
        ]

        array.forEach((item, index) => {
            const { content } = item
            footerItems.push(
                <div className='footer-item' key={index}>
                    <div className='footer-item-social'>
                        <li class='fab fa-github' />
                        <li class='fab fa-linkedin-in' />
                    </div>
                    <a href='mailto:samskarvan@gmail.com?subject=saw your portfolio website'>
                        <div>samskarvan@gmail.com</div>
                    </a>
                </div>,
            )
        })

        return <div className='footer'>{footerItems}</div>
    }
}

export default Footer
