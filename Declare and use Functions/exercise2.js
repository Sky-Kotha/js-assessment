const greet = arr => {
    console.log(`Welcome ${arr[0]} and you are ${ageFind(2001)}.`);
    console.log(`Welcome ${arr[1]} and you are ${ageFind(2004)}.`);
    console.log(`Welcome ${arr[2]} and you are ${ageFind(1999)}.`);
}
const ageFind = year => {
    const currentyear=2023;
    return currentyear-year;
}

greet(['sam','sai','mani']);
