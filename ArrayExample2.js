//To access 1st and last element in an array

/* let numbers=[10,20,30,40];
console.log("1st element",numbers[0]);
console.log("last element",numbers[numbers.length-1]); */


/* let mark=[50,60,65,70];
mark[2]=85;
console.log(mark); */

// for in loop. To get/return the index number of the array(not the index value)

/* let fruits=["Apple","Orange","Grape"];
for(let index in fruits){
    console.log(index);
} */


// to return index number and values

/* let students=["Anu","Riya","Manu"];
for(let index in students){
    console.log(index,students[index]);
} */


/* let marks1=[30,35,40,45,50];
let total=0;
for(let index in marks1){
   total = total + marks1[index];
}
console.log(total); */


//-----------------------------------------------------------------------------------------

// for of loop--> return value of each array index

/* let fruits=['Apple',"Orange","Grape"];
for(let fruit of fruits){
    console.log(fruit);
} */

    // Printing even number

    let numbers=[10,15,25,33,37];
    for(let even of numbers){
        if(even%2===0){
            console.log(even);
        }
    }