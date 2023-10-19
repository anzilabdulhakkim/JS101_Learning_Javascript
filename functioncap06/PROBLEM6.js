function toLowerCase(str){
  let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase="abcdefghijklmnopqrstuvwxyz";
  let lower="";
  for(let i=0;i<str.length;i++){
    for(let j=0;j<uppercase.length;j++){
      if(str[i] == uppercase[j]){
        lower+=lowercase[j]
      }
    }
  }
  return lower;
}
function toUpperCase(str){
  let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase="abcdefghijklmnopqrstuvwxyz";
  let upper="";
  for(let i=0;i<str.length;i++){
    for(let j=0;j<lowercase.length;j++){
      if(str[i] == lowercase[j]){
        upper+=uppercase[j]
      }
    }
  }
  return upper;
}
let str="Test"
let result=toLowerCase(str)+toUpperCase(str)
console.log(result)
