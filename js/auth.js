document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginMessage = document.getElementById("login-message");

    const users = [
        { username: "admin", password: "admin123", role: "admin" },
        { username: "user1", password: "user123", role: "user" },
        { username: "user2", password: "user456", role: "user" },
        { username: "editor", password: "editor123", role: "editor" },
        { username: "viewer", password: "viewer123", role: "viewer" }
    ];

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            sessionStorage.setItem("loggedUser", JSON.stringify(user));
            window.location.href = "index.html";
        } else {
            loginMessage.textContent = "Usuario o contraseña incorrectos.";
            loginMessage.style.color = "red";
        }
    });

    function checkAuth() {
        const user = JSON.parse(sessionStorage.getItem("loggedUser"));
        if (!user) {
            window.location.href = "login.html";
        } else {
            document.body.insertAdjacentHTML("afterbegin", `<p>Bienvenido, ${user.username} (${user.role})</p>`);
        }
    }

    if (window.location.pathname !== "/login.html") {
        checkAuth();
    }
});