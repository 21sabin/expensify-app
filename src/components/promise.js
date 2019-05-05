
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Hey i havenit  completed my promise");
    },2000)
});

console.log("begin");

promise.then((data)=>{
    console.log(data);
},(error)=>{
    console.log("something went wrong!")
})

console.log("end");