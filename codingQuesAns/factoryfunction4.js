function book(title,author){
    return{
        title,
        author,
        details: function(){
            console.log(`Title : ${title},Author : ${author}`)
        }
    }

}

function createlibrary(){
    const books=[]
    return{

        addbook :function(book){
            books.push(book)

        },
        removebook : function(title){
            const index=books.findIndex((book)=>
                book.title===title
            )
            if(index !==-1){
                books.splice(index,1);
                console.log(`book "${title}" removed from the library`)

            }else{
                console.log(`book "${title}" not found in the library `)
            }

        },
        listbooks : function(){
            if(books.length===0){
                console.log("No books available in the library")
            }else{
                books.forEach((book)=>{book.details()})
            }
        }
    }
}

const library = createlibrary();

const book1 = book("To Kill a Mockingbird", "Harper Lee");
const book2 = book("1984", "George Orwell");
const book3 = book("The Alchemist", "Paulo Coelho");

library.addbook (book1);
library.addbook(book2);
library.addbook(book3);

console.log("📚 Books in Library:");
library.listbooks();

library.removebook("1984");

console.log("\n📚 After Removing '1984':");
library.listbooks();
