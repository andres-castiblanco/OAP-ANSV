document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lista de usuarios válidos
    const users = [
        { username: 'samuel.perez', password: 'Anarion293.' },
        { username: 'jhon.parra', password: 'ansv.2024+' },
        { username: 'luz.rojas', password: 'ansv.2024+cvi' },
        { username: 'angie.bocanegra', password: 'ansv.2024+bpin' },
        { username: 'zulay.briceno', password: 'ansv.2024+piip' }
    ];

    // Verifica si el usuario y contraseña ingresados son válidos
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('authenticated', true);
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuario/Contraseña inválido. Contacte al Administrador');
    }
});
