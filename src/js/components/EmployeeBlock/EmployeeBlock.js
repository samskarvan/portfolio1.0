import React, { Component } from 'react'

import './EmployeeBlock.scss'

class EmployeeBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blockClicked: false,
        }
    }

    handleBlockClick(e) {
        this.setState({
            blockClicked: true,
        })
    }

    handleMouseLeave(e) {
        setTimeout(() => {
            this.setState({
                blockClicked: false,
            })
        }, 500)
    }

    render() {
        const { blockClicked } = this.state
        const {
            employeeInfo: { name, bio, link },
        } = this.props
        return (
            <div
                className='employee-block'
                onClick={e => this.handleBlockClick(e)}
                onMouseLeave={e => this.handleMouseLeave(e)}
            >
                {blockClicked ? (
                    <div className='employee-block-text -clicked'>
                        {bio}
                        <a
                            className='application-link'
                            href={link}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            View Live Site
                        </a>
                    </div>
                ) : (
                    <div className='employee-block-text'>{name}</div>
                )}
            </div>
        )
    }
}

export default EmployeeBlock
