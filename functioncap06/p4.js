function mySubstring(str, start, end) {
  if (str == null) {
    return "";
  }
  if (start < 0) {
    start = 0;
  }
  if (end !== undefined && end < start) {
    end = start;
  }
  if (end === undefined || end > str.length) {
    end = str.length;
  }
  let result = "";
  for (let i = start; i < end; i++) {
    result += str[i];
  }
  return result;
}
let str="hello world!";
console.log(mySubstring(str,1,15))
