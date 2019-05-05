const add=(a,b)=>a+b;
const greeting=(name)=>`hello ${name}!`

test("add two numbers",()=>{
    const result=add(2,3);
    expect(result).toBe(5);
});

test("should be hello sabin",()=>{
    expect(greeting("sabin")).toBe("hello sabin!");
})