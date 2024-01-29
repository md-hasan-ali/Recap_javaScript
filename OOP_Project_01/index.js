const Person = require("./Person")
const Student = require("./student")
const Teacher = require("./teacher")

const studentInfo = new Student(
    "Hasan",
    "hasan@ali.com",
    ["Math", "Physics", "Economics"],
    5000
)
const teacherInfo = new Teacher(
    "Abul khan",
    "abul@khan.com",
    "Math",
    40000
)

studentInfo.print();
teacherInfo.print()


