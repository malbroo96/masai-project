const item2= document.getElementById("item2");





item2.addEventListener("click",()=>{
    alert(item2.parentNode.textContent);

// const prev = item2.perviousElementSibilng;
const prev = item2.previousElementSibling;
const next =item2.nextElementSibling;




if(prev){
    console.log("previous sibling :",prev.textContent);

}if(next){
    console.log("next sibling :",next.textContent)
}


})