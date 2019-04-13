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
        const array = [1]

        array.forEach((item, index) => {
            footerItems.push(
                <Fragment key={index}>
                    <div className='footer-item-social'>
                        <a
                            href='https://github.com/sskarvan-verys'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <span className='fab fa-github' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/samantha-skarvan-713773157/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <span className='fab fa-linkedin-in' />
                        </a>

                        <a
                            href='https://github.com/samskarvan'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <span className='fab fa-github' />
                        </a>
                    </div>
                    <a href='mailto:samskarvan@gmail.com?subject=saw your portfolio website'>
                        <div>samskarvan@gmail.com</div>
                    </a>
                </Fragment>,
            )
        })

        return <div className='footer'>{footerItems}</div>
    }
}

export default Footer
