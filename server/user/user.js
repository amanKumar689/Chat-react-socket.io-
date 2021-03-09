
let USER = []
let name
function add(user){

    USER.push(user)

}

function getUser(id)
{  
    name = ""
  
     USER.map((val,index)=>{

 
        if(val.id == id)
        { 
            console.log(val.id ,' -- ',id );
           name=val.name
       
                }

     })
return name
}
function remUser(id){

    // console.log("running");

 USER = USER.filter((value)=>{
     if(value.id == id)
     {  
         console.log('mathched');
         console.log(value.name);
         return false
     }
     else
     {  
         console.log("not found");
       return   true
     }
 })
// console.log('after filter out',USER)
}

module.exports = {add , getUser,remUser}