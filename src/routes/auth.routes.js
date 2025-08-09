const express = require('express')
const {getRegisterControlelr} = require('../controllers/auth.controller')
const router = express.Router()
router.get('/register',getRegisterControlelr)
module.exports = router