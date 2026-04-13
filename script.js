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

// ================= MEMBERS =================
function updateMembers() {
    let existing = localStorage.getItem("members") || "";
    let newData = document.getElementById("membersInput").value;

    if (newData.trim() === "") {
        alert("Sila isi member!");
        return;
    }

    let combined = existing + "\n" + newData;

    localStorage.setItem("members", combined.trim());

    document.getElementById("membersInput").value = "";

    displayMembers();

    alert("Member berjaya ditambah!");
}

function displayMembers() {
    const list = document.getElementById("membersList");
    if (!list) return;

    let data = localStorage.getItem("members");

    if (!data || data.trim() === "") {
        list.innerHTML = "<li>Tiada members</li>";
        return;
    }

    const items = data.split("\n").map(i => i.trim()).filter(i => i !== "");

    list.innerHTML = items.map(i => `<li>${i}</li>`).join("");
}

// ================= RULES =================
function updateRules() {
    let existing = localStorage.getItem("rules") || "";
    let newData = document.getElementById("rulesInput").value;

    if (newData.trim() === "") {
        alert("Sila isi rules!");
        return;
    }

    let combined = existing + "\n" + newData;

    localStorage.setItem("rules", combined.trim());

    document.getElementById("rulesInput").value = "";

    displayRules();

    alert("Rules berjaya ditambah!");
}

function displayRules() {
    const list = document.getElementById("rulesList");
    if (!list) return;

    let data = localStorage.getItem("rules");

    // ❗ PENTING: kalau tak ada data, jangan overwrite HTML
    if (!data) return;

    const items = data
        .split("\n")
        .map(i => i.trim())
        .filter(i => i !== "");

    list.innerHTML = items.map(i => `<li>${i}</li>`).join("");
}
function initDefaultRules() {
    if (!localStorage.getItem("rules")) {
        const defaultRules = Array.from(
            document.querySelectorAll("#rulesList li")
        ).map(li => li.innerText).join("\n");

        localStorage.setItem("rules", defaultRules);
    }
}

// ================= LOAD ADMIN DATA =================
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