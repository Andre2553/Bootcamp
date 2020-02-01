const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const videos = require("./data")

server.set("view engine", "html")

server.use(express.static('public'))
nunjucks.configure("views",{
express:server
})

server.get("/", function(req,res){
    return res.render("about.njk")
})

server.get("/portifolio", function(req,res){
    return res.render("portifolio.njk", { items :videos })
})
server.listen(5000, function(){
console.log('run')

})