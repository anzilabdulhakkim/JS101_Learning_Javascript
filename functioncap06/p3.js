function myslice(arr,start=0,end=arr.length){
  let result=[];
  let length=arr.length;
  if (start < 0) {
    start = length + start;
    if (start < 0) {
      start = 0;
    }
  }
  if (end < 0) {
    end = length + end;
    if (end < 0) {
      end = 0;
    }
  }
  for(let i=start;i<end;i++){
    result.push(arr[i])
  }
  return result;
}

let arr=[1,2,3,4,5,6]
console.log(myslice(arr,2,6))