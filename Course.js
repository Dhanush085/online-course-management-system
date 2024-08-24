var isRegistered = false;
var username;
var userInformation = {};
var courses = [
    { name: 'Mathematics', cost: 50 },
    { name: 'Linux', cost: 40 },
    { name: 'Computer Science And Design', cost: 60 },
    { name: 'Angular JS', cost: 45 },
    { name: 'Electronics and Communication', cost: 55 },
];
var selectedCourse = null;
var courseVideos = {
    'Mathematics': ['Video 1', 'Video 2', 'Video 3', 'Video 4', 'Video 5'],
    'Linux': ['Video 1', 'Video 2', 'Video 3', 'Video 4', 'Video 5'],
    'Computer Science And Design': ['Video 1', 'Video 2', 'Video 3', 'Video 4', 'Video 5'],
    'Electronics And Communication': ['Video 1', 'Video 2', 'Video 3', 'Video 4', 'Video 5'],
    'Angular JS': ['Video 1', 'Video 2', 'Video 3', 'Video 4', 'Video 5'],
};

function register() {
    var registerName = document.getElementById('registerName').value;
    var registerPassword = document.getElementById('registerPassword').value;
    var registerEmail = document.getElementById('registerEmail').value;
    var registerGender = document.getElementById('registerGender').value;
    var registerPhone = document.getElementById('registerPhone').value;
    var registerAddress = document.getElementById('registerAddress').value;

    // Basic form validation
    if (!registerName || !registerPassword || !registerEmail || !registerGender || !registerPhone || !registerAddress) {
        alert('Please fill in all fields.');
        return;
    }

    // Validate Gmail address
    var gmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!gmailRegex.test(registerEmail)) {
        alert('Please enter a valid Gmail address.');
        return;
    }

    // Validate password (at least 6 characters)
    if (registerPassword.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Validate phone number (10 digits)
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(registerPhone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // Update user information
    userInformation = {
        name: registerName,
        password: registerPassword,
        email: registerEmail,
        gender: registerGender,
        phone: registerPhone,
        address: registerAddress
    };

    // Update registration status and username
    isRegistered = true;
    username = registerName;

    // Hide registration container, display success container
    document.getElementById('registration-container').style.display = 'none';
    document.getElementById('registration-success-container').style.display = 'block';
    document.getElementById('registeredUsername').textContent = username;
}

function showCourses() {
    document.getElementById('registration-success-container').style.display = 'none';
    document.getElementById('courses-container').style.display = 'block';

    var courseSelect = document.getElementById('courseSelect');
    courseSelect.innerHTML = '<option value="">Select a course</option>';

    for (var i = 0; i < courses.length; i++) {
        courseSelect.innerHTML += '<option value="' + i + '">' + courses[i].name + '</option>';
    }
}

function selectCourse() {
    var courseSelect = document.getElementById('courseSelect');
    var selectedIndex = courseSelect.selectedIndex;

    if (selectedIndex !== 0) {
        selectedCourse = courses[selectedIndex - 1];
        updateUI();
    }
}

function updateUI() {
    document.getElementById('courses-container').style.display = 'none';
    document.getElementById('videos-container').style.display = 'block';

    document.getElementById('selectedCourseName').textContent = selectedCourse.name;
    document.getElementById('selectedCourseCost').textContent = selectedCourse.cost;

    var videosList = document.getElementById('videosList');
    videosList.innerHTML = '';

    for (var i = 0; i < courseVideos[selectedCourse.name].length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = courseVideos[selectedCourse.name][i];

        var image = document.createElement('img');
        image.src = 'vid.2.jpg'; // Replace with the actual path to your image
        image.alt = 'Video Thumbnail';
        listItem.appendChild(image);

        videosList.appendChild(listItem);
    }
}