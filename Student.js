function Student(name, grades) {
    this.name = name;
    this.grades = grades;
   this.avarage = function (){
let collect = 0;
for (let i = 0; i < this.grades.length; i++) {
    collect += this.grades[i];
   
}
   
return collect / this.grades.length;
   }
 
}
function addStudent(students, student) {
    return [...students, student];
}
 function removeStudent(students, student) {
    return students.filter(function(nam) {return nam.name !== student.name});
 }
function highestGrade(students) {
    let highest =  students[0];
        if (students.length === 0) {
        return null;
        }
    for (let i = 1; i < students.length; i++) {
        if (students[i].avarage() > highest.avarage()) {
            highest = students[i];
        }
    }
    return highest.name +" have the best grade by "+ highest.avarage();
}

const student1 = new Student("Abd", [67, 80, 70]);
const student2 = new Student("Ahmad", [85, 91, 75]);
const students = [student1, student2];
const student3 = new Student("Omar", [90, 80, 85]);

const newStudents = addStudent(students, student3);



console.log(student1.avarage()); 
console.log(student2.avarage()); 
console.log(student3.avarage());

console.log(highestGrade(newStudents));
