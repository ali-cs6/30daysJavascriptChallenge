// task 1
function twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap.has(complement)) {
        return [numMap.get(complement), i];
      }
      numMap.set(nums[i], i);
    }
    return [];
  }
  
  // Test cases
  console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
  console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
  console.log(twoSum([3, 3], 6)); // Output: [0, 1]

  
// task 2
function reverseInteger(num) {
    const isNegative = num < 0;
    let reversed = parseInt(Math.abs(num).toString().split("").reverse().join(""));
    return isNegative ? -reversed : reversed;
  }
  
  // Test cases
  console.log(reverseInteger(0)); // Output 0
  console.log(reverseInteger(-6846)); // Output -6846
  console.log(reverseInteger(342)); // Output 342

// task 3
function isPalindrome(num) {
    if (num < 0) return false; //neg value
    const str = num.toString();
    return str === str.split("").reverse().join("");
  }
  
  // Test cases
  console.log(isPalindrome(45654)); // Output true
  console.log(isPalindrome(-121)); // Output false
  console.log(isPalindrome(10)); // Output false
  console.log(isPalindrome(0)); // Output true

// task 4
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  
  // Function to merge two sorted linked lists
  function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
  
    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
    current.next = l1 !== null ? l1 : l2;
  
    return dummy.next;
  }
  
  // Test cases
  function printList(node) {
    const values = [];
    while (node) {
      values.push(node.val);
      node = node.next;
    }
    console.log(values.join(" -> "));
  }
  
  const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  const mergedList = mergeTwoLists(l1, l2);
  printList(mergedList);

// Task 5
function isValid(str) {
    const stack = [];
    const map = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  
    for (let char of str) {
      if (map[char]) {
        stack.push(map[char]);
      } else {
        if (stack.pop() !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // Test cases
  console.log(isValid("()")); // Output true
  console.log(isValid("()[]{}")); // Output true
  console.log(isValid("(]")); // Output false
  console.log(isValid("([)]")); // Output false
  console.log(isValid("{[]}")); // Output true
