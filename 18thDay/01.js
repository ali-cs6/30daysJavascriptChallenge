// task 1
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log("Array Sorted: ", arr);
}
let arr1 = [90, 20, 60, 10];
bubbleSort(arr1);

// task 2
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

const arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(arr2));

// task 3
function quickSort(arr) {
    if (arr.length === 0) return arr;

    let midValue = arr[Math.floor(arr.length / 2)];
    let left = arr.filter(x => x < midValue);
    let middle = arr.filter(x => x === midValue);
    let right = arr.filter(x => x > midValue);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}
let arr3 = [10, 90, 70, 50, 99, 100];
console.log(quickSort(arr3));

// task 4
function linearSearch(arr, target = 10) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
const arr4 = [20, 10, 100];
console.log(linearSearch(arr4));

// task 5
function binarySearch(arr, target = 25) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            console.log("Binary Search Index:", mid);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    console.log("Target not found");
    return -1;
}

binarySearch([11, 12, 22, 25, 34, 64, 90]);

// task 6
function countCharacterOccurrences(str) {
    let counts = {};
    for (let char of str) {
        counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
    console.log("Character Occurrences:", counts);
}

countCharacterOccurrences("Hello world");

// task 7
function LongSubString(str) {
    let maxLength = 0;
    let start = 0;
    let seen = {};

    for (let end = 0; end < str.length; end++) {
        if (seen[str[end]] !== undefined && seen[str[end]] >= start) {
            start = seen[str[end]] + 1;
        }
        seen[str[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    console.log(
        "Length of Longest Substring Without Repeating Characters:",
        maxLength
    );
}

LongSubString("abbccdefgh");

// task 8
function rotateArray(arr, k = 2) {
    k = k % arr.length;
    let rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
    console.log("Rotated Array:", rotatedArray);
}

rotateArray([1, 2, 3, 4, 5, 6, 7]);

// task 9
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log("Merged Sorted Array:", mergedArray);
}

mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]);