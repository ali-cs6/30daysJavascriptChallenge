import randFunction, { add, person, func1, func2 } from "./modules.js";
import myObj from "./modules2.js"
import _ from "lodash";
import axios from "axios";

// task 1
console.log(add(2, 3));
// task 2
person.greetings();
// task 3
console.log(func1(3));
console.log(func2(3));
// task 4
console.log(randFunction());
// task 5
console.log(myObj.name);
console.log(myObj.age);
myObj.intro();

// task 6
let arr = [1, 5, 2, 3, 4, 4, 5, 2, 5];
let uniquwValues = _.uniq(arr);
console.log(uniquwValues);
let sumValue = _.reduce(arr, (sum, val) => sum + val);
console.log(sumValue);

// task 7
axios.get('https://api.github.com/users/ali-cs6')
    .then((response) => response.data.followers)
    .then((followers) => console.log(followers))
    .catch((error) => console.log("Error"));