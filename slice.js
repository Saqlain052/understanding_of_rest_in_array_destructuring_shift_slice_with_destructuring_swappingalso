
function getFirstandRest(array){
    
    let first_element = array.slice(0,1);
    let remaining_element = array.slice(1);
[first_element,remaining_element[0]]= [remaining_element[0],first_element]
return [first_element,remaining_element];

    
}

console.log(getFirstandRest([1,23,45,65,43,22,2,3,4]));