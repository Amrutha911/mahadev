1. HTML (index.html)


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Current Date and Time</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="date-time">
        <div id="date"></div>
        <div id="time"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>


2. CSS (style.css)



body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f4;
    text-align: center;
}

#date-time {
    font-size: 32px;
    font-weight: bold;
    color: #333;
}

#date {
    font-size: 24px;
    margin-bottom: 10px;
}

#time {
    font-size: 48px;
    color: #333;
}





3. JavaScript (script.js)



function updateDateTime() {
    const now = new Date();
    

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    
 
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const date = now.toLocaleDateString();
    
    document.getElementById('date').textContent = `${dayOfWeek}, ${date}`;
    document.getElementById('time').textContent = currentTime;
}
setInterval(updateDateTime, 1000);

updateDateTime();






