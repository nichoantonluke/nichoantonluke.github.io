

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
            this.style.backgroundColor = '#867e05'; 
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

const form = document.getElementById('contactForm');
    
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = new FormData(form);
  const entries = Array.from(formData.entries());
  const data = {};
  
  entries.forEach(entry => {
    const [key, value] = entry;
    if (data[key]) {
      if (!Array.isArray(data[key])) {
        data[key] = [data[key]];
      }
      data[key].push(value);
    } else {
      data[key] = value;
    }
  });
  
  localStorage.setItem('formData', JSON.stringify(data));
  
  alert('Form submitted successfully!');
});

function changeFontSize(size) {
  document.body.style.fontSize = size;
}

function changeColorScheme(scheme) {
  if (scheme === 'highContrast') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
  } else {
      document.body.style.backgroundColor = '#2a2a47';
      document.body.style.color = 'white';
  }
}

