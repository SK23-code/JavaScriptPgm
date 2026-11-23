/* //1.
function calculateResult(mark){
if(mark>=50){
    console.log("Passed the Examination");
}
else{
    console.log("Failed");
}
let result=mark;
console.log("The Final mark is",result);
}
console.log(calculateResult(70));
console.log(calculateResult(48));
//................................................................

//2.
let displayResult=(name,result)=>{
    console.log("Name :",name);
    console.log("Result :", result);
}
displayResult("Sreekanth","Pass");
//-----------------------------------------------------------------

//3.
let learnerData=[{ name: "Anu", marks: 75 },{ name: "Rahul", marks: 42 },
{ name: "Meena", marks: 68 }, { name: "Arun", marks: 35 }];
console.log(learnerData);

//------------------------------------------------------------------
//4.
for (const data1 of learnerData) {
    console.log(data1.name);
}
//----------------------------------------------------------------- */
/* //5.
function calculateResult(mark){
if(mark>=50){
    return "Passed ";
}
else{
     return "Failed";
}
}
 let displayResult=(name,result)=>{
    console.log(name +" - "  + result);   
 };
let learnerData=[{ name: "Anu", marks: 75 },{ name: "Rahul", marks: 42 },
{ name: "Meena", marks: 68 }, { name: "Arun", marks: 35 }];
for (const data1 of learnerData) {
    let result=calculateResult(data1.marks);
    displayResult(data1.name,result);
}
 */


/* let students = [ { name: "John", marks: 85, grade: "A" },
{ name: "David", marks: 72, grade: "B" },
{ name: "Peter", marks: 90, grade: "A+" },
{ name: "Sarah", marks: 65, grade: "C" }];
let result=students.forEach(function(student){
    console.log(student.name + ' - '+student.marks + ' - '+ student.grade);
}) */


/* let students = [ { name: "John", marks: 85, grade: "A" },
{ name: "David", marks: 72, grade: "B" },
{ name: "Peter", marks: 90, grade: "A+" },
{ name: "Sarah", marks: 65, grade: "C" }];

let newStudent = students.map((student)=>{
    return student.name;
})
    console.log(newStudent); */
    

/*     let students = [ { name: "John", marks: 85, grade: "A" },
{ name: "David", marks: 72, grade: "B" },
{ name: "Peter", marks: 90, grade: "A+" },
{ name: "Sarah", marks: 65, grade: "C" }];
let newResult=students.filter((student)=>{
    return student.marks >=80;
})
console.log(newResult); */


/* //------------------------------------------------
function display (callback){
    console.log("Hello");
    callback();
}
function display2(){
    console.log("Learn JavaScript");
}
display(display2); */

let atmPromise=new Promise((resolve,reject)=>{
    let balance=10000;
    let withdrwal=3000;
    if(balance>=withdrwal){
        resolve ("Transcation is successful");
    }
    else{
        reject ("Transcation failed");
    }
})
atmPromise.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});