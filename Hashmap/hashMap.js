class HashTable{
  constructor(size){
    this.table = new Array(size);
    this.size = size;
  }

  hash(key){
   let hashCode = 0;
      
   const primeNumber = 31;
   for (let i = 0; i < key.length; i++) {
     hashCode = primeNumber * hashCode + key.charCodeAt(i);
   }

   return hashCode % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    let bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find(item => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);   
      }
    }
  }


  get(key){
    const index = this.hash(key);
    const bucket = this.table[index];
    if(bucket){
      const sameKeyItem = bucket.find(item => item[0] === key);
      if(sameKeyItem){
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      this.table[index] = bucket.filter(item => item[0] !== key);
      if (this.table[index].length === 0) {
        this.table[index] = undefined;
      }
    } else {
      console.log('Not Found');
    }
  }


  display(){
    for(let i = 0; i < this.table.length; i++){
      if(this.table[i]){
        console.log(this.table[i]);
      }
    }
  }
}