// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. 
// Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
function getData(User) {
    if (User.age > 18) {
        console.log("Adult");
    }
    else {
        console.log("Minor");
    }
}
var teacherOne = {
    name: "FARAH",
    subjects: ["MATH", 'Arabic']
};
teacherOne.subjects.forEach(function (s) {
    console.log(teacherOne.subjects);
});
var products = [
    {
        name: "Laptop",
        price: 999.99,
        quantitiy: 5
    },
    {
        name: "Headphones",
        price: 149.99,
        quantitiy: 5
    },
    {
        name: "Smartphone",
        price: 799.99,
        quantitiy: 5
    }
];
function sale(products) {
    for (var i = 0; products.length; i++) {
        if (products[i].quantitiy > 5) {
            products[i].price = products[i].price * 0.15;
        }
    }
}
// Task 4 : Create a form inside the HTML page that contains inputs for ( name , description, price and quantity) 
// for product and when you submit the form it will save the product inside array in the local storage and then display 
// all the products as a cards under the form.*use interface to create a structure for this product 
