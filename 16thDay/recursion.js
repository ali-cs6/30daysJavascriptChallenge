// task 1
function findFactorial(n){
    if(n <= 1) return n;
    return n * findFactorial(n-1);
}
console.log(findFactorial(5));

// task 2
function findFibonacci(n){
    if(n <= 1) return n;
    return findFibonacci(n-1) + findFibonacci(n-2);
}
console.log(findFibonacci(10));

// task 3
function sumArray(arr){
    if(arr.length === 0) return 0; //baseCase

    return arr[0] + sumArray(arr.slice(1));
};
const numbers = [1, 2, 3];
console.log(sumArray(numbers));

// task 4
function maxValue(arr){
    if(arr.length === 1) return arr[0]; //baseCase

    let midPoint = Math.floor(arr.length/2);
    let leftSide = arr.slice(0, midPoint);
    let rightSide = arr.slice(midPoint);
    //recursion
    let leftMax = maxValue(leftSide);
    let rightMax = maxValue(rightSide);
    return Math.max(leftMax, rightMax);
}
const arr2 = [1,4,5,6,3,6,66,56,4,45,4];
console.log(maxValue(arr2));

// task 5
function reverseString(str){
    if(str.length <= 1) return str; //baseCase
    
    return reverseString(str.slice(1)) + str[0];
}
let str = "Hello World";
console.log(reverseString(str));

// task 6
function checkPalindrome(str){
    if(str.length <= 1) return true;

    const firstChar = str[0];
    const lastChar = str[str.length - 1];
    if(firstChar !== lastChar){
        return false;
    }
    return checkPalindrome(str.slice(1, -1));
}
const str2 = "racear";
console.log(checkPalindrome(str2));

// task 7
function binarySearch(arr, target, left = 0, rigt = arr.length - 1){
    if(left > rigt) return `Target NotFound`; //base case

    const mid = Math.floor((left+rigt)/2);

    if(arr[mid] === target) return `Target Index: ${mid}`; //found target
    if(arr[mid] > target) return binarySearch(arr, target, left, rigt=mid-1);
    if(arr[mid] < target) return binarySearch(arr, target, left = mid + 1, rigt);
}
let sortedArray = [1, 2, 3, 4, 5];
console.log(binarySearch(sortedArray, 7));

// task 8
function occurrenceCount(arr, occVal){
    if(arr.length === 0) return 0;

    const firstElement = arr[0];
    if(firstElement === occVal){
        return 1 + occurrenceCount(arr.slice(1), occVal);
    } else {
        return occurrenceCount(arr.slice(1), occVal);
    }
}
const arr3 = [1, 2, 2, 2, 4, 5, 6, 4]
console.log(occurrenceCount(arr3, 2));