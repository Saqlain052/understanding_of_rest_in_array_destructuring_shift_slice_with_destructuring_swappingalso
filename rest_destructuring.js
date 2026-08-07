
function getFirstandRest(array){
    
    let[a,...rest] = array;
[a,rest[0]] = [rest[0],a];
return [a,rest];

    
}

console.log(getFirstandRest([1,23,45,65,43,22,2,3,4]));

