// task 1:
function evenOddCheck(num){
    if(num % 2 === 0) console.log(`${num} is Even`);
    else console.log(`${num} is Odd`);
}
evenOddCheck(12);

// task 2:
function findSquare(num){
    console.log(num*num);
}
findSquare(5);

// task 3:
const findMax = function(num1, num2){
    if(num1 > num2) console.log(`${num1} if Greater than ${num2}`);
    else console.log(`${num2} is Greater than ${num1}`);
}
findMax(99, 40);

// task 4:
const str1 = "Hello, "
const str2 = "Its Ali."
const concateStrings = function(str1, str2) {
    let concatinatedStrings = str1 + str2;
    console.log(concatinatedStrings);
}
concateStrings(str1, str2);

// task 5:
const sumOfTwoNumbers = (num1, num2) => {
    console.log(num1 + num2);
}
sumOfTwoNumbers(40, 50);

// task 6:
let specialChar = false;
const str = "the special char # is present here";
const checkString = (str) => {
    for(let i = 0; i < str.length; i++){
        if(str[i] === '#'){
            specialChar = true;
        }
    }
    console.log(specialChar);
}
checkString(str);

// task 7:
function findProduct(num1, num2 = 10){
    return num1 * num2;
}
console.log(findProduct(5));

// task 8:
function greetingMsg(name, age=23){
    return `Hello ${name}, You are ${age} years Old`
}
console.log(greetingMsg("Ali"));


// task 9:
const act = (n) => console.log(`${n}: inside func printed`);
function highOrder1(num, act){ //act = function
    for(let i = 1; i <= num; i++){
        act(i);
    }
}
highOrder1(5, act);

// task 10:
const func1 = (n) => n*n; //sqr of val
const func2 = (res) => console.log(`Final result: ${res}`);
function highOrder2(func1, func2, val){
    const result = func1(val);
    func2(result);
}
highOrder2(func1, func2, 4);