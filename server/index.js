const  {add , getUser,remUser} =  require('./user/user.js')
const http = require('http')
const express =require('express')
const app = express();
const httpServer = http.createServer(app)
let room 
// server-side
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});


io.on('connection',(socket)=>{

  socket.on('join',({Room,Name})=>{

     room = Room
    add({id:socket.id,name:Name}) 
    socket.join(Room)
    socket.to(Room).emit('someone',Name)

    socket.on('message',(msg)=>{
      
      socket.to(Room).emit('message',msg)
    }) 

    socket.on('left',(name)=>{
  socket.to(Room).emit('left',name)
    })
   

  })
  socket.on('disconnect',()=>{
     
     console.log('disconnect:',getUser(socket.id));
     if(getUser(socket.id)!== "")
     {
       socket.to(room).emit('left',getUser(socket.id))

     }
    remUser(socket.id)
 
  })

})
httpServer.listen(5000,()=>{
  // console.log('Listen carefully');
})
