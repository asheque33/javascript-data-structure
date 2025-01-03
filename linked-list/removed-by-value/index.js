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
    return this.size===0;// comparative operator always return boolean
}
getSize(){
    return this.size;
}
indexedInsert(passingValue,index){
    if(index<0 || index>this.size){ // index(0) >= size(0) not valid to return null for insertion 
        return;
    }else if(index===0){
    const node = new Node(passingValue)
    console.log(node,"node");// output: {value:11,next:null} in every value insertion
    if(this.isEmpty()){
        this.head=node;// 1st node in initial e.g head=null into {value:11,next:null}
    }else{
        node.next=this.head;// নতুন নোডের next প্রপার্টিতে পুরনো head (বর্তমান লিস্টের প্রথম নোড) এর value  সেট করা হয়।
        //  নতুন নোড: { value: 20, next: Node { value: 10, next: null } }
        this.head=node;// নতুন নোড কে linkedList এর নতুন head হিসেবে select করা হয় 
    }
    this.size++;
    }else if(index>0){
 /* e.g To insert a node at index 2, we need a reference node at index 1;For that purpose we have to use a temporary pointer called previous - 
 * case-1 assume previous pointer at head node(0 index). Here, point new node's next pointer will be previous node next pointer, then connect previous node next to new node.
 */
const node = new Node(passingValue);
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
removedByValue(passingValue){
    let removedNode;// a variable just to hold a reference
if(this.isEmpty()){
    return null;
}else if(this.head.value===passingValue){
    this.head=this.head.next;
    this.size--;
    return passingValue;
}else if(this.head.value!==passingValue){
   let previousNode=this.head;
   while(previousNode.next&&previousNode.next.value!==passingValue){
       previousNode=previousNode.next;
    }
if(previousNode.next){//! truthy value-> not null
    removedNode=previousNode.next;
    previousNode.next=removedNode.next;
    this.size--;
    return passingValue;
}
   return null;
   } 
  
}

print() {
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
listInst.indexedInsert(11,0)
listInst.print()
console.log(listInst);
listInst.indexedInsert(21,1)
console.log(listInst);
listInst.print()
listInst.indexedInsert(31,2)
listInst.print()
console.log(listInst);
console.log(listInst.removedByValue(21))
listInst.print()//output: list values=> InsElem1
// listInst.indexedInsert(21,0)
// listInst.indexedInsert(21,0)
// listInst.indexedInsert(41,3)
// listInst.print()
// listInst.indexedInsert(51,4)
// console.log(listInst.removedByValue(53))

listInst.print()
console.log(listInst);






