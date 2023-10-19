arr=[
	{name: "Nrupul", age: 32},
	{name: "Prateek" , age: 30},
	{name: "Aman" , age: 26},
	{name: "Albert" , age: 28},
	{name: "Yogesh" , age: 44},
]
let obj = {};

for (let index in arr) {
  let user = arr[index];
  obj[user.name] = user.age;
}
for (let name in obj) {
  if (obj[name] > 30) {
    console.log(name);
  }
}
