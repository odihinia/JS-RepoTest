const data = require('./users1.json');
const users = data.users


for (let i= 0; i < users.length; i++) {
    if (!isNaN(users[i].phoneNumber)) {
        console.log("true")
        
    }
    else{
        console.log("Phone Nr of User with Id: " + users[i].userId+" is Invalid.")
    }
    
}