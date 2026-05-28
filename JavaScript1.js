//Makes JavaScript more sensitive to errors so it is easier to debug in the future
'use strict';

// -----------------------------
// THEME SWITCHER
// -----------------------------
const switcher = document.body.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains("light-theme")) {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});

// -----------------------------
// SIDENAV HOVER EFFECTS
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".sidenav a");

    items.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateY(-6px) scale(1.08)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateY(0) scale(1)";
        });
    });
});

// -----------------------------
// CHATBOT FUNCTIONS
// -----------------------------

function addUserMessage(text) {
    const chatBox = document.getElementById("chat-box");
    const msg = document.createElement("div");
    msg.className = "user-message";
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(text) {
    const chatBox = document.getElementById("chat-box");
    const msg = document.createElement("div");
    msg.className = "bot-message";
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (message === "") return;

    addUserMessage(message);
    input.value = "";

    try {
        const response = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: message })
        });

        const data = await response.json();
        addBotMessage(data.reply);

    } catch (error) {
        addBotMessage("Oops… I can’t reach my brain right now 😭 Is the Python server running?");
        console.error(error);
    }
}

// ⭐ Make sendMessage available to the HTML button
window.sendMessage = sendMessage;
