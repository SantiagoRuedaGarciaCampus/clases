const express = require('express')

const controller = requie('../controllers/Arriendos.controllers.js')

const router = express.Router()

const path = 'arriendos'

router.get(
    `${path}/`,
    controller.getData
)

module.exports = router