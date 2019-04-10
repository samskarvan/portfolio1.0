import React, { Component } from 'react'
import axios from 'axios'

import './ContactForm.scss'

class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.nameInput = React.createRef()
        this.emailInput = React.createRef()
        this.subjectInput = React.createRef()
        this.messageInput = React.createRef()

        this.state = {
            formSubmitted: {
                status: false,
                message: null,
            },
        }
    }

    submitForm(e) {
        e.preventDefault()
        const formContent = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            subject: this.subjectInput.current.value,
            message: this.messageInput.current.value,
        }

        axios
            .post('/email', {
                ...formContent,
            })
            .then(res => {
                if (res.status === 200) {
                    console.log('Message Sent.')
                } else if (res.status === 500) {
                    console.log('Message failed to send.')
                }

                this.setState({
                    formSubmitted: {
                        status: true,
                        message:
                            res.status === 200 ? (
                                'Your message has been sent. Thank you!'
                            ) : (
                                <div>
                                    An error occurred while sending your
                                    message.
                                    <p
                                        className='form-refresh-btn'
                                        onClick={e => this.refreshForm(e)}
                                    >
                                        Please try again
                                    </p>
                                </div>
                            ),
                    },
                })
            })
    }

    refreshForm(e) {
        this.setState({
            formSubmitted: {
                status: false,
                message: null,
            },
        })
    }

    render() {
        const {
            formSubmitted: { status, message },
        } = this.state

        return (
            <div className='contact-form'>
                <div className='contact-form-container'>
                    <div className='contact-form-image' />

                    {status ? (
                        <div className='contact-form-form -submitted'>
                            {message}
                        </div>
                    ) : (
                        <div className='contact-form-form'>
                            <div>
                                <h1 className='contact-form-form-header'>
                                    Let's Connect!
                                </h1>
                                <p>
                                    Are you looking for someone to help build
                                    your passion project, take your online
                                    presence to the next level or join your team
                                    of developers? Please drop me a line; I'd
                                    love to hear from you.
                                </p>
                            </div>
                            <form>
                                <div className='contact-form-form-item'>
                                    <label className='contact-label'>
                                        Your Name
                                    </label>
                                    <input
                                        placeholder='First and Last Name'
                                        name='name'
                                        ref={this.nameInput}
                                        type='text'
                                    />
                                </div>

                                <div className='contact-form-form-item'>
                                    <label className='contact-label'>
                                        Your Email
                                    </label>
                                    <input
                                        placeholder='Email Address'
                                        name='email'
                                        ref={this.emailInput}
                                        type='text'
                                    />
                                </div>

                                <div className='contact-form-form-item'>
                                    <label className='contact-label'>
                                        Subject
                                    </label>
                                    <input
                                        placeholder='Subject'
                                        name='subject'
                                        ref={this.subjectInput}
                                        type='text'
                                    />
                                </div>

                                <div className='contact-form-form-item'>
                                    <label className='contact-label'>
                                        Message
                                    </label>
                                    <textarea
                                        className='contact-label'
                                        placeholder='Message'
                                        name='message'
                                        ref={this.messageInput}
                                        type='text'
                                    />
                                </div>
                                <button
                                    className='contact-form-button'
                                    onClick={e => this.submitForm(e)}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default ContactForm
