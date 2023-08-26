const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
  ];


const studentFeedback =  () => {
    function feedbackName(studentGrades) {
        
        if (studentGrades.grade >= 90) {
            return `Excellent Job ${studentGrades.name}, you got an a`
        }
        else if (studentGrades.grade >= 80) {
            return `Nice Job ${studentGrades.name}, you got an b`
        }
        else if (studentGrades.grade >= 70) {
            return `Well done ${studentGrades.name}, you got an c`
        }
            else if (studentGrades.grade >= 60) {
                return `What happened ${studentGrades.name}, you got an d`
        }
        else {
            return `Not good ${studentGrades.name}, you got an f`
        }
           
        
        
    }
    return feedbackName;
}



console.log(studentGrades.map(studentFeedback()))
