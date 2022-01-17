// ToDo
/*
Task 1
Import array with users (from user1.json file) and write a function that will check if the phone number for every single user contains only digits
Result:
- if the phone number contains only digits then log true in the console
- if the phone number does not contain only digits then log which user's phone number is not correct e.g. "Phone number of user with ID 2 is not correct"

Task 2
Import array with users (from user1.json file) and users (from user2.js file) and compare them
Result:
- if the first email address of users1 is the same as the first email address of users2 (users1.users[1].emailAddress === users2.users[1].emailAddress) then do not log anything
- if the first email address of users1 is not the same as the first email address of users2 then log in the console e.g. "Email addresses of user with ID 1 are not the same. First email is: racks.jacson@test.tt; but second email is: racks.jecson@test.tt".

Compare email addresses, first names, last names and phone numbers.
*/
//TASK 1
console.log("------------TASK 1-------------")
const data1 = require('./users1.json');
const users1 = data1.users


for (let i= 0; i < users1.length; i++) {
    if (!isNaN(users1[i].phoneNumber)) {
        console.log("true")
        
    }
    else{
        console.log("Phone Nr of User with Id: " + users1[i].userId+" is Invalid.")
    }
    
}
console.log("------------TASK 2-------------")
// TASK 2

const data2 = require('./users2.js');
const users2 = data2.users
for (let j = 0; j < users1.length; j++) {
    if (users1[j].firstName !== users2[j].firstName) {
        console.log('Names of user with Id:' + users1[j].userId +" are not the same")
        console.log("First name is: " + "\'"+users1[j].firstName +'\''+", but second name is: " +"\'"+ users2[j].firstName+"\'")
        console.log("--------")
    }
    if (users1[j].lastName !== users2[j].lastName) {
        console.log('Surnames of user with Id:' + users1[j].userId +" are not the same")
        console.log("First surname is: " + "\'"+users1[j].lastName +'\''+", but second surname is: " +"\'"+ users2[j].lastName+"\'")
        console.log("--------")
    }
    if (users1[j].phoneNumber !== users2[j].phoneNumber) {
        console.log('Phone numbers of user with Id:' + users1[j].userId +" are not the same")
        console.log("First phone is: " + "\'"+users1[j].firstName +'\''+", but second phone is: " +"\'"+ users2[j].phoneNumber+"\'")
        console.log("--------")
    }
    if (users1[j].emailAddress !== users2[j].emailAddress) {
        console.log('Emails of user with Id:' + users1[j].userId +" are not the same")
        console.log("First email is: " + "\'"+users1[j].emailAddress +'\''+", but second email is: " +"\'"+ users2[j].emailAddress+"\'")
        console.log("--------")
    }

    
}