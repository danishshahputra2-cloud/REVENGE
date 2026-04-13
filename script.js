// ================= LOGIN ADMIN =================
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "revenge123";

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

function checkAdmin() {
    if (localStorage.getItem("isAdmin") !== "true") {
        alert("Akses ditolak! Sila login sebagai admin.");
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("isAdmin");
    window.location.href = "index.html";
}

// ================= MEMBERS =================
function updateMembers() {
    const members = document.getElementById("membersInput").value;
    localStorage.setItem("members", members);
    alert("Senarai ahli berjaya dikemaskini!");
}

function displayMembers() {
    const list = document.getElementById("membersList");
    if (!list) return;

    const data = localStorage.getItem("members");
    if (data) {
        const items = data.split("\n").filter(item => item.trim() !== "");
        list.innerHTML = items.map(item => `<li>${item}</li>`).join("");
    }
}

// ================= RULES =================
function updateRules() {
    const rules = document.getElementById("rulesInput").value;
    localStorage.setItem("rules", rules);
    alert("Peraturan berjaya dikemaskini!");
}

function displayRules() {
    const list = document.getElementById("rulesList");
    if (!list) return;

    const data = localStorage.getItem("rules");
    if (data) {
        const items = data.split("\n").filter(item => item.trim() !== "");
        list.innerHTML = items.map(item => `<li>${item}</li>`).join("");
    }
}

// ================= LOAD ADMIN DATA =================
function loadAdminData() {
    if (document.getElementById("membersInput")) {
        document.getElementById("membersInput").value =
            localStorage.getItem("members") || "";
    }

    if (document.getElementById("rulesInput")) {
        document.getElementById("rulesInput").value =
            localStorage.getItem("rules") || "";
    }
}