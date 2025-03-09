// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. 
// Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."



interface Person {
	name: string;
	age: number;
}


function getData(User:Person){
    if (User.age > 18 ) {
        console.log("Adult");
    }
    else{
        console.log("Minor");
    }
}


// Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects). 
// Print all the subjects the teacher teaches.



interface Teacher {
    name: string;
    subjects:string[];
}

let teacherOne: Teacher = {
    name:"FARAH",
    subjects:["MATH", 'Arabic']
}

teacherOne.subjects.forEach(s=> {
    console.log(teacherOne.subjects)
})


// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity. 
// Write a script to decrease the price of each product by 15% if the quantity is greater than 5.



interface Product{
    name:string,
    price:number,
    quantitiy:number
}

const product: Product[] = [
    {
        name: "Laptop",
        price: 999.99,
        quantitiy:5
    },
    {
        name: "Headphones",
        price: 149.99,
        quantitiy:5
    },
    {
        name: "Smartphone",
        price: 799.99,
        quantitiy:5
    }
];

function sale(product:Product[]){
    for(let i=0; product.length;i++){
        if (product[i].quantitiy > 5 ){
            product[i].price = product[i].price * 0.15
        }
    }
}

// Task 4 : Create a form inside the HTML page that contains inputs for ( name , description, price and quantity) 
// for product and when you submit the form it will save the product inside array in the local storage and then display 
// all the products as a cards under the form.
// *use interface to create a structure for this product 


interface Products{
    name:string,
    description:string,
    price:number,
    quantitiy:number
}

function Add(){
    var name = (document.getElementById('name') as HTMLInputElement)?.value;
    var description = (document.getElementById("description") as HTMLInputElement)?.value;
    var price = (document.getElementById("price") as HTMLInputElement)?.value;
    var quantity = (document.getElementById("quantity") as HTMLInputElement)?.value;

    localStorage.setItem("name", name);
    localStorage.setItem("description", description);
    localStorage.setItem("price", price);
    localStorage.setItem("quantity", quantity);

    ShowProdect();



}

function ShowProdect(){
    var productsContainer = document.getElementById('productsContainer') ;
    if (productsContainer) {
        productsContainer.innerHTML += `${localStorage.getItem("name")}
    ${localStorage.getItem("description")}
    ${localStorage.getItem("price")}
    ${localStorage.getItem("quantity")}`
    }
}












