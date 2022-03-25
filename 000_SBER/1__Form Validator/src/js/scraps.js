//Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (username.value === '') {
        showError(username, 'Username is incorrect');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }
    if (password2.value === '') {
        showError(password2, 'Password is required');
    } else {
        showSuccess(password2);
    }
});
