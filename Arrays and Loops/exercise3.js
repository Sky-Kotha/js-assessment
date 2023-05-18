let x=5;
while(x>=0){
    console.log(x);
    x-=0.5;
}
let odd=1;
while(odd<=100){
    console.log(odd);
    odd+=2;
}
const Squarebracket= n =>{
    let i=1;
    while(i<=n){
        console.log("["+i+++"]");
    }
}
Squarebracket(5);

const sumNatural = n => {
    let ans=0;
    while(n>0){
        ans+=n;
        n--;
    }
    return ans;
}
const sum= sumNatural(5);
console.log(sum);
