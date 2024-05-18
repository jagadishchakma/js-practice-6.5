// grade making exam
function assignGrade(score) {
    let grade;
    if (score >= 80) {
      grade = 'A+';
    } else if (score >= 70 && score <= 80) {
      grade = 'A';
    } else if (score >= 60 && score <= 70) {
      grade = 'A-';
    } else if (score >= 50 && score <= 60) {
      grade = 'B';
    } else if (score >= 40 && score <= 50) {
      grade = 'C';
    } else if (score >= 33 && score <= 40) {
        grade = 'D';
    } else {
      grade = 'F';
    }
    console.log(`The grade is ${grade}`);
  }
  

  assignGrade(34); 
  