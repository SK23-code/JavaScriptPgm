/* let student=null;
console.log(student.name); */

/* let a=10;
let b=20;
let result=a-b;
console.log(result); */


try{
    let result=10/0;
    console.log(result);
    throw new Error("Somthing went wrong");
}catch(error){
    console.log("Error Occured : ",error.message);
}
