import React, { Component } from 'react'

import EmployeeBlock from '../EmployeeBlock/EmployeeBlock.js'

import './EmployeeGrid.scss'

class EmployeeGrid extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const employees = [
            {
                name: `Fallout GameHub`,
                bio: `A ground-up front end refactor from handlebars.js and vanilla JS to React with a PHP 7 / Laravel backend.`,
                link: `fallout.bethesda.net`,
                image_class: `fallout`,
            },
            {
                name: `ElderScrolls Gamehub`,
                bio: `Server side rendered Vue.js with PHP. I am the sole creator of the news article and 25th anniversary pages.`,
                link: `https://elderscrolls.bethesda.net`,
                image_class: `elderscrolls`,
            },
        ]
        const employeeBlocks = []

        employees.forEach((employee, index) => {
            employeeBlocks.push(
                <EmployeeBlock key={index} employeeInfo={employees[index]} />,
            )
        })

        return (
            <div className='employee-grid section'>
                <div className='employee-grid-container'>
                    <h1 className='header'>Current Applications</h1>
                    <div className='employee-grid-block-container'>
                        {employeeBlocks}
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeGrid
