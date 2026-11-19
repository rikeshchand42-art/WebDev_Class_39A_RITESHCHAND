// 5. Largest of Three Numbers
// • Task: Given three numbers a, b, and c, find and log the
// largest one without using Math.max().

let a = 10;
let b = 20;
let c = 15; 

if (a >= b && a >= c) {
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
} else {
    console.log(c);
}