let i=0;
let sum=0;
let count=0;
 
while(i <= 100){
  if(i % 2 === 0){
    sum+=i;
    count++;
  }
  i++
}
let average = sum / count;
console.log(average)

