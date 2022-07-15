const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("button");
const loginErrorMsgHldr = document.getElementById("login-error-msg-holder");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "test" && password === "test") {
        window.location.assign("kiestraject_opgeschoond.html");
    } else {
        loginErrorMsgHldr.style.display = "grid";
    }
})
