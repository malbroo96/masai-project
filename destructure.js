const people=[
    {name:"alice",addres:{city:"new york",street:{name:"broadway",number:123}}},
    {name:"bob",addres:{city:"los angeles",street:{name:"sunset boulevard",number:456}}}
];

const result=people.map(({name,addres:{city,street:{name:streetName,number}}})=>
    `${name} lives in ${city}, on ${streetName}` );
console.log(result);