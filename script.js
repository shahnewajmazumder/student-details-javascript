let students = [];

function addStudent() {

    if (students.length >= 5) {
        alert("Only 5 students can be added.");
        return;
    }

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let course = document.getElementById("course").value.trim();

    if (name === "" || roll === "" || course === "") {
        alert("Please enter all student details.");
        return;
    }

    let student = {
        name: name,
        roll: roll,
        course: course
    };

    students.push(student);

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
}

function displayStudents() {

    let output = document.getElementById("output");

    output.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        output.innerHTML +=
            "<div class='student'>" +
            "<h3>Student " + (i + 1) + "</h3>" +
            "<p><strong>Name:</strong> " + students[i].name + "</p>" +
            "<p><strong>Roll No:</strong> " + students[i].roll + "</p>" +
            "<p><strong>Course:</strong> " + students[i].course + "</p>" +
            "</div>";
    }

    document.getElementById("count").innerHTML =
        "Students Added: " + students.length + " / 5";
}