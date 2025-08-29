class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  isEmpty(){
    return this.size === 0;
  }

  getSize(){
    return this.size;
  }

  getHead(){
    return this.head;
  }

  getTail(){
    if(this.isEmpty()) return;
    if(this.size === 1) return this.head;
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    return current;
  }

  prepend(value){
    const node = new Node(value);

    if(!this.isEmpty()){
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  append(value){
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(value, idx){
    if(idx < 0 || idx > this.size) return;
    if(this.isEmpty()){
      this.prepend(value);
    }else{
      const node = new Node(value);
      let current = this.head;

      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }

      node.next = current.next;
      current.next = node;
      this.size++;
    }
  }

  removeAt(idx){
    if(idx < 0 || idx >= this.size) return null;
    let toRemove;
    if(idx === 0){
      toRemove = this.head;
      this.head = this.head.next;
    }else{
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }

      toRemove = current.next;
      current.next = toRemove.next
      toRemove.next = null; //optional
    }
    this.size--;
    return toRemove.value; //optional
  }

  at(idx){
    if(this.isEmpty()) return null;
    if(idx < 0 || idx >= this.size) return null;
    let current = this.head;
    for(let i = 0; i < idx; i++){
      current = current.next;
    }
    return current;
  }

  pop(){
    if(this.isEmpty()) return;
    let current = this.head;
    let counter = 0;
    while(current.next){
      counter++;
      current = current.next;
    }
    this.removeAt(counter);
  }

  contains(target){
    if(this.isEmpty()) return false;
    let current = this.head;
    while(current){
      if(current.value === target){
        return true;
      }
      current = current.next;
    }
    return false
  }

  find(target){
    if(this.isEmpty()) return null;
    let current = this.head
    let counter = 0;
    while(current){
      if(current.value === target){
        return counter;
      }
      current = current.next;
      counter++;
    }
    return null;
  }

  print(){
    if(this.isEmpty()){
      console.log('Is empty!');
    } else{
      let current = this.head;
      let listValues = '';
      while(current){
        listValues += `(${current.value}) --> `;
        current = current.next
      }
      console.log(`${listValues}null`);
    }
  }
}