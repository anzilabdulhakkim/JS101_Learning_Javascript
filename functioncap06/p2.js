function lastindex(arr,word){
  for(let i=arr.length-1;i>=0;i--){
    if(arr[i] == word){
      return i
    }
  }
  return -1
}
let arr=['Dodo', 'Tiger', 'Penguin', 'Dodo']
console.log(lastindex(arr,"Dodo"))
