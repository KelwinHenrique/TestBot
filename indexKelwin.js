const http = require('http')
const express = require('express')
const path = require('path')

const router = express()
const server = http.createServer(router)

router.use(express.static(path.resolve(__dirname, 'client')))
var messages = []
var sockets = []


router.get('/webhook', function (req, res){
    res.send('ok')
})

