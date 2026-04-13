// Tetapan Admin
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "revenge123";

// Fungsi Login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        localStorage.setItem("isAdmin", "true");
        window.location.href = "admin.html";
    } else {
        error.textContent = "Username atau password salah!";
    }
}

// Semak Akses Admin
function checkAdmin() {
    if (localStorage.getItem("isAdmin") !== "true") {
        alert("Akses ditolak! Sila login sebagai admin.");
        window.location.href = "login.html";
    }
}

// Fungsi Logout
function logout() {
    localStorage.removeItem("isAdmin");
    window.location.href = "index.html";
}