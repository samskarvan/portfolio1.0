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
                name: `Kerry Skarvan`,
                bio: `Nori grape silver beet broccoli kombu beet greens fava
                        bean potato quandong celery. Bunya nuts black-eyed pea
                        prairie turnip leek lentil turnip greens parsnip.`,
            },
            {
                name: `Toby Sudakoff`,
                bio: `Nori grape silver beet broccoli kombu beet greens fava
                        bean potato quandong celery. Bunya nuts black-eyed pea
                        prairie turnip leek lentil turnip greens parsnip.`,
            },
            ,
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
                    <h1 className='header'>Meet Our Team</h1>
                    <div className='employee-grid-block-container'>
                        {employeeBlocks}
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeGrid
