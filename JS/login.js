function mostrarPassword() {

    let password = document.getElementById("password");
    let ojo = document.getElementById("ojo");

    if (password.type === "password") {

        password.type = "text";

        ojo.classList.remove("bi-eye-fill");
        ojo.classList.add("bi-eye-slash-fill");

    } else {

        password.type = "password";

        ojo.classList.remove("bi-eye-slash-fill");
        ojo.classList.add("bi-eye-fill");
    }
}