//importing the books from bookFunction
import{bookarray}from "./bookFunction.js";
//unsing map to create a new array
const bookSummary=bookarray.map((element)=>{
    const summary=element.getSummary()
    return summary

});
console.log(bookSummary)


