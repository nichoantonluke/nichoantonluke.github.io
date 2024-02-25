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
        if (this.style.width === '200px') {
            this.style.width = '400px'; 
        } else {
            this.style.width = '200px'; 
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('nav ul li');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            if (item.querySelector('a')) {
                window.location.href = item.querySelector('a').getAttribute('href');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('nav ul li');

    menuItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#33FF39'; 
        });

        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent'; 
        });

        item.addEventListener('click', function() {
            if (item.querySelector('a')) {
                window.location.href = item.querySelector('a').getAttribute('href');
            }
        });
    });
});