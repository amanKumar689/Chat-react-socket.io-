import React, { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import ChatBox from './ChatBox'
import './app.css'


const io = require("socket.io-client");
const END = 'localhost:5000'
const socket = io(END, {
    withCredentials: true,
            });
            
            
  function useQuery() {
      return new URLSearchParams(useLocation().search);
    }
   
       
    var elem
 
  const Room = ({}) => {
    let query = useQuery();
    const room = query.get('room')
    const name = query.get('name')
    const [message,setMessage] = useState([{message:"",IsUser:null}])
  
    socket.on('someone',(name)=>{
         
        // console.log( name+' has Joined');   
        setMessage([...message ,{message:`${name} has joined`,IsUser:"joined"} ])
    })  
     socket.on('left',(name)=>{
        // console.log('lefting');
     setMessage([...message,{message:`${name} has left`,IsUser:"left"}])
        
    })
    
    useEffect(() => {                

        elem = document.getElementById('data');
        socket.emit('join',{Room:room,Name:name})    
        
        return  function cleaup() 
        {  
             socket.emit('left',name) 
        }
        
        
    },[])       
  
    function  Send(e){
         // console.log("MY:",message);
         if(e.target.value=="")
         {
             return null
         }
        socket.emit('message',e.target.value)
        GetMessage(e.target.value,true)

        setTimeout(()=>{ 
         
    
            elem.scrollTop = ( elem.scrollTop + 1000 )
    
        },100)

        e.target.value = ""
       
    }
  
    socket.once('message',(msg)=>{
      
        console.log("Getting Message:");
        GetMessage(msg , false)
        elem.scrollTop = ( elem.scrollTop + 1000 )
    
    })


    const  GetMessage = (msg,status) => {
        setMessage([...message,{message:msg,IsUser:status}])
         }
        
    
       
          
           
    return (
        <div className="chatRoom">
           <header> Room : {query.get('room')}  </header>  
             <div className="chatbox" id="data"> 
             <ChatBox message={message}/>
            </div>
            <footer> 
            <input  type="text" className="form-control" placeholder="Message Typing..." onBlur={Send}/>
            <input type="submit" value="Send" id="send"/>
            </footer>
        </div>
    )
    }

export default Room
