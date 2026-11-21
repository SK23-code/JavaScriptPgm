/* False,0,-0,big0(Bigint),Empty string(""),Null,Undefined,NaN --->Falsy values */

/* True, 1 , -1, "Hello", "zero". "False", " ",[],{},function() {} --->Truthy values */

let value=0;
if(value){
    console.log("Truthy value");
}
else{
    console.log("Falsy value");
}
//-----------------------------------------------------------------------------
let name="";
if(name){
    console.log("name is available");
}
else{
    console.log("name is empty");
}


//-----------------------------------------------------------------------------
let fruits=[];
if(fruits){
    console.log("array is truthy");
}
else{
    console.log("array is falsy");
}

//-----------------------------------------------------------------------------
let students=[];
if(students){
    console.log("object is truthy");
}
else{

    console.log("object is falsy");
}


//-----------------------------------------------------------------------------

let a=null;
let b;
if(a){
    console.log("a is truthy");
}
else{
    console.log("a is falsy");
}
if(b){
 console.log("b is truthy");
}
else{
    console.log("b is falsy");
}
console.log(Boolean(10));

console.log(Boolean(0));

console.log(Boolean(null));


//-----------------------------------------------------------------------------

let userName="";
if(userName){
    console.log("Login succssful");
}
else{
    console.log("please enter username");
}