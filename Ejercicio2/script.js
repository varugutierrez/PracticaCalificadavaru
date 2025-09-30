const registrationForm = document.getElementById("registrationForm");
const errorMessages = document.getElementById("errorMessages");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Limpiar mensajes previos
    errorMessages.innerHTML = "";
    
    // Obtener valores de los campos
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    // Validaciones
    if (!validateUsername(username)) {
        displayError("El nombre de usuario debe tener al menos 3 caracteres");
        return;
    }
    
    if (!validateEmail(email)) {
        displayError("Por favor ingresa un correo electrónico válido");
        return;
    }
    
    if (!validatePassword(password)) {
        displayError("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial");
        return;
    }
    
    if (password !== confirmPassword) {
        displayError("Las contraseñas no coinciden");
        return;
    }
    
    // Si todas las validaciones pasan
    displaySuccess("¡Registro exitoso!");
    registrationForm.reset();
});

function validateUsername(username) {
    return username.length >= 3;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function displayError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    errorMessages.appendChild(errorDiv);
}

function displaySuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success';
    successDiv.textContent = message;
    errorMessages.appendChild(successDiv);
}

// Validación en tiempo real
document.getElementById("email").addEventListener("input", function() {
    const email = this.value.trim();
    if (email && !validateEmail(email)) {
        this.style.borderColor = "#dc3545";
    } else {
        this.style.borderColor = "#28a745";
    }
});

document.getElementById("password").addEventListener("input", function() {
    const password = this.value;
    if (password && !validatePassword(password)) {
        this.style.borderColor = "#dc3545";
    } else {
        this.style.borderColor = "#28a745";
    }
});
