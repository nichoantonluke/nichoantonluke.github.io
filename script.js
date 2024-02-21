// Function to display name in HTML element

function displayName() {
    var name = document.getElementById("nameInput").value;
    if (name !== "") {
        document.getElementById("nameDisplay").innerText = "Hello " + name + "!";
    }
}

// Function to enlarge the image
function enlargeImage() {
    this.style.width = "200px"; // Change the width of the image upon click
}

// Function to reset the image size
function resetImageSize() {
    this.style.width = "100px"; // Reset the width of the image when mouseout
}

// Function to handle navigation menu hover effects
function handleHover() {
    this.style.backgroundColor = "lightgray"; // Change background color on hover
}

function handleHoverOut() {
    this.style.backgroundColor = ""; // Reset background color on hover out
}

// Add event listeners for navigation menu items
document.getElementById("homeNavItem").addEventListener("mouseover", handleHover);
document.getElementById("homeNavItem").addEventListener("mouseout", handleHoverOut);
document.getElementById("aboutNavItem").addEventListener("mouseover", handleHover);
document.getElementById("aboutNavItem").addEventListener("mouseout", handleHoverOut);

// Add event listener for the name display button
document.getElementById("nameButton").addEventListener("click", displayName);

// Add event listener for image click
document.getElementById("myImage").addEventListener("click", enlargeImage);
document.getElementById("myImage").addEventListener("mouseout", resetImageSize);