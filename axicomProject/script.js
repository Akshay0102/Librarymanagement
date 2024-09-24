// Hardcoded usernames and passwords for users and admins
const credentials = {
    user: {
        username: "user",
        password: "user"
    },
    admin: {
        username: "adm",
        password: "adm"
    }
};

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const userType = document.getElementById("user-type").value;
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    // Validate username and password
    const isValid = validateCredentials(userType, enteredUsername, enteredPassword);

    if (isValid) {
        if (userType === "admin") {
            // Redirect admin to the admin page
            window.location.href = "admin.html";
        } else {
            // Redirect user to the user page
            window.location.href = "user.html";
        }
    } else {
        // Show error message for invalid credentials
        document.getElementById("error-msg").classList.remove("hidden");
    }
});

// Function to validate username and password
function validateCredentials(userType, username, password) {
    if (username === credentials[userType].username && password === credentials[userType].password) {
        return true;
    } else {
        return false;
    }
}
