// check an input number is leaf year or not
let inputYear = 2024;

if((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0){
    console.log("leaf year");
}else{
    console.log("Not leaf year ")
}