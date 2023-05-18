const names = ["Maria", "Antony", "Joy", "Juan"];
const setName = (name,arr) => {
    arr.push(name);
    return arr;
}
const checkName= (name,arr) => {
    const ans= arr.includes(name);
    return ans;
}
const matchNames= (arr1,arr2) => {
    const intersection = arr1.filter(element => arr2.includes(element));
    return intersection;
}
const nameLength= arr => {
    const ans=[];
    for(let i=0;i<arr.length;i++){
        let str=arr[i];
        ans.push(str.length);
    }
    return ans;
}

console.log(setName('sai',names));
console.log(checkName('Joy',names));
console.log(matchNames(['sai','Joy','sam'],names));
console.log(nameLength(names));



