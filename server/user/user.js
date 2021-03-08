
let USER = []
let name
function add(user){

    USER.push(user)

}

function getUser(id)
{ 
  
     USER.map((val,index)=>{

 
        if(val.id == id)
        { 
            console.log("Found ");
           name=val.name
       
                }

     })
return name
}

module.exports = {add , getUser}