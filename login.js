const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("button");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "test" && password === "test") {
        // alert("You have successfully logged in.");
        // location.reload();
        window.location.assign("kiestraject.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
