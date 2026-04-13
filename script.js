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
        alert("Akses ditolak!");
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("isAdmin");
    window.location.href = "index.html";
}

// ================= ROLES =================
function updateRoles() {
    localStorage.setItem("leader", document.getElementById("leaderInput").value);
    localStorage.setItem("rightHand", document.getElementById("rightHandInput").value);
    localStorage.setItem("leftHand", document.getElementById("leftHandInput").value);
    localStorage.setItem("manager", document.getElementById("managerInput").value);
    alert("Roles berjaya dikemaskini!");
}

function displayRoles() {
    if (localStorage.getItem("leader"))
        document.getElementById("leader").textContent = localStorage.getItem("leader");

    if (localStorage.getItem("rightHand"))
        document.getElementById("rightHand").textContent = localStorage.getItem("rightHand");

    if (localStorage.getItem("leftHand"))
        document.getElementById("leftHand").textContent = localStorage.getItem("leftHand");

    if (localStorage.getItem("manager"))
        document.getElementById("manager").textContent = localStorage.getItem("manager");
}

// ================= MEMBERS =================
function updateMembers() {
    const members = document.getElementById("membersInput").value;
    localStorage.setItem("members", members);
    alert("Senarai ahli berjaya dikemaskini!");
}

function displayMembers() {
    const list = document.getElementById("membersList");
    const data = localStorage.getItem("members");

    if (list && data) {
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
    const data = localStorage.getItem("rules");

    if (list && data) {
        const items = data.split("\n").filter(item => item.trim() !== "");
        list.innerHTML = items.map(item => `<li>${item}</li>`).join("");
    }
}

// ================= LOAD ADMIN DATA =================
function loadAdminData() {
    if (document.getElementById("membersInput"))
        document.getElementById("membersInput").value =
            localStorage.getItem("members") || "";

    if (document.getElementById("rulesInput"))
        document.getElementById("rulesInput").value =
            localStorage.getItem("rules") || "";

    if (document.getElementById("leaderInput"))
        document.getElementById("leaderInput").value =
            localStorage.getItem("leader") || "";

    if (document.getElementById("rightHandInput"))
        document.getElementById("rightHandInput").value =
            localStorage.getItem("rightHand") || "";

    if (document.getElementById("leftHandInput"))
        document.getElementById("leftHandInput").value =
            localStorage.getItem("leftHand") || "";

    if (document.getElementById("managerInput"))
        document.getElementById("managerInput").value =
            localStorage.getItem("manager") || "";
}