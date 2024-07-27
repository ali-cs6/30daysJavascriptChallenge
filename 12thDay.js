// task 1:
function throwError() {
    throw new Error("This is an error lol");
}
try {
    throwError();
} catch (error) {
    console.log("Error: ", error.message);
};

// task 2 & 3:
function division(a, b) {
    if (b === 0) throw new Error("What the Heck");
    return a / b;
};
try {
    console.log(division(3, 0));
} catch (error) {
    console.log("Error: ", error.message);
} finally {
    console.log("finally, The Error is handled");
}

// task 4:
class customError extends Error {
    constructor(message) {
        super(message);
        this.name = "customError";
    }
}
function throwCustomError() {
    throw new customError("oh shit, Here we go again");
}
try {
    throwCustomError();
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
};

// task 5:
class validationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Validation Error";
    }
}
function validInput(input) {
    if (!input) {
        throw new validationError("input can not be empty");
    }
    return "Valid Input";
}

try {
    console.log(validInput(""));
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
};

// task 6:
const newPromise = new Promise((resolve, reject) => {
    let random = Math.random();
    if (random > 0.5) {
        resolve("Promise Resolved");
    } else reject('Failed');
});
newPromise.then((message) => console.log(message))
    .catch((error) => console.error("Error: ", error));

// task 7:
async function handleRandomPromise() {
    try {
        const response = await newPromise;
        console.log(response);
    } catch (error) {
        console.error("Error: ", error);
    }
}
handleRandomPromise();

// task 8:
fetch('https://api.com/users/ali-cs6')
    .then((response) => console.log(response))
    .catch((error) => console.error("Error: Invalid URL"));

// task 9:
async function fetchingData() {
    try {
        const response = await fetch('https://api.com/users/ali-cs6');
        console.log(response);
    } catch (error) {
        console.error("Invalid URL");
    };
};
fetchingData();