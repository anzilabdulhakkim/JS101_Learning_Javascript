function is_smallcase(char){
  let str="abcdefghijklmnopqrstuvwxyz";
  let found=0;
  for(let i=0;i<str.length;i++){
    if(str[i]==char){
      found=true
      break;
    }
  }
  if (found) {
    console.log(char, "is a small case");
  } 
  else {
    console.log(char, "is not a small case");
  }
}
is_smallcase("C")