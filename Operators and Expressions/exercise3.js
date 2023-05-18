const numberRange= n => {
    if(n<0){
        console.log(`${n} is less than 0`);
    }
    else if(n>-1 && n<26){
        console.log(`${n} is between 0 and 25`);
    }
    else if(n>25 && n<101){
        console.log(`${n} is between 26 and 100`);
    }
    else{
        console.log(`${n} is greater than 100`);
    }
}

numberRange(25);   
numberRange(75);   
numberRange(125);  
numberRange(-25);