const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  router.use(express.static(path.resolve(__dirname, 'client')))
  var messages = []
  var sockets = []
  
  
  router.get('/webhook', function (req, res){
      res.send('ok')
  })
