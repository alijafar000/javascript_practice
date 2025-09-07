//var c = 300
let a = 200
if (true) {
    let a = 300
    const b = 400
    console.log("Inner = ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "jafar"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    // two()
}
// one()


if (true) {
    const username = "jafar"
    if (username === "jafar") {
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username); // ye run nahi karega kyuki ye scope ke bahar hai if ke

function one(num){
    return num + 1
}

console.log(one(4))

const addTwo = function(num){
    return num +2
}
console.log(addTwo(4))

//browser ke andar jo global object hai wo windows object hai   



