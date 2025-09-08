// for of loop
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Jafar"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
    
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India") //duplicate not allowed in map
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }// for of loop se access nahi kar sakte hai