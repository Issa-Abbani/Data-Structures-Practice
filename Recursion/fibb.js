// With a loop
let firstPrev = 1;
let secondPrev = 0;

function fibLoop(n){
for(let i = 0; i<n; i++){
  console.log(secondPrev);

  let next = firstPrev + secondPrev;
  secondPrev = firstPrev;
  firstPrev = next;
}
}


//With recrsion
let fibbArr = [0,1];
function fibs(n){
if(fibbArr.length >= n){return;}
if(n === 0){
  fibbArr = [0];
  return;
}
fibbArr.push(fibbArr[fibbArr.length -1] + fibbArr[fibbArr.length -2]);
fibs(n);
}



