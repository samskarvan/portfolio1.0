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
            'Flow',
            'Jest',
            'Contentful',
            'Webpack',
            'Shopify',
            'wireframing / prototyping',
        ]

        const tech = technologies.map((tech, index) => (
            <li key={`tech-${index}`}>{tech}</li>
        ))
        tools = tools.map((tool, index) => (
            <li key={`tools-${index}`}>{tool}</li>
        ))

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
                            effectivley. My experience is further detailed in my{' '}
                            <a
                                className='content-block-text-download'
                                href='dev.samskarvan.com/resume'
                                download='sam_skarvan_resume'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                resume
                            </a>
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
