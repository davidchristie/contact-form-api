const nodemailer = require('nodemailer')

if (!process.env.PASSWORD) {
  throw new Error('process.env.PASSWORD undefined')
}
if (!process.env.USERNAME) {
  throw new Error('process.env.USERNAME undefined')
}
if (!process.env.SERVICE) {
  throw new Error('process.env.SERVICE undefined')
}

const transporter = nodemailer.createTransport({
  auth: {
    pass: process.env.PASSWORD,
    user: process.env.USERNAME
  },
  service: process.env.SERVICE
})

module.exports = transporter
