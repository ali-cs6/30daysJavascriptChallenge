// task 1 & 2:
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            console.log("Promise Resolved");
            resolve();
        } else {
            console.log("Failed to resolve");
            reject();
        }
    }, 2000)
}
)
promiseOne.then(() => {
    console.log("Promised Consumed");
}).catch(() => {
    console.log("Error Resolving");
});


// task 3:
const chainingPromises = (data, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched: ${data}`);
            resolve();
        }, delay);
    });
};

chainingPromises('Data 1', 1000)
    .then(() => chainingPromises("data 2", 1500))
    .then(() => chainingPromises('data 3', 2000));


// task 4:
const promiseTwo = new Promise((resolve) => {
    setTimeout(() => resolve({ userName: "Ali", age: 23 }), 5000);
});
async function resolvePromise() {
    const response = await promiseTwo;
    console.log(`Promise resolved, Age:${response.age}`);
};
resolvePromise();

// task 5:
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;
        if (!error) {
            resolve("Promise Resolved");
        } else {
            reject("Promise rejected");
        }
    }, 6000);
});
async function rejectPromise() {
    try {
        const response = await promiseThree;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
rejectPromise();

// task 6:
fetch('https://api.github.com/users/ali-cs6')
    .then((response) => {
        const data = response.json();
        return data;
    }).then((data) => {
        console.log(data.following);
    }).catch(() => {
        console.log("Failed Fetching data");
    });

// task 7:
async function gitHubDataRequest() {
    try {
        const response = await fetch('https://api.github.com/users/ali-cs6');
        const data = await response.json();
        console.log(data.followers);
    } catch (error) {
        console.log(error);
    }
};
gitHubDataRequest();

// task 8:
const randPromise1 = new Promise((resolve, reject) => setTimeout(resolve, 200, "First"));
const randPromise2 = new Promise((resolve) => setTimeout(resolve, 400, "2nd"));
const randPromise3 = new Promise((resolve) => setTimeout(resolve, 600, "3rd"));
Promise.all([randPromise1, randPromise2, randPromise3]).then((values) => {
    console.log("Promises: ", values);
});

// task 9:
Promise.race([randPromise1, randPromise2, randPromise3]).catch((value) => {
    console.log("Fastest: ", value);
});

