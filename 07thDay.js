// task 1:
let myFavBook = {
    title: "we were liars",
    author: "E. Lockhart",
    year: 2014
}
console.log(myFavBook);

// task 2:
console.log(myFavBook.title);
console.log(myFavBook.author);

// task 3:
myFavBook.returnTitleAndAuthor = function () {
    console.log(`${this.title} is written by ${this.author}`);
}
console.log(myFavBook.returnTitleAndAuthor());

// task 4:
myFavBook.updateYear = function (year) {
    return this.year = year;
}
myFavBook.updateYear(2015);
console.log(myFavBook);

//task 5:
let library = {
    name: "Hell of a Library",
    books: [
        {
            title: "Alchemist",
            author: "Paulo Coelho",
            year: 1998
        },
        {
            title: "Zuleikha",
            author: "Guzel Yakhina",
            year: 2015
        },
        {
            title: "The subtle art of not giving a fuck",
            author: "Mark Menson",
            year: 2016
        }
    ]
}
console.log(library);

// task 6:
console.log(`LibraryName: ${library.name}`);
library.books.forEach((book) => {
    console.log(book.title);
});

// task 7:
myFavBook.retTitleAndYear = function(){
    console.log(`${this.title} was released in ${this.year}`);
}
console.log(myFavBook.retTitleAndYear());

// task 8:
for(let key in myFavBook){
    console.log(`${key}: ${myFavBook[key]}`);
}

// task 9:
console.log(Object.keys(myFavBook));
console.log(Object.values(myFavBook));