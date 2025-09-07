 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Jafar"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "ravi123@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jafar",
            lastname: "Ali"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// combined multiple objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4); //spread ke throw combined kar sakte hai object me bhi

const user = [
    {
    id: 1,
    email: "jafar123@gmail.com"
    },
    {
      id: 1,
    email: "jafar123@gmail.com"
      
    },
    {
        id: 1,
    email: "jafar123@gmail.com"
    }
]

// console.log(user[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //tinderUser ke keys print karega

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//array ke andar array banakar key and value print karega

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // ye find karega ki isLoggedIn key hai ki nahi true or false

 //object destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//Api me value aise hi aata hai

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]