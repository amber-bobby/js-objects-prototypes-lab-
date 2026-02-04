const library = {
    name: 'City Library',
    books: [],
    addBook(title, author, isbn) {
        this.books.push({ title, author, isbn })
    },

    findBookByTitle(title) {
        return this.books.find(book => book.title === title) || null;
    },

    listAllBooks() {
        this.books.forEach(book => console.log(book.title));
    }

};

const universityLibrary = Object.create(library);
universityLibrary.courses = [];
universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
    this.courses.push(courseName); 
    this.addBook(title, author, isbn);
};

universityLibrary.findBooksByAuthor = function(authorName) {
    return this.books.filter(book => book.author === authorName);
};

universityLibrary.addCourseBook('CS101', 'JS Guide', 'MDN', '111-222');
universityLibrary.addBook('The Hobbit', 'Tolkien', '333-444');
universityLibrary.addBook('Clean Code', 'Robert Martin', '555-666');
universityLibrary.listAllBooks();
console.log("Search by MDN:", universityLibrary.findBooksByAuthor('MDN'));