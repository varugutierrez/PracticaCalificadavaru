const loginForm = document.getElementById('loginForm');
const msg = document.getElementById('msg');

loginForm.onsubmit = function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  // Usuario/contraseña de ejemplo
  if(username === "admin" && password === "1234") {
    msg.style.color = "green";
    msg.textContent = "¡Inicio de sesión exitoso!";
  } else {
    msg.style.color = "#c00";
    msg.textContent = "Usuario o contraseña incorrectos.";
  }
};
