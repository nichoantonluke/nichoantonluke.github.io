// a. Create a button that will prompt a user to type in their name on your own homepage.
document.addEventListener('DOMContentLoaded', function() {
    var nameButton = document.createElement('button');
    nameButton.textContent = 'Enter Your Name';
    nameButton.addEventListener('click', function() {
        var name = prompt('Please enter your name:');
        if (name) {
            document.getElementById('output').textContent = 'Hello, ' + name + '!';
        }
    });
    document.body.appendChild(nameButton);
});

// b. Make a clickable image of yourself on your homepage.
document.addEventListener('DOMContentLoaded', function() {
    var myImage = document.createElement('img');
    myImage.src = 'subdirectory/MyPic.jpg'; // Change the path to your image
    myImage.addEventListener('click', function() {
        myImage.style.width = '200px'; // Change the width as desired
    });
    document.body.appendChild(myImage);
});

// c. Create a customized and working navigation menu
document.addEventListener('DOMContentLoaded', function() {
    var navMenu = document.createElement('nav');
    var homeLink = document.createElement('a');
    homeLink.href = 'index.html'; // Change the href to your homepage
    homeLink.textContent = 'Home';

    var aboutLink = document.createElement('a');
    aboutLink.href = 'about.html'; // Change the href to your about page
    aboutLink.textContent = 'About';

    var contactLink = document.createElement('span'); // Just for demonstration, doesn't link anywhere
    contactLink.textContent = 'Contact';

    var menu1 = document.createElement('ul');
    var menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Menu Item 1';
    var menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Menu Item 2';

    menu1.appendChild(menuItem1);
    menu1.appendChild(menuItem2);

    navMenu.appendChild(homeLink);
    navMenu.appendChild(aboutLink);
    navMenu.appendChild(contactLink);
    navMenu.appendChild(menu1);

    document.body.insertBefore(navMenu, document.body.firstChild);
});

// d. Include an onmouseover/onmouseout event for your nav items
document.addEventListener('DOMContentLoaded', function() {
    var navItems = document.querySelectorAll('nav a');
    navItems.forEach(function(navItem) {
        navItem.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'lightgray';
        });
        navItem.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
});