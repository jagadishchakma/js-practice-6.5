// find the divisor of 1-50 by 3 and 5
let divisor = [];
for(let i = 1; i <= 50; i++){
    if(i % 3 == 0 && i % 5 == 0){
        divisor.push(i);
    }
}
console.log(divisor);