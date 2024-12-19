// Registration form
document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    // Registration functionality
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("regUsername").value.trim();
            const password = document.getElementById("regPassword").value.trim();
            const confirmPassword = document.getElementById("confirmPassword").value.trim();

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            // Save username and password in localStorage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            alert("Registration successful! Please log in.");
            window.location.href = "profile.html"; // Redirect to login page
        });
    }

    // Login functionality
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (username === savedUsername && password === savedPassword) {
                alert("Login successful!");
                // Redirect to the main page or dashboard after login
            } else {
                alert("Invalid username or password.");
            }
        });
    }

    // Forgot Password functionality
    const forgotPassword = document.getElementById("forgotPassword");
    if (forgotPassword) {
        forgotPassword.addEventListener("click", function() {
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                alert(`Username: ${savedUsername}\nPassword: ${savedPassword}`);
            } else {
                alert("No account found. Please register first.");
            }
        });
    }
});

