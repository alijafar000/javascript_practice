//objcet do tariko se banta hai 1. literal 2. constructer

//singleton- jab ham object ko literal ki tarah declare to singleton nhi banta hai aur constructer ki tarah declare karte hai to banta hai.

//literal objcet

//Symbol datatypes
const mySym = Symbol("Key1")

const jsUser = {
    name: "Jafar",
    "fullname": "Yuvraj Singh",
    [mySym]: "mykey1",
    age: 19,
    location: "Jaipur",
    email: "jafar123@gmail.com",
    isLoggedin: true,
    lastLoggedDays: ["Monday", "Saturday"]
}
// console.log(jsUser);

// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser.fullname);
// console.log(jsUser[mySym]);// dono tarika se access kar sakte hai 


jsUser.name = "Nasir Ali"
// Object.freeze(jsUser)// ye object ko freeze kar deta hai taki koi object me change nahi kar paye

// use function in objects

jsUser.greeting = function(){
    console.log("Hello JS user");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

