// register.js

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, one uppercase, one lowercase, one number

    // Check if password meets requirements
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
        return;
    }

    // Check if confirm password matches
    if (password !== confirmPassword) {
        alert('Error: Passwords do not match.'); // Specific error message for mismatched passwords
        return;
    }

    // Simulate registration logic (replace with actual registration logic)
    console.log('Registered:', {
        firstName,
        lastName,
        username,
        password,
    });

    // Redirect to login page after successful registration
    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
});
