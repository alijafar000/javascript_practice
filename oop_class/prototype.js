let myName = "Jafar     "

console.log(myName.trim().length);

let myHeros = ["Thor", "Spiderman", "Thanos"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",
    thanos: "Ring",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
        
    }
}

//object ke andar jafar name ka prototype add hua hai
Object.prototype.jafar = function(){
    console.log(`jafar is present in all object`);
    
}

//Array ke andar heyJafar name ka prototype add hua hai

Array.prototype.heyJafar = function(){
    console.log(`Jafar says hello`);
    
}


// heroPower.jafar()
// myHeros.jafar()
// heroPower.heyJafar() //is object ke  pass heyJafar name ka prototype nahi hai
myHeros.heyJafar()
