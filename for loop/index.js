// shopping Discount
// Task:Calculate the final price of an iteam based on a purchaseAMOUNT:
// $100 or more, 20% discount
// $50 TO $99.99, 10% discount
//UNDER $50, no discount

let amount=130;
let discount=0;
let finalPrice=0;

if (amount>=100){
    discount=amount*0.2;
}
else if (amount>=50 && amount<100){
    discount=amount*0.1;
}
else{
    discount=0;
}
finalPrice=amount-discount;
console.log("Final Price: $"+finalPrice);

