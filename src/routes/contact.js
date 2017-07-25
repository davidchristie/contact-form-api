const express = require('express')

const router = new express.Router()

router.post('/', (request, response) => {
  console.log(request)
  response.status(200).send()
})

module.exports = router
