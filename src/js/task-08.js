const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value.length === 0 || passwordInput.value.length === 0) {
        alert('All fields must be filled in.');
        return;
    };
    
    const formInfo = {
        email: emailInput.value,
        password: passwordInput.value
    };
    console.log(formInfo);

    loginForm.reset();
});
