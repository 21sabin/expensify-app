
//object destructuring
//it makes easy for extracting the object data easily
//for object destructuring we use {}

// const book={
  
//     price:1300,
//     author:'Ray hudin',
//     publisher:{
//         name:'nima'
//     }
// }

// const {title:tit="ego is the key of enemy",price}=book;
// const {name}=book.publisher

// console.log(`the title of the book is ${tit} and price is ${price} and publisher is ${name}`);



const item=["coffee (cold)","$2.75","$2.85","$3.00"];

const [name='coffee (hot)', , , lprice]=item;
console.log(`${name} cost ${lprice}`)