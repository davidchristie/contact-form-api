const express = require('express')

const contact = require('./contact')

const router = new express.Router()
router.use('/contact', contact)

module.exports = router
