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
            employeeInfo: { name, bio },
        } = this.props
        return (
            <div
                className='employee-block'
                onClick={e => this.handleBlockClick(e)}
                onMouseLeave={e => this.handleMouseLeave(e)}
            >
                {blockClicked ? (
                    <div className='employee-block-text -clicked'>{bio}</div>
                ) : (
                    <div className='employee-block-text'>{name}</div>
                )}
            </div>
        )
    }
}

export default EmployeeBlock
