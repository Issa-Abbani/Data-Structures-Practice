function mergeSort(arr){
  if(arr.length < 2) return arr;

  const mid = Math.floor(arr.length/2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  let sorted = []
  let i = 0 , j = 0;

  while(i < left.length && j < right.length){
    if(left[i] < right[j]){
      sorted.push(left[i]);
      i++
    }else{
      sorted.push(right[j]);
      j++;
    }
  }

  return sorted.concat(left.slice(i)).concat(right.slice(j));
}


class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null;
  }

  isEmpty(){
    return this.root === null;
  }

  clear() {
    this.root = null;
  }

  #buildTree(arr){//Array passed as argument must be sorted!
    if(arr.length === 0) return null;

    const mid = Math.floor(arr.length / 2);
    const root = new Node(arr[mid]);

    root.left = this.#buildTree(arr.slice(0, mid));// [0,mid[
    root.right = this.#buildTree(arr.slice(mid+1));//We said mid + 1 because we skipped the root node
    
    return root;
  }

  fromArrayToTree(arr){
    if(arr.length === 0) return null;
    arr = mergeSort(arr);
    this.root = this.#buildTree(arr);
  }

  insert(value){
    const newNode = new Node(value);
    if(this.isEmpty()){
      this.root = newNode;
      return;
    }else{
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(current, newNode){
    if(newNode.value >= current.value){
      if(current.right === null){
        current.right = newNode;
      }else{
        this.insertNode(current.right, newNode);
      }
    }else{
      if(current.left === null){
        current.left = newNode;
      }else{
        this.insertNode(current.left , newNode);
      }
    }
  }

  search(root, value){
    if(root === null) return false;
    if(value === root.value) return true;
    if(value >= root.value){
      return this.search(root.right, value);
    }else{
      return this.search(root.left, value)
    }
  }

  printValue(node){
    console.log(node.value);
  }

  preOrderForEach(callback, root = this.root){
    if(root){
      callback(root);
      this.preOrderForEach(callback, root.left);//Starting at the leftmost branch
      this.preOrderForEach(callback, root.right);//After traversing all left, go to rightmost branch
    } 
  }

  inOrderForEach(callback, root = this.root){
    if(root){
      this.inOrderForEach(callback,root.left);
      callback(root);
      this.inOrderForEach(callback,root.right);
    }
  }

  postOrderForEach(callback, root = this.root){
    if(root){
      this.postOrderForEach(callback,root.left);
      this.postOrderForEach(callback,root.right);
      callback(root);
    }
  }

  levelOrderForEach(callback){
    const queue = [];
    queue.push(this.root);

    while(queue.length){
      let curr = queue.shift();
      callback(curr);
      if(curr.left) queue.push(curr.left);
      if(curr.right) queue.push(curr.right);
    }
  }

  min(root){
    if(!root.left){
      return root.value;
    }else{
      return this.min(root.left);
    }
  }

  max(root){
    if(!root.right){
      return root.value;
    }else{
      return this.max(root.right);
    }
  }

  deleteItem(value){
    this.root = this.deleteNode(this.root , value)
  }

  deleteNode(root, value){
    if(root === null) return root;

    if(value > root.value){
      root.left = this.deleteNode(root.left, value);
    }else if (value < root.right){
      root.right = this.deleteNode(root.right, value);
    }else{

      //Case 1: No children
      if(!root.left && !root.right){
        return null;
      }

      //Case 2: 1 child
      if(!root.left){
        return root.right
      }else if(!root.right){
        return root.left;
      }

      //Case 3: 2 children
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value)

      return root;
    }
  }
}