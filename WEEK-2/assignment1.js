// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise




//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.


//   2. Perform the following operations:

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books

class Book{
    title='';
    author='';
    pages=0;
    isavailable=true;

    constructor(title,author,pages,isavailable){
        this.title=title;
        this.author=author
        this.pages=pages;
        this.isavailable=isavailable
    }

// borrow book
borrow() {
        if (this.isavailable) {
            console.log(`${this.title} is available and successfully borrowed`);
            this.isavailable = false;
        } else {
            console.log(`${this.title} is not available`);
        }
    }
    returnbook(title){
        console.log(`${this.title}is successfully returned`)
        this.isavailable=true

    }
    getinfo(title){
        console.log(`${this.title} was written by ${this.author} and it contain ${this.pages}`)
    }

    islongbook(title){
        if(this.pages>300){
        console.log(`book ${this.title} has ${this.pages} no of pages`)
        return true
    }
}
}
let b1=new Book('book1','author1',100)
let b2=new Book('book2','author2',200)
let b3=new Book('book3','author3',300)
let b4=new Book('book4','author4',400)
let b5=new Book('book5','author5',100)
let b6=new Book('book6','author6',500)
let arr=[b1,b2,b3,b4,b5]

// b1.getinfo('book1')
// displayinfo
for(let i of arr){
    i.getinfo(i.title)
    
}

b1.borrow();
b3.borrow();

