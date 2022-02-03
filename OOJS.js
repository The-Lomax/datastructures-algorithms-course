// a class is a blueprint for creating objects with 
// pre-defined properties and methods

class Student {
    constructor(firstName, lastName, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.absences = 0;
        this.banned = false;
    }
    sayHi() {
        console.log(`Hello! I am ${this.firstName} ${this.lastName}`);
    }
    initials() {
        return this.firstName[0] + this.lastName[0];
    }
    didPass() {
        return this.grade >= 40;
    }
    logAbsence() {
        this.absences++;
        if (this.absences >= 3) {
            this.ban();
        }
    }
    ban() {
        this.banned = true;
    }
    isBanned() {
        return this.banned;
    }
    static greet(...students) {
        for (let el of students) {
            console.log(`Welcome ${el.firstName} ${el.lastName}!`);
        }
    }
    static gradeDiff(s1, s2) {
        //        CONDITION        ?         TRUE        :        FALSE
        return s2.grade < s1.grade ? s1.grade - s2.grade : s2.grade - s1.grade;
    }
}

// test drive code
let studentArray = [
    new Student("Gerard", "Depardieu", 39), 
    new Student("John", "Travolta", 55), 
    new Student("Kate", "Winslett", 78), 
    new Student("Tim", "Burton", 52), 
    new Student("Chris", "Pratt", 92), 
    new Student("Liam", "Neeson", 17)
];

for (let student of studentArray) {
    student.sayHi();
    console.log(`My initials are: `, student.initials());
    console.log("Passed: " + student.didPass());
}

for (let i = 0; i < 5; i++) {
    studentArray[3].logAbsence();
    console.log(studentArray[3].isBanned());
}
Student.greet(...studentArray)

for (let i = 1; i < studentArray.length; i++) {
    console.log("grade diff: ", Student.gradeDiff(studentArray[i], studentArray[i - 1]));
}
