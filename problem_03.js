// have an number(1-20) array you need to arranging these numbers ascending
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
numbers.sort((a,b)=>a-b);
console.log(numbers)
numbers.sort((a,b)=>b-a);
console.log(numbers);
