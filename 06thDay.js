// task 1:
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// task 2:
console.log(arr1[0]); // first element
console.log(arr1[4]); // last element

// task 3:
arr1.push(6);
console.log(arr1);

// task 4:
arr1.pop();
console.log(arr1);

// task 5:
arr1.shift();
console.log(arr1);

// task 6:
arr1.unshift(1);
console.log(arr1);

// task 7:
const arr2 = arr1.map((eachVal) => eachVal*2);
console.log(arr2);

// task 8:
const arr3 = arr1.filter((eachVal) => eachVal % 2 === 0);
console.log(arr3);

// task 9:
const arr4 = arr1.reduce((accumulator, currentVal) => accumulator+currentVal);
console.log(arr4);

// task 10:
for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
};

// task 11:
arr1.forEach((eachVal) => console.log(eachVal));

// task 12:
const TwoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(TwoDArray);

// task 13:
console.log(TwoDArray[1][1])