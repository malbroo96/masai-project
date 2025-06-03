// Book constructor function
function Book(title, author, isAvailable = true) {
  this.title = title;
  this.author = author;
  this.isAvailable = isAvailable;
}

// Member constructor function
function Member(name) {
  this.name = name;
  this.borrowedBooks = [];
}

// Borrow book method for regular members
Member.prototype.borrowBook = function(book) {
  if (this.borrowedBooks.length >= 3) {
    console.log(`${this.name} has already borrowed the maximum number of books.`);
    return;
  }

  if (book.isAvailable) {
    book.isAvailable = false;
    this.borrowedBooks.push(book.title);
    console.log(`${this.name} borrowed "${book.title}".`);
  } else {
    console.log(`"${book.title}" is already borrowed.`);
  }
};

// PremiumMember constructor function (inherits from Member)
function PremiumMember(name) {
  Member.call(this, name); // Call parent constructor
  this.specialCollectionAccess = true;
}

// Set up inheritance
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

// Override borrowBook for PremiumMember
PremiumMember.prototype.borrowBook = function(book) {
  if (this.borrowedBooks.length >= 5) {
    console.log(`${this.name} has already borrowed the maximum number of books.`);
    return;
  }

  // Reuse parent method logic
  Member.prototype.borrowBook.call(this, book);
};

// Demonstration

// Books
const book1 = new Book("1984", "George Orwell");
const book2 = new Book("The Hobbit", "J.R.R. Tolkien");
const book3 = new Book("Clean Code", "Robert C. Martin");
const book4 = new Book("Dune", "Frank Herbert");
const book5 = new Book("Atomic Habits", "James Clear");
const book6 = new Book("The Pragmatic Programmer", "Andy Hunt");

// Members
const alice = new Member("Alice");
const bob = new PremiumMember("Bob");

// Borrowing
alice.borrowBook(book1);
alice.borrowBook(book2);
alice.borrowBook(book3);
alice.borrowBook(book4); // Should not be allowed

bob.borrowBook(book4); // Bob can borrow even if Alice cannot
bob.borrowBook(book5);
bob.borrowBook(book6);
bob.borrowBook(book2); // Already borrowed by Alice
bob.borrowBook(book3); // Already borrowed by Alice
bob.borrowBook(book1); // Already borrowed by Alice

// Use bind to create a bound borrowing function
const borrowForBob = bob.borrowBook.bind(bob);
const book7 = new Book("Deep Work", "Cal Newport");
borrowForBob(book7); // Should work if limit not reached
