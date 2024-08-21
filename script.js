class Subject {
    constructor(subjectName, credits) {
        this.subjectName = subjectName;
        this.credits = credits;
        this.grade = ''; // Grade will be input by the user later
    }
}

function gradeToGPA(grade) {
    switch (grade) {
        case 'O': return 10.0;
        case 'A+': return 9.0;
        case 'A': return 8.0;
        case 'B+': return 7.0;
        case 'B': return 6.0;
        case 'C': return 5.0;
        case 'D': return 4.0;
        default: return 0.0; // Invalid grade
    }
}

function calculateCGPA(subjects) {
    let totalPoints = 0.0;
    let totalCredits = 0;

    subjects.forEach(subject => {
        let gpa = gradeToGPA(subject.grade);
        totalPoints += subject.credits * gpa;
        totalCredits += subject.credits;
    });

    return totalCredits === 0 ? 0.0 : (totalPoints / totalCredits);
}

function inputGradesForSemester(subjects) {
    subjects.forEach(subject => {
        subject.grade = prompt(`Enter the grade (O, A+, A, B+, B, C, D) for ${subject.subjectName}:`);
    });
}

function main() {
    // Define subjects for each semester
    const semester1 = [
        new Subject('Communicative English', 3),
        new Subject('Engineering Chemistry', 3),
        new Subject('Matrics and Calculus', 4),
        new Subject('Engineering Physics', 3),
        new Subject('Problem Solving and Python Programming', 3),
        new Subject('Heritage of Tamil', 1),
        new Subject('Physics and Chemistry Laboratory', 2),
        new Subject('Problem Solving and Python Programming Laboratory', 2),
        new Subject('Communicative English Laboratory', 1)
    ];

    const semester2 = [
        new Subject('Technical English', 3),
        new Subject('Statistics and Numerical Method', 4),
        new Subject('Physics for Computer Science Engineers', 3),
        new Subject('Engineering Graphics', 4),
        new Subject('Programming in C', 3),
        new Subject('Tamils and Technology', 1),
        new Subject('Environmental Science and Sustainability', 2),
        new Subject('Technical English Laboratory', 1),
        new Subject('Programming in C Laboratory', 2),
        new Subject('Engineering Practices Laboratory', 2)
    ];

    const semester3 = [
        new Subject('Digital Principles and Computer Organization', 4),
        new Subject('Foundations of Data Science', 3),
        new Subject('Data Structures', 3),
        new Subject('Object Oriented Programming', 3),
        new Subject('Operating System', 4),
        new Subject('Data Structures Laboratory', 2),
        new Subject('Object Oriented Programming Laboratory', 2),
        new Subject('Data Science Laboratory', 2),
        new Subject('Quantitative Aptitude & Verbal Reasoning', 1)
    ];

    const semester4 = [
        new Subject('Software Engineering', 3),
        new Subject('Design and Analysis of Algorithms', 4),
        new Subject('Discrete Mathematics', 4),
        new Subject('Database Management Systems', 3),
        new Subject('Java Programming', 3),
        new Subject('Database Management Systems Laboratory', 2),
        new Subject('Java Programming Laboratory', 2),
        new Subject('Quantitative Aptitude & Behavioural Skill', 1)
    ];

    const semester5 = [
        new Subject('Compiler Design', 4),
        new Subject('Open Elective-1', 3),
        new Subject('Computer Networks', 4),
        new Subject('Full Stack Programming', 4),
        new Subject('Professional Elective-1', 3),
        new Subject('Professional Elective-2', 3),
        new Subject('Quantitative Aptitude & Communication Skills', 1)
    ];

    const semester6 = [
        new Subject('Mobile Computing', 3),
        new Subject('Open Elective-2', 3),
        new Subject('Cryptography and Cyber Security', 4),
        new Subject('Artificial Intelligence and Machine Learning', 4),
        new Subject('Professional Elective-3', 3),
        new Subject('Professional Elective-4', 3),
        new Subject('Mobile Application Development Lab', 2),
        new Subject('Quantitative Aptitude and Soft Skills', 1),
        new Subject('Mini Project', 2)
    ];

    const semester7 = [
        new Subject('Human Values and Ethics', 2),
        new Subject('Elective - Management', 3),
        new Subject('Open Elective-3', 3),
        new Subject('Professional Elective-5', 3),
        new Subject('Professional Elective-6', 3),
        new Subject('Internship', 1)
    ];

    const semester8 = [
        new Subject('Project Work', 10)
    ];

    // Array of semesters
    const semesters = [semester1, semester2, semester3, semester4, semester5, semester6, semester7, semester8];
    const numSubjects = [9, 10, 9, 8, 7, 9, 6, 1];

    const form = document.getElementById('cgpaForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const numSemesters = parseInt(document.getElementById('numSemesters').value, 10);

        if (numSemesters < 1 || numSemesters > 8) {
            resultDiv.textContent = "Invalid number of semesters. Please enter a value between 1 and 8.";
            return;
        }

        // Variables to hold the CGPA for each semester
        const semesterCGPAs = [];
        const semesterCredits = [];
        let totalCGPA = 0.0;
        let totalCredits = 0;

        for (let sem = 0; sem < numSemesters; sem++) {
            const count = numSubjects[sem];

            // Input grades for each subject in the semester
            alert(`Entering grades for Semester ${sem + 1}...`);
            inputGradesForSemester(semesters[sem]);

            // Calculate CGPA for the semester
            const semesterCGPA = calculateCGPA(semesters[sem]);
            semesterCGPAs.push(semesterCGPA);
            let credits = 0;

            // Calculate the total credits for the semester
            semesters[sem].forEach(subject => {
                credits += subject.credits;
            });
            semesterCredits.push(credits);

            // Display CGPA for the semester
            resultDiv.innerHTML += `<p>CGPA for Semester ${sem + 1}: ${semesterCGPA.toFixed(2)}</p>`;

            // Accumulate total CGPA and credits
            totalCGPA += semesterCGPA * credits;
            totalCredits += credits;
        }

        // Calculate overall CGPA
        const overallCGPA = totalCredits === 0 ? 0.0 : totalCGPA / totalCredits;

        // Display overall CGPA
        resultDiv.innerHTML += `<h3>Overall CGPA after ${numSemesters} Semesters: ${overallCGPA.toFixed(2)}</h3>`;
    });
}

main();
