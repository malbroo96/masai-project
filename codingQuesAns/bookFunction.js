//construction function
function Book(title, author,year){
    this.title=title;
    this.author=author;
    this.year=year;

}// adding get summary
Book.prototype.getSummary =function(){
    return`${this.title} by ${this.author},published in ${this.year}`;
}
//creating an array of book insatances
const b1=new Book("sample book 1","akhil",1699)
const b2=new Book("sample book 2","abhi",4565)
const b3= new Book("sample book 3","anish",6654)
const bookarray=[b1,b2,b3]
export{bookarray ,Book}