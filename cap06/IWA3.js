let numbers=[1,2,3,4];
let sum=0;
let count=0;
for(var i=0;i < numbers.length;i++){
  if(numbers[i] % 2 === 0){
    sum+=numbers[i];
    count++
  } 
}
console.log("average =",sum/count)
