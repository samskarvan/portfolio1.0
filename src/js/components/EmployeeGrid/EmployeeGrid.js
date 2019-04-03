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
                bio: `Nori grape silver beet broccoli kombu beet greens fava
                        bean potato quandong celery. Bunya nuts black-eyed pea
                        prairie turnip leek lentil turnip greens parsnip.`,
                link: `fallout.bethesda.net`,
            },
            {
                name: `ElderScrolls Gamehub`,
                bio: `Nori grape silver beet broccoli kombu beet greens fava
                        bean potato quandong celery. Bunya nuts black-eyed pea
                        prairie turnip leek lentil turnip greens parsnip.`,
                link: `https://elderscrolls.bethesda.net`,
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
                    <h1 className='header'>Featured Applications</h1>
                    <div className='employee-grid-block-container'>
                        {employeeBlocks}
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeGrid
