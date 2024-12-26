class Stack {
    constructor() {
      this.items = {};
      this.top = 0;
    }
  
    push(element) {
      this.items[this.top] = element;
      this.top++;
    }
  
    pop() {
      const item = this.items[this.top - 1];
      delete this.items[this.top - 1];
      this.top--;
      return item;
    }
  
    peek() {
      return this.items[this.top - 1];
    }
  
    size() {
      return this.top;
    }
  
    isEmpty() {
      return this.top === 0;
    }
  
    print() {
      console.log(this.items);
    }
  }

  const stackInstObj=new Stack()
  console.log(stackInstObj.isEmpty())
stackInstObj.push(46);
stackInstObj.push(36);
stackInstObj.push("asheque");
stackInstObj.push({});
console.log(stackInstObj.pop())// delete last index value
console.log(stackInstObj.peek());// top index value
console.log(stackInstObj.size());
console.log(stackInstObj.print());
console.log(stackInstObj.top);// highest/top index number
// console.log(stackInstObj.items); // output: {"0":46,"1":36,"2":"asheque"}