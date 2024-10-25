// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate a login check (replace with actual authentication logic)
    if (username === "testuser" && password === "password") {
        // Redirect to the profile page upon successful login
        window.location.href = 'profile.html';
    } else {
        // Display an error message (you can style this better)
        alert('Invalid username or password');
    }
});
