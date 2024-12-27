//* FIFO rule
class Queue{
    constructor(){
        this.items=[]
    }
    isEmpty(){
      return  this.items.length===0
    }
    enqueue(element){
       return this.items.push(element)// return the index of pushed element
    }
    dequeue(){
       return this.items.shift()// remove the 1st index element
    }
    peak(){
        if(!this.isEmpty()){
        return this.items[0]}
        return null
    }
    size(){
        return this.items.length
    }
    print(){
       return this.items.toString()
    }
}
const queueInstObj=new Queue();
console.log(queueInstObj.peak());
console.log(queueInstObj.enqueue(13));
console.log(queueInstObj.enqueue(5));
console.log(queueInstObj.isEmpty(),"isEmpty");// boolean
console.log(queueInstObj.enqueue(35));
console.log(queueInstObj.enqueue(56));
console.log(queueInstObj.enqueue(49));
console.log(queueInstObj);
console.log(queueInstObj.size(),"size");
console.log(queueInstObj.dequeue(),"dequeue i.e remove");
console.log(queueInstObj.enqueue(13),"enqueue after dequeue");
console.log(queueInstObj);
console.log(queueInstObj.peak(),"peak");
console.log(queueInstObj.print(),"print");
// console.log(queueInstObj.items.indexOf(56));