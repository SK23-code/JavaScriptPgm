let findLargest = (a,b,c)=>{
if(a>b && a>c){
    console.log("a is largest");
}
else if(b>a && b>c){
    console.log("b is largest");
}
else
    console.log("c is latgest");
}
findLargest(10,25,15);