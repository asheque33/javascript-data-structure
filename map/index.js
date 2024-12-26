// ? Map-> built in data structure in js
const map=new Map([["age",25],["weight",45]]);//* Map constructor optionally accepts one array as parameter which has smaller arrays length 2 as its elements[key,value].
//! add values to the map array
map.set("height","5.3``")// here, set is method, not the data structure
console.log(map.has("age"));
console.log(map.delete("age"));
console.log(map.size);
// for(const value of map.values){
//     console.log(value);
// }
// for(const [key,value] of map){
//     console.log(`${key}: ${value}`);
// }
