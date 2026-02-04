const student = {
    firstName: 'Amber',
    lastName: 'Gill',
    studentId: '12345',
    courses: [],
    getFullName() {
        return this.firstName + " " + this.lastName;},
    
    enrollCourse(courseName) {
        this.courses.push(courseName);
    },

    getCourseCount(){
        return this.courses.length;
    }

};

console.log(student.getFullName()); 

student.enrollCourse('CMPS2212');
student.enrollCourse('MATH2210');

console.log("Course Count:", student.getCourseCount());
