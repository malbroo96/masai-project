function Book(tittle,author,year){
    this.tittle=tittle
    this.author=author
    this.year=year
}


book.prototype.getsummery=(){
    return `${this.tittle} by ${this.author} , published in ${this.year}`
}





const=[
    new book("book1","akhil",1996),
    new book("book2","jijo",2000),
    new book("book3","manu",2001)
]




const summaries