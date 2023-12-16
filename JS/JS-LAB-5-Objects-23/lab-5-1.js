//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject = {
    name: "Suyash Kulkarni",
    age: 24,
    course: "Web Development",
    subjects:["http5110","http5112"],
    myData: function(){
       alert("My name is " + meObject.name + " and I am enrolled in " + meObject.course);
        alert("My subjects are " + meObject.subjects[0] + " and " + meObject.subjects[1]);
    }
};

//  CONSOLE ONE OF THE PROPERTIES FOR THE OBJECT
console.log(meObject.age);

// OUTPUT OF TWO PROPERTIES CONCATENATED 
//alert("My name is " + meObject.name + " and I am enrolled in " + meObject.course);


// CALLING THE FUNCTION OF THE OBJECT
meObject.myData();