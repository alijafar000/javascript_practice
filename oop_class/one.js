const user = {
    username: "Jafar Ali",
    loginCount: 8,
    signedIn: true,

    getuserDetails: function(){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        // console.log(this);  
        
    }
}

// console.log(user);
// console.log(user.username);
// console.log(user.getuserDetails());
// console.log(this);

function users(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    // return this //new keyword nahi use karenge to this return karna hoga
}

const userOne = new users("Chandan", 12, true)
const userTwo = new users("Ravi", 10, true) //new keyword ek naya instance de deta hai
console.log(userOne);
console.log(userTwo);

//jab aap new keyword use karte hai to ek empty object create hota hai jisko instance bola jata hai

//new keyword se constructer function call hota hai
  
