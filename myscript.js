function showCourses() {
    fetch("http://localhost:8080/courses")
    .then(response => response.json())
    .then(courses => {
        const dataTable = document.getElementById("coursetable");
        dataTable.innerHTML = "";

        courses.forEach(course => {
            dataTable.innerHTML += `
                <tr>
                    <td>${course.courseId}</td>
                    <td>${course.courseName}</td>
                    <td>${course.instructor}</td>
                    <td>${course.duration}</td>
                </tr>`;
        });
    })
    .catch(err => console.error("❌ Error loading courses:", err));
}

function showEnrolledStudents() {
    fetch("http://localhost:8080/courses/enrolled")
    .then(response => response.json())
    .then(students => {
        const dataTable = document.getElementById("enrolledtable");
        dataTable.innerHTML = "";

        students.forEach(student => {
            dataTable.innerHTML += `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.emailId}</td>
                    <td>${student.courseName}</td>
                </tr>`;
        });
    })
    .catch(err => console.error("❌ Error loading students:", err));
}
