// FIFO rule
class Queue{
    constructor (){
        this.items={}
        this.rear=0;// value -1 dhorle problem ache, jokhon dequeue er pore enqueue kora hoy index change hoye jay.
        this.front=0;
    }
    enqueue(element){
        // index key akare obj new value add kora hocche
this.items[this.rear]=element;// since it's an obj, so push isn't suitable. that's why, inserted by key-value pair(where key will be like array's index e.g {'0':56,'1':23, '2':49, so on})
this.rear++
    }
    dequeue(){
     const selectedFrontItem=  this.items[this.front];
     delete this.items[this.front]
     this.front++
     return selectedFrontItem
    }
    isEmpty(){
       return this.rear-this.front===0
    }
    size(){
        return this.rear-this.front
    }
    print(){
        console.log(this.items);
    }
    
}
const queueInstObj=new Queue()
console.log(queueInstObj);
console.log(queueInstObj.isEmpty(),"boolean");
queueInstObj.enqueue(56);
queueInstObj.enqueue(38);
queueInstObj.enqueue(38);
queueInstObj.enqueue(38);
console.log(queueInstObj);
console.log(queueInstObj.size(),"size before dequeue");
console.log(queueInstObj.dequeue(),"dequeue element")
console.log(queueInstObj);
console.log(queueInstObj.size(),"size after dequeue")
queueInstObj.enqueue(31);
console.log(queueInstObj.dequeue());
console.log(queueInstObj.dequeue());
console.log(queueInstObj.dequeue());
// console.log(queueInstObj.dequeue());
console.log(queueInstObj.isEmpty(),"boolean last");
queueInstObj.print()
console.log(queueInstObj,"full insObj finally");