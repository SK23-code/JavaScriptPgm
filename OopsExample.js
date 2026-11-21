// 

class Student{
constructor(name,age,course){ //Constructor-->Method created automatically when an object is created.

    this.name=name;
    this.age=age;
    this.course=course;
}
    display(){
       /*  console.log("Name and Age:",this.name,this.age); */
        console.log(this.name,this.age,this.course);
    }
}

// creating object
/* 
let student1=new Student("Sree",36);
let student2=new Student("Hari",36); */
let student3=new Student("Ram",36,"CSE");
/* student1.display();
student2.display(); */
student3.display();



