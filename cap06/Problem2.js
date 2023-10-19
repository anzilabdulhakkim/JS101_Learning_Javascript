let arr=[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]
let obj={}
for (let index in arr) {
  let gradeData = arr[index];
  let highestTotalMarks = 0;
  let highScore = "";

  for (let student_no in gradeData.students) {
    let student = gradeData.students[student_no];
    let totalMarks = 0;
    for (let i = 0; i < student.marks.length; i++) {
      totalMarks += student.marks[i];
    }
    
    if (totalMarks > highestTotalMarks) {
      highestTotalMarks = totalMarks;
      highscore = student.name;
    }
  }
  obj[gradeData.grade] = gradeData.grade+"-"+highscore+"-"+highestTotalMarks;
}
for (let grade in obj) {
  console.log(obj[grade]);
}
