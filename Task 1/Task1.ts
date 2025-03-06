// Identify if a Number is Even or Odd
// You are given a variable num Check whether the number is even or odd, without using a function.

let num: number = 5;
if (num % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}




// Filter Expensive Products from an Array :
// You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.   

let prodect: number[] = [10, 20, 30, 40, 50, 60, 70];


for (let i = 0; i < prodect.length; i++) {
    if (prodect[i] > 30) {
        console.log(prodect[i]);
    }
}


// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements , without using a function.

let numbes: number[] = [10, 20, 30, 40, 50]
let sum: number = 0;
for (let i = 0; i < numbes.length; i++) {
    sum = sum + numbes[i];
}

console.log(sum);