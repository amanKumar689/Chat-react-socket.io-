import React from 'react'
import '../src/app.css'


// {message:msg,IsUser:false}

const ChatBox = (props) => {

    // console.log("props:",props.message);
    props = props.message
    let element
   
  element =   props.map((obj)=>{
  
     
     
      
        if(obj.IsUser == true)
        {
                 return <div className="right">  <span><span> {obj.message} </span></span><br/> </div>
                }
                else if(obj.IsUser == false)
                {
                    return <div className="Left">  <span><span> {obj.message} </span></span><br/> </div>
            
        }   
        else if(obj.IsUser == "joined" ) {  
            return <p className="joined"> {obj.message}</p>

        }
        else if(obj.IsUser == "left" ) {  
            return <p className="left"> {obj.message}</p>

        }

    })
     
    return (
        <div>
             { element  }
        </div>
    )
}

export default ChatBox
