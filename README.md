# CGPA-calculator
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CGPA Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body background="C:\Users\SANJAY\Videos\calc.png">
<body>
    <div class="container">
        <h1>CGPA Calculator</h1>
        <form id="cgpaForm">
            <label for="numSemesters">Enter the number of semesters (1-8):</label>
            <input type="number" id="numSemesters" name="numSemesters" min="1" max="8" required>
            <button type="submit">Calculate CGPA</button>
        </form>

        <div id="result"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
