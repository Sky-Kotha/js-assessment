const findCost = transaction => {
    let cost= transaction + 3 + transaction*0.01;
    return cost;
}
const tr1=findCost(20);
console.log("$"+tr1);
const tr2=findCost(10);
console.log("$"+tr2);

const ps= require("prompt-sync");
const prompt= ps();

let c= prompt("Enter name: ");
console.log(c);
