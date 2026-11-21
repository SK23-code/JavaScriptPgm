/* let myPromise=new Promise((resolve,reject)=>{
let payment=true;
if(payment){
    resolve("Payment successful");
}
else{
    reject("Payment Failed");
}
});
myPromise.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
}); */

//-----------------------------------
let getData=()=>{
return new Promise((resolve)=>{
setTimeout(()=>{
 resolve("Data Received");
},2000);
});
} 

async function displayData(){
    console.log("Fetching Data");
   let result= await getData();
   console.log(result);
}
displayData();