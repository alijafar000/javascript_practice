function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) //.call se upar wale function ko call kiye hai aur yaha pe this. nahi lagega upar wale function ka this use huaa hai
   
    this.email = email
    this.password = password
}

const chai = new createUser("jafar", "jafar@fb.com", "123")
console.log(chai);