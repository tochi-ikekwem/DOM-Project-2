// Wait for the DOM content to be fully loaded  
document.addEventListener('DOMContentLoaded', function() {  
    // Select the color-box and change-color-btn elements  
    const colorBox = document.getElementById('color-box');  
    const changeColorBtn = document.getElementById('change-color-btn');  

    // Function to generate a random color in hexadecimal format  
    function getRandomColor() {  
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);  
        return randomColor;  
    }  

    // Add event listener to the change-color-btn  
    changeColorBtn.addEventListener('click', function() {  
        // Change the background color of the color-box to a random color  
        colorBox.style.backgroundColor = getRandomColor();  
    });  
});