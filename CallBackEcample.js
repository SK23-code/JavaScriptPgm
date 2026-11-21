// callback can be used anywhere only within the class. i.e., not from other classes

function greet(name,callback){
    console.log(name);
    callback();
}
function Message(){
    console.log("Welcome to JS");
}
greet("Sree",Message);

//-----------------------------------------------

console.log("Program Started");