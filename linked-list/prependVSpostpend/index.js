class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
constructor(){
    this.head=null;
    this.size=0;
}
isEmpty(){
    return this.size===0;
}
getSize(){
    return this.size;
}
//* prepend method-> Big-0=O(1) i.e constant time complexity;
prepend(passingValue){
const node = new Node(passingValue)// Node {value:passingValue, next:null}
console.log(node,"node");// output: {value:11,next:null} in every value insertion
if(this.isEmpty()){
    this.head=node;// 1st node in initial e.g head=null into {value:11,next:null}
}else{
    node.next=this.head;// নতুন নোডের next প্রপার্টিতে পুরনো head (বর্তমান লিস্টের প্রথম নোড) এর value  সেট করা হয়।
    //  নতুন নোড: { value: 20, next: Node { value: 10, next: null } }
    this.head=node;// নতুন নোড কে linkedList এর নতুন head হিসেবে select করা হয় 
}
this.size++;
}
//* postpend method-> Big-0=O(n) i.e linear time complexity;
postpend(passingValue){
    const node=new Node(passingValue);// Node {value:passingValue,next:null}
    console.log(node,"node postpend");// output: {value:11,next:null} in every value insertion
    if(this.isEmpty()){
        this.head=node;// 1st node in initial e.g head=null into {value:11,next:null}
    }else{
console.log(this.head);
let existingPrev=this.head;
console.log(existingPrev);
while(existingPrev.next){
existingPrev=existingPrev.next;
}
existingPrev.next=node;
    }
    this.size++;
}
fixedInsert(passingValue,index){
    if(index<0 || index>this.size){
        return;
    }else if(index===0){
this.prepend(passingValue)
    }else if(index>0){
 /* e.g To insert a node at index 2, we need a reference node at index 1;For that purpose we have to use a temporary pointer called previous - 
 * case-1 assume previous pointer at head node(0 index). Here, point new node's next pointer will be previous node next pointer, then connect previous node next to new node.
 */
const node = new Node(passingValue);//Node {value:passingValue,next:null}
let existingPrev=this.head;
console.log(existingPrev);
for(let i=0;i<index-1;i++){// 
existingPrev=existingPrev.next;
}
node.next=existingPrev.next;
existingPrev.next=node;
this.size++;
    }
}
print(){
    if(this.isEmpty()){
        console.log(`List is empty!`);
    }
    let current=this.head;// this.head হলো LinkedList ক্লাসের একটি প্রপার্টি, যা লিঙ্কড লিস্টের প্রথম নোডকে (head node) রেফার করে। অর্থাৎ, লিস্টের শুরুর পয়েন্ট।
    console.log(current?.next,"let current");/* Node {
        value: 31,
        next: Node { value: 21, next: Node { value: 11, next: null } }
      } */
    let listValues="";
    while(current){// current এর  value  falsy(null) হওয়ার আগ পর্যন্ত(অর্থাৎ লিস্টের শেষ নোড পর্যন্ত)
        listValues = listValues + `${current.value}` + " ";
        current=current.next;// current এর value gradually node traverse করে যেতে যেতে last node এর next value null পর্যন্ত যায় 
    }
console.log("list values =>",listValues);
}
}
const listInst=new LinkedList();
console.log(listInst,"initial listInst");//output: {head:null,size:0}
listInst.print()
// listInst.prepend(11)
// listInst.print()
listInst.postpend(91)
listInst.print()//output: list values=> InsElem1
// listInst.prepend(21)
// listInst.print()
listInst.postpend(81)
listInst.print()
// listInst.prepend(31)
// listInst.print()
listInst.postpend(71)
listInst.print()
// listInst.prepend(41)
// listInst.print()
listInst.postpend(61)
listInst.print()
console.log(listInst);






//todo: Visualization 
/*
শুরুর অবস্থা (পুরনো লিস্ট):
this.head:

Head -> [10] -> null

নতুন নোড ইনসার্ট করার পর:
নতুন নোড:

[20] -> null

node.next = this.head; লাইনের পর:

[20] -> [10] -> null

this.head = node; লাইনের পর:

Head -> [20] -> [10] -> null

*/