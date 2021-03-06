import React, { Fragment, Component } from 'react'
import ContentBlock from '../components/ContentBlock/ContentBlock.js'
import SkillsBlock from '../components/SkillsBlock/SkillsBlock.js'
import HeroBanner from '../components/HeroBanner/HeroBanner.js'
import EmployeeGrid from '../components/EmployeeGrid/EmployeeGrid.js'

class Home extends Component {
    constructor(props) {
        super(props)
        this.bio = {
            title: `Hi, I'm Sam`,
            imageHoverContent: `collaborative team player </br> strong written and verbal communicator </br> efficent time manager </br> creative thinker`,
            description: `I'm a software engineer with a focus in web development and an appreciation for creative solutions. My fullstack experience includes PHP, Node.js and a serious affinity for front end JavaScript frameworks like React and Vue.js. I'm a lifelong learner who seeks both personal and professional growth by stepping outside my comfort zone and overcoming challenges.`,
            button: {
                text: `Find me on LinkedIn`,
                link: `https://www.linkedin.com/in/samantha-skarvan-713773157/`,
            },
        }
    }

    render() {
        return (
            <Fragment>
                <HeroBanner
                    heroBlurb={{
                        header: 'Samantha Skarvan',
                        subtitle: 'software engineer',
                    }}
                />
                <ContentBlock content={this.bio} image={false} />
                <EmployeeGrid />
                <SkillsBlock />
            </Fragment>
        )
    }
}

export default Home
