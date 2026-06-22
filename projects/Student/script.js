const submitbtn = document.getElementById('submit');

submitbtn.addEventListener('click',()=> {

    const name = document.getElementById('Student-Name').value;
    const Hindi = parseFloat(document.getElementById('Hindi').value);
    const English = parseFloat(document.getElementById('English').value);
    const Science = parseFloat(document.getElementById('Science').value);
    const Maths = parseFloat(document.getElementById('Maths').value);
    const socialScience = parseFloat(document.getElementById('social-science').value);

    const totalMarksDiv = document.getElementById('total-marks');
    const gradeDiv = document.getElementById('Grade');
    const passFailDiv = document.getElementById('pass-fail');
    const percentageDiv = document.getElementById('percentage');

    const totalMarks = Hindi + English + Science + Maths + socialScience;
    const percentage = (totalMarks / 500) * 100;

    let grade;
    if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 60) {
        grade = 'B';
    } else if (percentage >= 50) {
        grade = 'C';
    } else if (percentage >= 40) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    const passFail = totalMarks >= 165 ? 'Pass ✅' : 'Fail ❌';

    totalMarksDiv.innerHTML = `
        <p>Student: ${name}</p>
        <p>Total Marks: ${totalMarks} / 500</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
        <p>Result: ${passFail}</p>
    `;

    totalMarksDiv.style.display = 'block';
});