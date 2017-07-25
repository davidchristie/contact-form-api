const express = require('express')

const transporter = require('../transporter')

if (!process.env.NOTIFIED_EMAIL) {
  throw new Error('process.env.NOTIFIED_EMAIL undefined')
}
if (!process.env.SUBJECT) {
  throw new Error('process.env.SUBJECT undefined')
}

const router = new express.Router()

router.post('/', (request, response) => {
  const message = {
    subject: process.env.SUBJECT,
    text: JSON.stringify(request.body),
    to: process.env.NOTIFIED_EMAIL
  }
  transporter.sendMail(message, (error, info) => {
    if (error) return console.log(error)
    console.log('Message %s sent: %s', info.messageId, info.response)
  })
  response.send('Message sent')
})

module.exports = router
