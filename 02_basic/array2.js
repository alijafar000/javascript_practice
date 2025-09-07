const marbelHeros = ["Jafar", "Yuvraj", "Ravi"];

const dc_heros = ["Spiderman", "Batman", "Thor"];

// marbelHeros.push(dc_heros);
// console.log(marbelHeros); //array ke andar array aayega output me

const newHero = marbelHeros.concat(dc_heros);
// console.log(newHero) //dono arrays ko merge kar deta hai ekhime.


//spread operator, same as concat

const all_new_heros = [...marbelHeros, ...dc_heros]

console.log(all_new_heros); //ye bhi do arrays ko ek hi array me merge kar deta hai


console.log(Array.isArray("Jafar")) //check karega array hai ya nahi
console.log(Array.from("Jafar"));// jafar ko array ke form me convert kar dega

console.log(Array.from({name: "Jafar"})); //o/p empty

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // ye tino variable ko ek array me convert kar dega


