// task 1:
let a = 10;
let b = 20;
let c = a + b;
console.log(c);

// task 2:
let d = 20;
let e = 10;
let f = d - e;
console.log(f);

// task 3:
let g = 10;
let h = 10;
let i = g * h;
console.log(i);

// task 4:
let j = 70;
let k = 6;
let l = j/k;
console.log(l);

// task 5:
let m = j%k;
console.log(m); // reminder 4

// task 6:
m += 6; //10 expected
console.log(m);

// task 7:
m -= 5; // 5 expected
console.log(m);

// task 8:
let n = a > b; // n is boolean
console.log(n); //false expected

let p = a < b;
console.log(p); //true expected


//task 9:
let q = a >= e;
console.log(q); // true expected, they are equall

let r = b <= a;
console.log(r); // false expected


// task 10:
let s = b == d;
console.log(s); //true expected

a = 2
b = '2'
console.log(a === b); // strict check, false expected


// task 11:
let ANDing =   g == h && d > e;
console.log(ANDing); // true expected

// task 12:
let ORing =  a===b || d > e;
console.log(ORing); // true expected

// task 13:
let negate = !(a===b);
console.log(negate); // True expected

// task 14:
let num = -3
let check = (num >= 0)? 'Positive' : 'Negative';
console.log(check);
