function SayMyName(){
    // console.log("J")
    // console.log("A")
    // console.log("F")
    // console.log("A")
    // console.log("R")
}
SayMyName()

function addTwoNumber(number1, number2){ //number1 and number2 parameters hai
    // console.log(number1+number2);

    let result = number1 + number2
    return result //return keyword ke bad koi bhi line ka code excute nahi hota hai
    
}
const result = addTwoNumber(100, 200)
console.log("Result:", result);

function loginUserMessage(username = "Default User"){
    if(username === undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Jafar"));



function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100, 200, 300, 400));

const user = {
    username: "jafar",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
console.log(handleObject(user))

handleObject({
    username: "Nasir",
    price: 299
})

const myNewArray = [200, 400, 600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([1000, 2000, 3000, 4000]));

