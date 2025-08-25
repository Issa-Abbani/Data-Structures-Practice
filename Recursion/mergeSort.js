let arr = [7,6,2,2,5];
//merge sort
function mergeSort(arr){
  if(arr.length < 2) return arr; //This is the base case

  const mid = Math.floor(arr.length/2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return(merge(left, right));
}

function merge(left, right){
  let res = [];
  let i = 0, j = 0;
  while(i < left.length && j< right.length){
    if(left[i] < right[j]){
      res.push(left[i]);
      i++;
    }else{
      res.push(right[j]);
      j++;
    }
  }

  return (res.concat(left.slice(i)).concat(right.slice(j)));
}
