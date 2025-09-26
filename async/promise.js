//Do an async task
//DB calls, cryptography, network calls

//create promise
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async task is complete");
//         resolve() //isse reseolve aur .then() ko connect ke liye hota hai
        
//     }, 1000);
// }) 
// //resolve ko consume karne ke liye .then() ka use kiye hai
// promiseOne.then(function(){
//     console.log("Promise Consumed");
    
// })

// //withot creating varible
// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async task 2 complete");
//         resolve()
        
//     }, 2000);
// }).then(function(){
//     console.log("Async 2 resolved");
    
// })

// //three promise create
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({Username: "Jafar", Email: "jafar123@gmail.com"})
//     }, 2000);
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })


//promise four create

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = true
//         if (error) {
//             resolve({username: "Yuvraj", password: "1234"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 2000);
// })
// promiseFour.then((user) =>{
//     console.log(user);
//     return user.username
    
// }).then((username) =>{
//     // console.log(user.username);
//     console.log(username);
    
    
// }).catch(function(error){
//     console.log(error);
    
// }).finally(() =>{
//     console.log("The promise is either resolved or rejected");// ye resolve ho ya reject kabhi bhi execute hoga
    
// })

//create promise five
const promiseFive = new Promise(function(resolve, reject){
     setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: "ravi", password: "00001" })
        }else{
            reject('ERROR: JS went wrong')
        }
     }, 2000);

})
// handle/consume by async
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()

//handle data throw async
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E:", error);
        
//     }
// }
// getAllUsers()

// upar wala code ko .then() aur .catch() ka use karke execute

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
    
})
.catch((error) => console.log(error)
)

