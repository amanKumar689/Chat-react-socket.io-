import React , { useState,useEffect } from 'react'
import {BrowserRouter as Router , Link, useLocation} from 'react-router-dom'

let query 
const Home = () => {
    
    query = new URLSearchParams(useLocation().search)

const [name,setName] = useState('')
const [room,setRoom] = useState('')


useEffect(()=>{ 
 
    setName('')
    setRoom('') 

   
},[])

const setData  = (e)=>{

     const data = e.target.value;
   if(e.target.id == 'name')
   {
       setName(data)
       
    } 
    else
    {
    setRoom(data)

   }

}
   const check = () =>{
       if(room!= "" && name!= "")
       {
           window.location.href = `/room?room=${room}&name=${name}`
           
           
        }
        else
        {
             alert('First Fill up')
            

        }
    }
    return (
        <div className="container">
     <div className="join">
 <form>

    <input className="Name" id="name" value={name} placeholder="Name" onChange={setData}  />
    <input className="room" placeholder="room" value={room} onChange={setData}  / >

    <input className="submit" type="button" value="join" onClick={check}/>
   {/* <Link to={`/room?room=${room}&name=${name}`} > */}
   {/* </Link>  */}

 </form>
     </div>
        </div>
    )

    } 
export default Home


