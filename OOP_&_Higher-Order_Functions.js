class Book {
    constructor(title, author, isCheckedOut) {
        this.title = title;
        this.author = author;
        this.isCheckedOut = isCheckedOut;
    }
}

class Library {
    constructor() {
        this.books = [];
    }
     addBook(book) {
        this.books.push(book);
    }

    checkABook(title) {
        for (let i = 0; i < this.books.length; i++) {
            if (title === this.books[i].title) {
                return this.books[i].isCheckedOut = true;
            }
        }
    }

    returnABook(title) {
        for (let i = 0; i < this.books.length; i++) {
            if (title === this.books[i].title) {
                return this.books[i].isCheckedOut = false;
            }
        }
    }

    getAvailableBooks() {
        return this.books
            .filter(book => book.isCheckedOut === false)
            .map(book => book.title);
    }

    getBooksByAuthor(author) {
        return this.books
            .filter(book => book.author === author)
            .map(book => book.title);
    }

    getCheckedOutBooks() {
        return this.books.reduce((count, book) => {
            if (book.isCheckedOut === true) {
                return count + 1;
            }

            return count;
        }, 0);
    }
}

let book1 = new Book("Harry Potter", "J.K. Rowling", false);
let book2 = new Book("1984", "George Orwell", true);
let book3 = new Book("Animal Farm", "George Orwell", false);

let library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log(library.getAvailableBooks());
console.log(library.getBooksByAuthor("George Orwell"));
console.log(library.getCheckedOutBooks());