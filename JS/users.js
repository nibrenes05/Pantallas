function mostrarPassword(idInput, idIcono) {

    let password = document.getElementById(idInput);
    let ojo = document.getElementById(idIcono);

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

function cambiarTab(idTab, boton) {

    let contenidos = document.querySelectorAll(".tab-contenido");
    let botones = document.querySelectorAll(".tab");

    contenidos.forEach(function (contenido) {
        contenido.classList.remove("activo");
    });

    botones.forEach(function (tab) {
        tab.classList.remove("activo");
    });

    document.getElementById(idTab).classList.add("activo");
    boton.classList.add("activo");
}

function actualizarRol() {

    let rol = document.getElementById("rol").value;
    let permisos = document.getElementById("permisosPreview");
    let mensajeRol = document.getElementById("mensajeRol");

    if (rol === "administrador") {

        permisos.innerHTML = `
            <span class="badge azul"><i class="bi bi-person-gear"></i> Gestión de usuarios</span>
            <span class="badge verde"><i class="bi bi-bar-chart"></i> Reportes</span>
            <span class="badge morado"><i class="bi bi-headset"></i> Soporte</span>
            <span class="badge naranja"><i class="bi bi-box-seam"></i> Productos</span>
        `;

        mensajeRol.textContent = "Rol interno con acceso administrativo al CRM.";

    } else if (rol === "supervisor") {

        permisos.innerHTML = `
            <span class="badge verde"><i class="bi bi-bar-chart"></i> Reportes</span>
            <span class="badge morado"><i class="bi bi-headset"></i> Casos</span>
            <span class="badge azul"><i class="bi bi-people"></i> Consulta de usuarios</span>
        `;

        mensajeRol.textContent = "Rol interno encargado de supervisar operaciones y casos.";

    } else if (rol === "agente") {

        permisos.innerHTML = `
            <span class="badge morado"><i class="bi bi-headset"></i> Atención de casos</span>
            <span class="badge verde"><i class="bi bi-person-lines-fill"></i> Consulta de clientes</span>
        `;

        mensajeRol.textContent = "Rol interno encargado de atender casos de clientes.";

    } else if (rol === "soporte") {

        permisos.innerHTML = `
            <span class="badge azul"><i class="bi bi-tools"></i> Soporte técnico</span>
            <span class="badge verde"><i class="bi bi-gear"></i> Configuración</span>
        `;

        mensajeRol.textContent = "Rol interno para soporte del sistema y mantenimiento técnico.";

    } else if (rol === "adminEmpresarial") {

        permisos.innerHTML = `
            <span class="badge naranja"><i class="bi bi-building"></i> Gestión de empresa</span>
            <span class="badge naranja"><i class="bi bi-box-seam"></i> Productos</span>
            <span class="badge verde"><i class="bi bi-cart3"></i> Pedidos</span>
        `;

        mensajeRol.textContent = "Usuario empresarial asociado a una empresa registrada.";

    } else if (rol === "vendedor") {

        permisos.innerHTML = `
            <span class="badge naranja"><i class="bi bi-box-seam"></i> Productos</span>
            <span class="badge verde"><i class="bi bi-cart3"></i> Pedidos</span>
        `;

        mensajeRol.textContent = "Usuario empresarial encargado de gestionar productos y ventas.";

    } else if (rol === "cliente") {

        permisos.innerHTML = `
            <span class="badge verde"><i class="bi bi-cart3"></i> Compras</span>
            <span class="badge morado"><i class="bi bi-headset"></i> Crear casos</span>
            <span class="badge azul"><i class="bi bi-truck"></i> Tracking</span>
        `;

        mensajeRol.textContent = "Cliente comprador con acceso a pedidos, casos y seguimiento.";

    } else {

        permisos.innerHTML = `
            <span class="badge azul"><i class="bi bi-person-gear"></i> Gestión de usuarios</span>
            <span class="badge verde"><i class="bi bi-bar-chart"></i> Reportes</span>
            <span class="badge morado"><i class="bi bi-headset"></i> Soporte</span>
        `;

        mensajeRol.textContent = "Estos campos pueden variar según el rol seleccionado.";
    }
}

function guardarUsuario() {

    let identificacion = document.getElementById("identificacion").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmarPassword = document.getElementById("confirmarPassword").value.trim();
    let rol = document.getElementById("rol").value;

    if (
        identificacion === "" ||
        nombre === "" ||
        apellido === "" ||
        correo === "" ||
        password === "" ||
        confirmarPassword === "" ||
        rol === ""
    ) {
        alert("Por favor complete todos los campos obligatorios.");
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        alert("Ingrese un correo electrónico válido.");
        return;
    }

    if (correo.toLowerCase() === "admin@byteshop.com") {
        alert("El correo ingresado ya se encuentra registrado.");
        return;
    }

    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    if (password !== confirmarPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    mostrarMensaje();
}

function mostrarMensaje() {

    let mensaje = document.getElementById("mensajeSistema");

    mensaje.classList.add("mostrar");

    setTimeout(function () {
        mensaje.classList.remove("mostrar");
    }, 3000);
}

function limpiarFormulario() {

    document.getElementById("formUsuario").reset();

    document.getElementById("permisosPreview").innerHTML = `
        <span class="badge azul"><i class="bi bi-person-gear"></i> Gestión de usuarios</span>
        <span class="badge verde"><i class="bi bi-bar-chart"></i> Reportes</span>
        <span class="badge morado"><i class="bi bi-headset"></i> Soporte</span>
    `;

    document.getElementById("mensajeRol").textContent =
        "Estos campos pueden variar según el rol seleccionado.";
}