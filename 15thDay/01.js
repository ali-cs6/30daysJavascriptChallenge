// task 1
function outerFunction(){
    let outerVariable = 10;
    return function innerFunction(){
        return outerVariable = 20;
    }
}
const innerExecution = outerFunction();
console.log(innerExecution());

// task 2:
function incrementCounter(){
    let counter = 0;
    return function(){
        ++counter;
        console.log(`Current Counter Value: ${counter}`);
    }
};
const increaseCounter = incrementCounter();
increaseCounter();
increaseCounter();
increaseCounter();

// task 3:
function uniqueIds(){
    let str = "123456789";
    let uniqueId = 0;
    for(let i = 0; i < 6; i++){
        uniqueId += str[Math.floor(Math.random() * 8)];
    }
    return function incrementId(){
        ++uniqueId;
        console.log(`Unique ID: ${uniqueId}`);
    }
}
const uniqueId = uniqueIds();
uniqueId();
uniqueId();
uniqueId();

// task 4:
function hello(){
    let userName = "Ali";
    return function greeting(){
        return console.log(`Hello ${userName}`);
    }
}
const greeting = hello();
greeting();

// task 5:
function funcs(){
    let functions = [];
    for(var i = 0; i <= 3; i++){
        (function(i){
            functions.push(function(){
                return i;
            })
        })(i);
    }
    return functions;
}

const allFuncs = funcs();
console.log(allFuncs[0]());
console.log(allFuncs[1]());

// task 6:
function module(){
    let collection = ["Item 1", "Item 2"];
    return {
        add: function(item){
            collection.push(item);
            return console.log(collection);
        },
        remove: function(){
            collection.pop();
            return console.log(collection);
        },
        list: function(){
            collection.map((item) => console.log(item));
        }
    };
};
const myCollection = module();
myCollection.add("Item 3");
myCollection.remove();
myCollection.remove();
myCollection.list();

// task 7:
function memioze(fn){
    let cache = {};
    return function(...arg){
        let key = JSON.stringify(arg);
        if(cache[key]){
            return console.log(cache[key]);
        } else {
            const result = fn(...arg)
            cache[key] = result;
            return console.log(result);
        }
    }
}

// task 8:
function factorial(n){
    if(n <= 1) return n;
    return n*factorial(n-1);
};

const memiozedFunction = memioze(factorial);
memiozedFunction(5); // store in cache
memiozedFunction(5); //from cache