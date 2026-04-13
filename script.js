// ================= LOGIN =================
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "revenge123";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("loginTime", Date.now());
        window.location.href = "admin.html";
    } else {
        error.textContent = "Username atau password salah!";
    }
}

// ================= CHECK ADMIN =================
function checkAdmin() {
    const isAdmin = localStorage.getItem("isAdmin");
    const loginTime = localStorage.getItem("loginTime");

    const ONE_HOUR = 60 * 60 * 1000;

    if (!isAdmin || !loginTime) {
        window.location.replace("login.html");
        return;
    }

    if (Date.now() - loginTime > ONE_HOUR) {
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("loginTime");
        alert("Session tamat. Sila login semula.");
        window.location.replace("login.html");
    }
}

// ================= LOGOUT =================
function logout() {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("loginTime");
    window.location.replace("login.html");
}

// ================= MEMBERS (ADD + DISPLAY) =================
function updateMembers() {
    let existing = localStorage.getItem("members") || "";
    let newData = document.getElementById("membersInput").value;

    let combined = existing + "\n" + newData;

    localStorage.setItem("members", combined.trim());

    document.getElementById("membersInput").value = "";
    displayMembers();

    alert("Member berjaya ditambah!");
}

function displayMembers() {
    const list = document.getElementById("membersList");
    if (!list) return;

    const data = localStorage.getItem("members") || "";

    const items = data.split("\n").filter(i => i.trim() !== "");

    list.innerHTML = items.map(i => `<li>${i}</li>`).join("");
}

// ================= RULES (ADD + DISPLAY) =================
function updateRules() {
    let existing = localStorage.getItem("rules") || "";
    let newData = document.getElementById("rulesInput").value;

    let combined = existing + "\n" + newData;

    localStorage.setItem("rules", combined.trim());

    document.getElementById("rulesInput").value = "";
    displayRules();

    alert("Rules berjaya ditambah!");
}

function displayRules() {
    const list = document.getElementById("rulesList");
    if (!list) return;

    const data = localStorage.getItem("rules") || "";

    const items = data.split("\n").filter(i => i.trim() !== "");

    list.innerHTML = items.map(i => `<li>${i}</li>`).join("");
}

// ================= LOAD DATA =================
function loadAdminData() {
    const membersInput = document.getElementById("membersInput");
    const rulesInput = document.getElementById("rulesInput");

    if (membersInput) {
        membersInput.value = localStorage.getItem("members") || "";
    }

    if (rulesInput) {
        rulesInput.value = localStorage.getItem("rules") || "";
    }
}