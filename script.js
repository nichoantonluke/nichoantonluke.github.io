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

function storeFormData() {
    var formData = {};

    // Get input values
    formData['name'] = document.getElementById('name').value;
    formData['email'] = document.getElementById('email').value;
    formData['gender'] = document.querySelector('input[name="gender"]:checked').value;

    var hobbies = [];
    var checkboxes = document.getElementsByName('hobbies');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            hobbies.push(checkbox.value);
        }
    });
    formData['hobbies'] = hobbies;

    formData['comments'] = document.getElementById('comments').value;

    // Store data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
}

// Function to clear/reset form fields
function clearForm() {
    document.getElementById('userForm').reset();
}