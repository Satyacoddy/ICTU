document.getElementById('nextButton').addEventListener('click', function() {
    // Hide the registration form
    document.getElementById('registrationForm').style.display = 'none';

    // Show the details form
    var detailsForm = document.getElementById('detailsForm');
    detailsForm.style.display = 'block';
    detailsForm.classList.add('slideIn');
});

document.getElementById('nextButton2').addEventListener('click', function() {
    // Ensure Location and Room Number fields are filled
    var location = document.getElementById('location').value.trim();
    var roomNumber = document.getElementById('roomNumber').value.trim();

    if (location === '' || roomNumber === '') {
        alert('Please fill in both the Location and Room Number fields.');
        return;
    }

    // Hide the details form
    document.getElementById('detailsForm').style.display = 'none';

    // Show the food section form
    var foodForm = document.getElementById('foodForm');
    foodForm.style.display = 'block';
    foodForm.classList.add('slideIn');
});

document.getElementById('previousButton1').addEventListener('click', function() {
    // Hide the details form
    document.getElementById('detailsForm').style.display = 'none';

    // Show the registration form
    var registrationForm = document.getElementById('registrationForm');
    registrationForm.style.display = 'block';
});

document.getElementById('previousButton2').addEventListener('click', function() {
    // Hide the food form
    document.getElementById('foodForm').style.display = 'none';

    // Show the details form
    var detailsForm = document.getElementById('detailsForm');
    detailsForm.style.display = 'block';
});

document.getElementById('submitButton').addEventListener('click', function() {
    // Hide the food form
    document.getElementById('foodForm').style.display = 'none';

    // Show the thank you message
    var thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'block';
    thankYouMessage.classList.add('slideIn');
});
