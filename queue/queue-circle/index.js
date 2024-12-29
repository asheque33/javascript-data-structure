//todo: enqueue-> increase rear index no.
//todo: dequeue-> existing index elemtent->null(empty) + increase front index no. 
class CircularQueue{
    constructor(capacity){ 
// max capacity/size is fixed, so take a parameter in the constructor which is that size value
this.items=new Array(capacity);
this.capacity=capacity;
this.currentLength=0;
this.front=-1;
this.rear=-1;
}
isFull(){
    return this.currentLength===this.capacity;
}
isEmpty(){
return this.currentLength===0;
}
size(){
return this.currentLength;
}
enqueue(element){
    if(!this.isFull()){
        this.rear=(this.rear+1)%this.capacity;// eg (4+1)%5=0;i.e indexOf(rear)=0; (0+1)%5=1;
this.items[this.rear]=element;
this.currentLength+=1;
if(this.front===-1){
    this.front=this.rear;
}
    }
}
dequeue(){
    if(this.isEmpty()){
        return null;
    }
    const item=this.items[this.front]
    this.items[this.front]=null;
    this.front=(this.front+1)%this.capacity;//eg. (1+1)%5=2; indexOf(front)=2;
    this.currentLength--;
    if(this.isEmpty()){
        this.front=-1;
        this.rear=-1;
    }
    return item;
}
peak(){
    if(!this.isEmpty()){
        return this.items[this.front]
    }
return null;
}
print(){
    if(this.isEmpty()){
        console.log(`Queue is empty!`);
    }else{
        let i;// start font to rear
        let str= "";
        for( i=this.front; i!==this.rear;i=(i+1)%this.capacity){// loop continues until value of front, i != rear
            str=str+this.items[i]+ " ";
        }
        str=str+this.items[i];// i=rear হওয়া  element loop না  প্রবেশ করে str এর last value হিসেবে concat  হয়ে গেছে 
        console.log(str);
    }
}
}

const circularQueueInstance=new CircularQueue(6);
console.log(circularQueueInstance,"initially");
circularQueueInstance.enqueue(45)
circularQueueInstance.enqueue(55)
circularQueueInstance.enqueue(65)
circularQueueInstance.enqueue(75)
circularQueueInstance.enqueue(85)
console.log(circularQueueInstance,"after pushed 5 elements out of 6");
console.log(circularQueueInstance.dequeue(),"first dequeue");
circularQueueInstance.enqueue(95)
console.log(circularQueueInstance,"after dequeue->enqueue->?");
circularQueueInstance.enqueue(105)
console.log(circularQueueInstance,"after dequeue+enqueue+enqueue->?");
console.log(circularQueueInstance.dequeue(),"2nd time dequeue");
circularQueueInstance.enqueue(35)
console.log(circularQueueInstance,"after dequeue+enqueue+enqueue+dequeue->?");
console.log(circularQueueInstance.isFull());
circularQueueInstance.print()// remind it that this queue is circular queue;