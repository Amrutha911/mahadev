function updateDateTime() {
    const now = new Date();
    
    //Get current time in HH:mm:ss format
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    // Get current date and day
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const date = now.toLocaleDateString(); // Format: MM/DD/YYYY
    
    document.getElementById('date').textContent = `${dayOfWeek}, ${date}`;
    document.getElementById('time').textContent = currentTime;
}


setInterval(updateDateTime, 1000);


updateDateTime();