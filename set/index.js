const set = new Set(["akib","rakib"])//arguments can be any data type, but most useful for using an array[elem1,elem2,elem3 etc..].
set.add("sakib")// add as last element in the array
console.log(set.has("rakib"));//boolean(existed or not)
console.log(set.delete("akib"));//boolean(existed & delete or not existed)
for(const value of set){console.log(value);}
console.log(set.clear())//remove all elements & in console-> print: undefined;
// console.log(set.clear());