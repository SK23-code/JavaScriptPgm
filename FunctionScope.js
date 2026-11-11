///Scope ---> decide accessing variable where in the program.
// 1. Global scope ---> Mostly used

/* const username="Hello";
let displayName = ()=>{
    console.log(username);
}
displayName();
console.log(username); */

///--------------------------------------------------------------------------------------------------------------

// Function scoped--> variable scoped inside a function, which cannot access ouside the function

/* let showDetails = ()=>{
    let name="Hai";
    let age=25;
    console.log(name);
    console.log(age);
}
showDetails();
 console.log(name);
 console.log(age);
 */


 //---------------------------------------------------------------------------------------------------------------

 //Block Scope

 if(true){
    let age=20;
    const name="Kai";
    var city="Tvm";
    console.log(age);
    console.log(name);
    console.log(city);
 }
console.log(age);
