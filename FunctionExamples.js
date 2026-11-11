//Function ---> named function
/* function addition(){
    let a=10;
    let b=20;
    let sum=a+b;
    console.log("Sum :",sum);
}
addition(); */
//----------------------------------------------------------------


// Fuction Expression  ---> Annonymous function

/* const multiplication=function (){
    let a=5;
    let b=4;
    let result= a*b;
    console.log("Multiplication :",result);
}
multiplication(); */

//.................................................................


//Arrow funtion

/* const addition = ()=>{
let a=5;
let b=10;
console.log("Sum:",a+b);
}
addition();
 */
//-------------------------------------------------------------------

//Function parameters --> variable created to receive the value. when calling the function

function addition(a,b){ // a,b are known as parameters
    let sum=a+b;
    console.log(sum);
}
addition(2,8);//--->  2, 8 are arguments