// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to make the "No" button move away on hover
document.getElementById("no-button").addEventListener("mouseover", function() {
    const noButton = document.getElementById("no-button");
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'erm-fingers.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; // Ensure the correct image file path
    catHeartImage.alt = 'Cat Heart';
    
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);

        // Create a new link element
        var link = document.createElement('a');
        link.href = 'https://docs.google.com/forms/d/e/1FAIpQLSduYySqXly3JQW7ys4Dg2sBXIhig2U0g7MbU-x7tcyJT6Qgdw/viewform?usp=header'; // Replace with your actual link
        link.target = '_blank'; // Opens link in a new tab
        link.innerText = 'Click here for our schedule, miss nurse 💖';
        link.style.display = 'block'; // Ensures it appears under the image
        link.style.marginTop = '10px';
        link.style.fontSize = '18px';
        link.style.color = 'blue';
        link.style.textDecoration = 'underline';

        // Append the link below the cat-heart image
        imageContainer.appendChild(link);

        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}
// Display the cat.gif initially
displayCat();
