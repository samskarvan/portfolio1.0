import React, { Component, Fragment } from 'react'

class Typer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: null,
        }
    }

    typeWriter = (text, i) => {
        let { textToType, speed = 100 } = this.props
        if (i < textToType.length) {
            text += textToType.charAt(i)
            this.setState({
                text: text,
            })

            setTimeout(() => this.typeWriter(text, (i += 1)), speed)
        }
    }

    componentDidMount() {
        this.typeWriter('', 0)
    }

    render() {
        let { text } = this.state
        return <Fragment>{text}</Fragment>
    }
}

export default Typer
