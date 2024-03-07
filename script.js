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
        if (this.style.width === '400px') {
            this.style.width = '600px'; 
        } else {
            this.style.width = '400px'; 
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
            this.style.backgroundColor = '#FAFCBF'; 
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

