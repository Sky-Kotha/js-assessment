function businessHours(day, hour){
    if(day!="Sunday" && hour>=9 && hour<=18){
        return true;
    }else{
        return false;
    }
}
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let hour = d.getHours();
let day = weekday[d.getDay()];
console.log(businessHours(day, hour));

