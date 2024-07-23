// task 1:
let name = "Ali";
let age = 22;
console.log(`Hello, ${name} You are ${22} years old`);

// task 2:
console.log(`its a multiline string\n where this line is the 2nd one`);

// task 3:
let arr = [1, 2, 3, 4, 5, 6];
let [first, second] = arr; //destructuring array
console.log(first, second);

// task 4:
let myFavBook = {
    title: "we were liars",
    author: "E. Lockhart",
    year: 2014
}
const {title, author} = myFavBook; //destructuring obj
console.log(`${title} by ${author}`);

// task 5:
let newArr = [...arr, 7, 8, 9, 10]; //spread operator
console.log(newArr);

// task 6:
function sum(...nums){
    return nums.reduce((acc, num)=> acc+num);
}
console.log(sum(1, 2, 3, 4));

// task 7:
const product = (num1, num2 = 1) => num1*num2;
console.log(product(10)); //without passing 2nd parameter
console.log(product(10, 20)); //with passing 2nd par

// task 8:
const myName = "Ali";
const myAge = 22;
let user = { //enhanced obj literals
    myName,
    myAge,
    greetings(){
        console.log(`I'm ${this.myName}, ${this.myAge} Years Old`);
    }
};
console.log(user);
console.log(user.greetings());

// task 9:
const firstProp = "firstCourse";
const secProp = "secondCourse"
const thirdProp = "thirdCourse"
let courses = {
    [firstProp]: "C++",
    [secProp]: "javascript",
    [thirdProp]: "ReactJS"
}
console.log(courses);