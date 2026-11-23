
// Create a java script program to store information about a student.
/* 
let studentName="Sreekanth";
let age=25;
let courseName="BTech";
let isEnrolled=true;
const subjects=["c++","Networking","OOPS","DS"];
console.log("studentName is:",studentName);
console.log("age is:",age);
console.log("courseName :",courseName);
console.log("Is student currently enrolled :",isEnrolled);
console.log("List of Subjects: ",subjects); */



/* let javaScript=75;
let testing=80;
let automation=70;
let totakMarks=(75+80+70);
let averageMarks=(totakMarks/3);
let javaScriptMarks=javaScript>=40 && javaScript===75;
console.log("JavaScript Marke :",javaScript);
console.log("Total Marks : ",totakMarks);
console.log("Average Marks :",averageMarks);
console.log("JavaScript Pass :",javaScriptMarks); */


//Create a JavaScript program to store an employee's attendance percentage.

/* let attendance=80;
if(attendance>=75){
    console.log("Employee is eligible for the examination");
} */
// else{

//     console.log("Employee is not eligible for the examination");
// }
 


//Create a JavaScript program that stores a browser name.

/* let browser="DND";
switch(browser){
    case "Edge":console.log("Browser :",browser);
           console.log("Running tests on Edge");
    break;
    case "Chrome":console.log("Browser :",browser);
           console.log("Running tests on Chrome");
    break;
    case "Firefox":console.log("Browser :",browser);
           console.log("Running tests on Firefox");
    break;
    case "Safari":console.log("Browser :",browser);
           console.log("Running tests on Safari");
    break;
    default:console.log("Unsupported browser");
}
 */

//Write a JavaScript program to generate and display the multiplication table of 5 using a for loop.

/* let value=5
for(let i=1;i<=10;i++){
       let result="5 x " + i +"="+ value*i;
       console.log(result);
} */

/* let number=1;
while(number<=10){
       let result="5 X " +  number + "=" + 5 * number ;
       console.log(result);
       number++;
} */


// String reverse using do while.

/* 
let str="JavaScript Programming";
let reverse=" ";
let i=str.length-1;
do{
  reverse = reverse +str[i];
  i--;
}while(i>=0){
console.log("Original String :",str);
console.log("Reverse String :",reverse);
}
 */


// Greatest of two numbers

/* let numb1=120;
let numb2=200;
if(numb2>=numb1){
       console.log("numb2 is greater");
}
else if(numb1>=numb2){
       console.log("numb1 is greater");
}
else{
       console("Both numb1 and numb 2 are equal");
} */

// To print 1 to 10,but stops at 5 using break
      /*  let i=1;
       for(i=1;i<=10;i++){
              console.log(i);
              if(i==5){
                     break;
              }
       } */

              let i=1;
              while(i <=10){
                     if (i==5){
                            i++;
                            continue;
                     }
                     console.log(i);
                     i++;
              }