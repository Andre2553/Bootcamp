const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const videos = require("./data")

server.set("view engine", "html")

server.use(express.static('public'))
nunjucks.configure("views",{
express:server,
autoescape: false
})

server.get("/", function(req,res){
  const about = {
    title: "Rocketseat",
   tec:[
    {name:"JavaScript"},
    {name:"CSS"},
    {name:"HTML"},
    {name:"React"},
    {name:"ReactNative"}
   ],
    links: [
        {name:"GitHub", url:"https://github.com/Rocketseat"},
        {name:"Instagram", url:"https://www.instagram.com/rocketseat_oficial/"},
        {name:"Facebook", url:"https://www.facebook.com/rocketseat"},
       
    ]

  }
    return res.render("about.njk",{ about })
})

server.get("/portifolio", function(req,res){
    return res.render("portifolio.njk", { items :videos })
})

server.get("/courses/:id", function(req, res){
  const id = req.params.id
  const video = videos.find(function(video){
    if(video.id == id){
     return true
     }
  })
  if(!video){
     return res.send("Video not found")
   }
  return res.render("video.njk", { item:video })
})
server.listen(5000, function(){
console.log('run')

})