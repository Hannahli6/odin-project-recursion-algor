function LinkedList() {
  return {
    head: null, //initial head pointer is null when there are no nodes
    tail: null,
    size: 0,
    isEmpty() {
      return this.size === 0;
    },
    append(value) {
      const newNode = Node(value);
      if (this.isEmpty()) {
        this.head = newNode;
        this.size++;
      } else {
        let pointer = this.head;
        while (pointer.nextNode != null) {
          pointer = pointer.nextNode;
        }
        pointer.nextNode = newNode;
        newNode.nextNode = null;
        this.tail = newNode;
        this.size++;
      }
    },
    prepend(value) {
      const newNode = Node(value);
      newNode.nextNode = this.head; // make the new node point to the last head node
      this.head = newNode; //assign the new node to be the head
      this.size++;
    },
    getSize() {
      return this.size;
    },
    getHead() {
      return this.head;
    },
    getTail() {
      if (this.isEmpty()) {
        return null;
      } else {
        let pointer = this.head;
        while (pointer.nextNode != null) {
          pointer = pointer.nextNode;
        }
        return (this.tail = pointer);
      }
    },
    at(index) {
      if (this.isEmpty()) {
        return null;
      } else {
        let pointer = this.head;
        for (let i = 0; i < index; i++) {
          pointer = pointer.nextNode;
        }
        return pointer;
      }
    },
    pop() {
      if (this.isEmpty()) {
        return null;
      } else {
        let pointer = this.head;
        let tailNode = this.getTail();

        while (pointer.nextNode != tailNode && pointer.nextNode) {
          pointer = pointer.nextNode;
        }
        pointer.nextNode = null;
      }
    },
    contains(value) {
      if (this.isEmpty()) {
        return null;
      } else {
        let tailNode = this.getTail();
        let pointer = this.head;
        while (pointer.value != value) {
          if (pointer === tailNode) {
            return false;
          }
          pointer = pointer.nextNode;
        }
        return true;
      }
    },
    find(value) {
      let indexCounter = 0;
      let pointer = this.head;
      if (!this.contains(value)) {
        return null;
      } else {
        while (pointer.value != value) {
          indexCounter++;
          pointer = pointer.nextNode;
        }
        return indexCounter;
      }
    },
    toString() {
      let pointer = this.head;
      let string = ``;
      while (pointer) {
        string += `( ${pointer.value} ) -> `;
        pointer = pointer.nextNode;
      }
      string += `null `;
      return string;
    },
    print() {
      if (this.isEmpty()) {
        console.log("list is empty");
      } else {
        let pointer = this.head;
        let listValues = "";
        while (pointer) {
          listValues += `${pointer.value} `;
          pointer = pointer.nextNode;
        }
        console.log(listValues);
      }
    },
  };
}

function Node(input) {
  return { value: input || null, nextNode: null };
}

const list = LinkedList();
list.append(5);
list.append(10);
list.prepend(20);
list.prepend(30);
// list.prepend(40);
list.pop();
console.log("head: ", list.getHead());
console.log("tail: ", list.getTail());
console.log("contains:", list.contains(5));
console.log("size:", list.getSize());
console.log("at index 0", list.at(0));
console.log("find value: ", list.find(5));
console.log("to string: ", list.toString());
list.print();
