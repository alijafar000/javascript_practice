//for
for (let i = 2; i < 10; i++) {
    const element = i;
    if (i == 5) {
        // console.log(`5 is best number`);
        
    }
    // console.log(i);
}
for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop value ${i}`);
    
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop value ${i}`)
        // console.log(i + '*' + j + '=' + i*j);
        
        
    }
}
let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

//break and continue

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`5 is detected`);
        // break
        continue
    }
    console.log(`value of i is ${index}`);
    
}
