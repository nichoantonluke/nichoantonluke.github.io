document.addEventListener('DOMContentLoaded', function() {
    var nameButton = document.getElementById('nameButton');
    var outputElement = document.getElementById('output');

    nameButton.addEventListener('click', function() {
        var name = prompt('Please enter your name:');
        if (name) {
            outputElement.textContent = 'Hello, ' + name + '!';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var myImage = document.getElementById('myImage');

    myImage.addEventListener('click', function() {
        // Toggle image size on click
        if (this.style.width === '200px') {
            this.style.width = '400px'; // Enlarge the image
        } else {
            this.style.width = '200px'; // Shrink the image back to its original size
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('nav ul li');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            if (item.querySelector('a')) {
                // If the clicked item has a link, navigate to the link
                window.location.href = item.querySelector('a').getAttribute('href');
            }
        });
    });
});