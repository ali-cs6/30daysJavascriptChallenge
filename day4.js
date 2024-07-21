// task 1:
for(let i = 1; i <= 10 ; i++){
    console.log(i);
}

// task 2:
for(let i = 0; i <= 10; i++){
    console.log(' 5 ' + '* ' + i + ' = ' + 5*i);
}

// task 3:
let sum = 0;
let i = 1;
while(i <= 10){
    console.log(sum += i);
    i++;
}

// task 4:
let j = 10;
while(j >= 1){
    console.log(j);
    j--;
}

// task 5:
let k = 1;
do{
    console.log(k);
    k++;
} while(k <= 5);

// task 6:
let aNum = 5
let factorialResult = 1
let x = aNum;
do{
    factorialResult *= x;
    x--;
} while(x > 0);
console.log(`Factorial of ${aNum} is ${factorialResult}`);


//task 7:
for(let i = 1; i <= 5; i++){
    let singleLine = ''
    for(let j = 1; j <= i; j++){
        singleLine += ' * '
    }
    console.log(singleLine);
};


// task 8:
for(let i = 1; i <= 10; i++){
    if(i==5) continue;
    console.log(i);
}


// task 9:
for(let i=1; i<=10; i++){
    console.log(i);
    if(i==7) break;
}