function orderFood(callback){
console.log("Food Ordered");
setTimeout(()=>{
    console.log("Food is Ready");
    callback();
},3000);
}
function receivedFood(){
    console.log("Food Received");
}
orderFood(receivedFood);

