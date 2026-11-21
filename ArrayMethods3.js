let fruits=["Apple","Orange","Grape"];
fruits.push("Banana"); // Adding element at the end of an Array
console.log(fruits);
// ------------------------------------------------------------------

let fruits1=["Apple","Orange","Grape"];
fruits1.pop(); // To delete the last element from the array
console.log(fruits1);

//-------------------------------------------------------------------

let fruit2=["Apple","Orange","Grape"];
fruit2.unshift("Kiwi"); // To add an element in the beginning of an array
console.log(fruit2);

// ---------------------------------------------------------------------

let fruit3=["Apple","Orange","Grape"];
fruit3.shift(); // To remove first element from an array
console.log(fruit3);
//-----------------------------------------------------------------------


let fruit4=["Apple","Orange","Grape"];
fruit4.splice(1,1);//  start index , how many elements to be deleted
console.log(fruit4);

//-------------------------------------------------------------------------

let fruit5=["Apple","Orange","Grape","Banana","Guva"];
let result=fruit5.slice(1,3); // To select the elements from the given index. Stat index=1, it selects index from 1,2
console.log(result);
console.log(fruit5);

//------------------------------------------------------------------------------
let fruit6=["Apple","Orange","Grape"];
console.log(fruit6.indexOf("Orange"));// To print the index of elemets in array
//--------------------------------------------------------------------------------

let fruit7=["Apple","Orange","Grape"];
console.log(fruit7.indexOf("KIWI"));

//---------------------------------------------------------------------------------

let numbers=[10,20,30,40,20,50];
console.log(numbers.lastIndexOf(20));
//----------------------------------------------------------------------------------

let fruit8=["Apple","Orange","Grape"];
console.log(fruit8.includes("Orange"));// The array conatin the element
console.log(fruit7.includes("Guva"));
//------------------------------------------------------------------------------------

let numbers1=[10,20,30,40,20,50];
numbers1.sort((a,b)=>(a-b)); // Sort array in ascending order
console.log(numbers1);

//------------------------------------------------------------------------------------
let numbers2=[10,20,30,40,20,50];
numbers2.sort((a,b)=>(b-a)); // Sort array in desc order
console.log(numbers2);

//------------------------------------------------------------------------------------

let fruit9=["Apple","Orange","Grape"];
console.log(fruit9.reverse()); // To print reverse array