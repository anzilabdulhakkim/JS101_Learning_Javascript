function is_space(str){
  let bag=""
  for(let i=0;i<str.length;i++){
    if(str[i] == " "){
      bag+="-"
    }
    else{
      bag+=str[i]
    }
  }
  console.log(bag)
}
is_space("Hello world")