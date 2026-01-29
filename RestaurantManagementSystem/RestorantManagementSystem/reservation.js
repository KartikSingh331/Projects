function clearErrors() {
    const errors = document.querySelectorAll('.formerror');
    errors.forEach(error => error.textContent = "");
}

function setError(id, error) {
    const element = document.getElementById(id);
    element.querySelector('.formerror').textContent = error;
}

function validateForm() {
    let isValid = true;
    clearErrors();

    const name = document.forms['myForm']["fname"].value;
    if (name.length < 5 || !/^[a-zA-Z ]+$/.test(name)) {
        setError("name", "*Name must be at least 5 characters long and contain only letters");
        isValid = false;
    }

    const email = document.forms['myForm']["femail"].value;
    if (email.length > 30) {
        setError("email", "*Email length is too long");
        isValid = false;
    }
    const phone = document.forms['myForm']["fphone"].value;
    if (!/^\d{10}$/.test(phone)) {
        setError("phone", "*Phone number must be 10 numeric digits");
        isValid = false;
    }

    const password = document.forms['myForm']["fpass"].value;
    if (password.length < 6) {
        setError("pass", "*Password must be at least 6 characters long");
        isValid = false;
    }

    const cpassword = document.forms['myForm']["fcpass"].value;
    if (password !== cpassword) {
        setError("cpass", "*Passwords do not match");
        isValid = false;
    }

    if (isValid) {
        alert('Your table is reserved successfully!');
        // Redirect to order.html
        window.location.href = 'order.html';
    }

    return isValid;
}

// Attach event listener to the form
document.forms['myForm'].addEventListener('submit', function (event) {
    if (!validateForm()) {
        // Prevent form submission if validation fails
        event.preventDefault();
    }
});
