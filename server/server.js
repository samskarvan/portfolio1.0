// Require modules
const express = require('express')
const nodemailer = require('nodemailer')
const { USERNAME, PASSWORD } = require('./mail_config.js')

const app = express()
const PORT = 8000

// Consume middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// allow cross-origin to enable POST req
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: USERNAME,
        pass: PASSWORD,
    },
})

app.get('/', (req, res) => {
    res.send('hey babes')
})

app.get('/resume', (req, res) => {
    res.download(
        '/Users/samskarvan/Desktop/personal/portfolio1.0/src/assets/samantha_skarvan_resume.pdf',
        'sam_skarvan_resume.pdf',
    )
})

app.post('/email', (req, res) => {
    const { name, email, subject, message } = req.body

    const mailOptions = {
        from: email,
        to: 'samskarvan@gmail.com',
        subject: subject,
        text: `New message from ${name} at ${email}: ${message}`,
        replyTo: email,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.status(500).send({
                data: 'fail!',
            })
        } else {
            console.log('Email sent successfully ' + info.response)
            res.status(500).send({
                data: 'success!',
            })
        }
    })
    res.end()
})

app.listen(PORT, function(req, res) {
    console.log('Dime ', PORT)
})
