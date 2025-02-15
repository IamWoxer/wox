document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    const formMensaje = document.getElementById("form-mensaje");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let valid = true;
        formMensaje.textContent = "";
        formMensaje.style.color = "red";

        if (nombre.value.trim() === "") {
            valid = false;
            formMensaje.textContent += "El nombre es obligatorio. ";
        }
        
        if (!validateEmail(email.value)) {
            valid = false;
            formMensaje.textContent += "El correo electrónico no es válido. ";
        }

        if (mensaje.value.trim() === "") {
            valid = false;
            formMensaje.textContent += "El mensaje no puede estar vacío. ";
        }

        if (valid) {
            formMensaje.textContent = "¡Mensaje enviado correctamente!";
            formMensaje.style.color = "green";
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});