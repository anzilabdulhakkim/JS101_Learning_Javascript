function includes(arr,element){
  for(let i=0;i<arr.length;i++){
    if(arr[i] === element){
      return true;
    }
    if (isNaN(element) && isNaN(arr[i])) {
      return true;
    }
  }
  return false;
}
let arr=[1,2,3,4,NaN]
console.log(includes(arr,3));