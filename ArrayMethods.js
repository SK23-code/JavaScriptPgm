// Methods in array
// (1) For each method

/* let students=["Anu","Manu","Sanu"];
students.forEach(function(name){
    console.log(name);
})
 */
//----------------------------------------------------------------------------
//(2) Map method

/* let numbers=[20,30,40,50];
let result=numbers.map(function(num){
    return num*2;
})
console.log(result);
//-------------------------------------------

let names=["Anu","Sanu","Manu"];
let boys=names.map(function(name){
    return name.toUpperCase();
})
console.log(boys); */
//--------------------------------------------------------------------------------

//(3) Filter Method
/* 
let numbers2=[1,2,3,4,5];
let result=numbers2.filter(function(num){
    return num>3;
})
console.log(result); */

let number3=[13,20,30,40];
let result=numbers3.filter(function(num1){
return num1%2===0;
})
console.log(result);