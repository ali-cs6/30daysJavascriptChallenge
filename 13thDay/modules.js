// task 1 module
export function add(a, b){
    return a + b;
};

// task 2 module
export const person ={
    userName: "Ali",
    age: 22,
    greetings: function(){
        console.log(`Hello Mr.${this.userName}`);
    }
};

// task 3 module
function func1(num){ // find square
    return num*num;
}
function func2(num){
    return num*num*num;
}
export {func1, func2};

// task 4 module
export default  () => {
    let randNum = Math.floor(Math.random() * 10);
    return randNum;
};