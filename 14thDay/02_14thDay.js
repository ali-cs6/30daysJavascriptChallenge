// task 7 & 8
class person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };

    get name() { // task 7
        return this.firstName + " " + this.lastName;
    }
    set name(fullname) { // task 8
        const [firstName, lastName] = fullname.split(" "); //updating
        this.firstName = firstName;
        this.lastName = lastName;
    };
};

const ali = new person("Barkat", "Ali", 22);
console.log(ali.name);
ali.name = "Ali Barkat"; // setter updates
console.log(ali.firstName);
console.log(ali.lastName);

// task 9
class account {
    #balance = 0;
    constructor(accountHolderName) {
        this.accountHolderName = accountHolderName;
    };

    deposit(depositAmount) {
        this.#balance += depositAmount;
        console.log(`Deposited: ${depositAmount}. New Balance: ${this.#balance}`);
    }
    withdraw(withdrawalAmount) {
        if (this.#balance >= withdrawalAmount) {
            this.#balance -= withdrawalAmount;
            console.log(`withdrawl: ${withdrawalAmount}. New Balance: ${this.#balance}`);
        } else {
            throw new Error("Insufficient Balance!");
        };
    };
}

// task 10
const myAccount = new account("Ali");

myAccount.deposit(1000); //Balance = 1000
myAccount.withdraw(1000); //balance = 0
myAccount.withdraw(100); //insufficient Balance