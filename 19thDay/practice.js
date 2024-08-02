// Task 1
const regex1 = /javascript/gi;
let str1 = "Javascript is easy, javascript is good, javascript hehe";
let matches1 = str1.match(regex1);
console.log(matches1);


// task 2
const regex2 = /\d/g;
let str2 = "123 and 6 which is 9 hehe";
let matches2 = str2.match(regex2);
console.log(matches2);

// task 3
let str3 = "Love all Programming languages Equally";
let regex3 = /\b[A-Z][a-z]*\b/g;
let matches3 = str3.match(regex3);
console.log(matches3);

// task 4
let str4 = "30 days challenge by Hitesh Sir, covered 19 days";
let regex4 = /\d+/g;
let matches4 = str4.match(regex4);
console.log(matches4);

// task 5
let str5 = "(123) 456-7890";
let regex5 = /\((\d{3})\) (\d{3})-(\d{4})/;
let matches5 = str5.match(regex5);
console.log(matches5);

// task 6
let str6 = "user@example.com";
let regex6 = /(\w+)@(\w+\.\w+)/;
let matches6 = str6.match(regex6);
console.log(matches6);

// Task 7
let str7 = "Hello world!";
let regex7 = /^\w+/;
let matches7 = str7.match(regex7);
console.log(matches7);

// Task 8
let str8 = "Hello world!";
let regex8 = /\w+$/;
let matches8 = str8.match(regex8);
console.log(matches8);

// task 9
let password = "Passw0rd!";
let regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
let isValid = regex9.test(password);
console.log(isValid);

// Task 10
let url = "https://www.urlinfo.com";
let regex10 = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/?]?.*)$/;
let isValid2 = regex1.test(url);
console.log(isValid2);