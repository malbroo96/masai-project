const library = {

    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

    addBook(book) {
        if (
            !book.title || book.title.trim() === "" ||
            !book.author || book.author.trim() === "" ||
            typeof book.year !== "number"
        ) {
            console.log("Book information is incomplete.");
            return;
        }
        if (this.books.some(b => b.title === book.title)) {
            console.log("Book already exists.");
            return;
        }
        this.books.push(book);
        console.log("Book added successfully.");
    },

    findBookByTitle(title) {

        return this.books.find(book => book.title === title);

    },

    removeBook(title) {

        const index = this.books.findIndex(book => book.title === title);

        if (index !== -1) {

            this.books.splice(index, 1);

        } else {

            console.log("Book not found.");

        }
    }
};

library.addBook({ author: "George Orwell", year: 1949 });

console.log(library.books.length);