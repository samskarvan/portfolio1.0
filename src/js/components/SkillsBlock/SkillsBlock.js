import React, { Component } from 'react'

import './SkillsBlock.scss'

class SkillsBlock extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            image = false,
            content: {
                title,
                imageHoverContent,
                description,
                button: { text, link } = {},
            } = {},
        } = this.props

        const technologies = [
            'ES6 / TypeScript',
            'PHP7 / Laravel',
            'Node.js',
            'React',
            'Vue.js',
            'jQuery',
            'handlebars.js',
            'postgreSQL',
            'mySQL',
            'SQL',
            'AXIOS / AJAX',
            'HTML5',
            'CSS / SCSS',
            'Bootstrap',
        ]

        let tools = [
            'agile methodologies, especially kanban',
            'git',
            'jira',
            'hansoft',
            'Ubuntu',
            'responsive design',
            'visual studio',
            'AWS',
            'Contentful',
            'Webpack',
            'wireframing / prototyping',
        ]

        const tech = technologies.map(tech => <li>{tech}</li>)
        tools = tools.map(tool => <li>{tool}</li>)

        console.log('='.repeat(10), 'tech', '='.repeat(10), '\n', tech)

        return (
            <div className='content-block section'>
                <div className='content-block-container'>
                    <div className='content-block-text'>
                        <h1 className='content-block-text-header'>
                            {title ? title : `Tools and Technologies`}
                        </h1>
                        <p>
                            I'm firm believer in finding the best tool for the
                            job. Here's a sample of some tech I'm passionate
                            about, and the tools I employ to use them
                            effectivley.
                        </p>
                        <div className='skills-container'>
                            <div className='tech-container'>
                                <ul className='tech'>{tech}</ul>
                            </div>
                            <div className='tools-container'>
                                <ul className='tools'>{tools}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillsBlock
