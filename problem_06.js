// find the highest bigger name holding
let friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let leng = 0;
let longName = "";
friends.forEach(value=>{
    if(leng < parseInt(value.length)){
        leng = parseInt(value.length)
        longName = value;
    }
})

console.log(longName);


