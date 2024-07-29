// task 1 & 2
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    greeting() {
        console.log(`hello ${this.name}`);
    };
    updateAge() { // task 2
        return ++(this.age);
    }
};
const ali = new person("Ali", 22);
ali.greeting();
console.log(ali.updateAge());

// task 3,4,5,6
class student extends person {
    static studentCount = 0;
    constructor(name, age, studentID){
        super(name, age);
        this.studentID = studentID;
        student.studentCount++ // task 6
    };

    returnStudentID(){
        return this.studentID;
    };
    greeting(){ // task 4
        console.log(`Hello ${this.name} your student ID is: ${this.studentID}`);
    };
    static genericGreetingMsg(){ // task 5
        console.log(`Hello ${this.name}, This is static`);
    }
};

const jhon = new student("Jhon", 18, 12345);
console.log(jhon.returnStudentID());
jhon.greeting();
student.genericGreetingMsg();
// jhon.genericGreetingMsg(); // error due to static
console.log(student.studentCount);



