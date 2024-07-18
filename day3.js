// task 1:
function checkNum(num) {
    if (num > 0) {
        console.log("Number is Positive");
    } else if (num == 0) {
        console.log("Number is Zero");
    } else {
        console.log("Number is Negative");
    }
}
checkNum(-10);

// task 2:
const age = 30;
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// task 3:
const x = 10;
const y = 40;
const z = 50;
function findGreaterNumber(x, y, z) {
    if (x > y) {
        if (x > z) {
            console.log("X is the greatest");
        } else {
            console.log("Z is the greatest");
        }
    } else if (y > z) {
        console.log("Y is the greatest");
    } else console.log("Z is Greatest");
};
findGreaterNumber(x, y, z);


// task 4:
let theDay = 3;
switch (theDay) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Sunday");
};

// task 5:
let grade;
let score = 70;
switch (true) {
    case (score <= 100 && score >= 90):
        grade = 'A';
        break;
    case (score < 90 && score >= 80):
        grade = 'B';
        break;
    case (score < 80 && score >= 70):
        grade = 'C';
        break;
    case (score < 70 && score >= 60):
        grade = 'D';
        break;
    case (score < 60 && score >= 50):
        grade = 'E';
        break;
    case (score < 50 && score >= 0):
        grade = 'F';
        break;
    default:
        console.log("Invalid Score")
}
console.log(`Grade for Score ${score} is: ${grade}`);


// task 6:
let EvenOddCheck = 9;
EvenOddCheck%2 === 0 ? console.log("Even") : console.log("Odd");


// task 7:
let year = 1900;
if((year % 4 === 0 && year % 100 !== 0)  || (year % 100 === 0 && year % 400 === 0)){
    console.log(`${year} is a Leap Year`);
} else {
    console.log(`${year} is not a leap year`);
};