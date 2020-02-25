const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const routes = require('./routes')

server.set("view engine", "html")
server.use(express.urlencoded({extended:true}))
server.use(express.static('public'))
server.use(routes)
nunjucks.configure("views",{
  express:server,
  autoescape: false
})

server.listen(5000, function(){
console.log('run')

})  