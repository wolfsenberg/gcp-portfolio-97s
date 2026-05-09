const config = window.GEINEL_CONFIG || {};
const assetBaseUrl = (config.assetBaseUrl || "/assets").replace(/\/$/, "");

const assetUrl = (path) => `${assetBaseUrl}/${path.replace(/^\//, "")}`;

document.querySelectorAll(".asset").forEach((element) => {
  element.src = assetUrl(element.dataset.asset);
});

const themeToggle = document.querySelector(".theme-toggle");
themeToggle?.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

const galleryTrack = document.querySelector("#gallery-track");
const galleryCount = 7;
let galleryOffset = 0;

function makePlaceholder(number) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="160" viewBox="0 0 220 160"><rect width="220" height="160" fill="#e2e8f0"/><circle cx="65" cy="52" r="14" fill="none" stroke="#94a3b8" stroke-width="1.5"/><polyline points="30,115 72,68 108,96 148,62 190,115" fill="none" stroke="#94a3b8" stroke-width="1.5"/><text x="110" y="142" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#94a3b8">Photo ${number}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function renderGallery() {
  galleryTrack.innerHTML = "";
  for (let i = 1; i <= galleryCount; i++) {
    const img = document.createElement("img");
    img.src = makePlaceholder(i);
    img.alt = `Gallery photo ${i}`;
    img.loading = "lazy";
    galleryTrack.append(img);
  }
  galleryTrack.style.transform = `translateX(-${galleryOffset}px)`;
  document.querySelector(".gallery-prev").disabled = galleryOffset <= 0;
}

function moveGallery(direction) {
  const firstImage = galleryTrack.querySelector("img");
  const step = firstImage ? firstImage.getBoundingClientRect().width + 10 : 230;
  const maxOffset = Math.max(0, galleryTrack.scrollWidth - galleryTrack.parentElement.clientWidth);
  galleryOffset = Math.max(0, Math.min(maxOffset, galleryOffset + direction * step));
  galleryTrack.style.transform = `translateX(-${galleryOffset}px)`;
  document.querySelector(".gallery-prev").disabled = galleryOffset <= 0;
}

document.querySelector(".gallery-prev")?.addEventListener("click", () => moveGallery(-1));
document.querySelector(".gallery-next")?.addEventListener("click", () => moveGallery(1));
window.addEventListener("resize", () => {
  galleryOffset = 0;
  renderGallery();
});
renderGallery();

const chatLauncher = document.querySelector(".chat-launcher");
const chatPanel = document.querySelector(".chat-panel");
const chatClose = document.querySelector(".chat-head button");
const chatForm = document.querySelector(".chat-form");
const chatLog = document.querySelector("#chat-log");
const chatMessages = [];

chatLauncher?.addEventListener("click", () => {
  chatPanel.hidden = !chatPanel.hidden;
});

chatClose?.addEventListener("click", () => {
  chatPanel.hidden = true;
});

function addChatMessage(role, text) {
  const bubble = document.createElement("p");
  bubble.className = role;
  bubble.textContent = text;
  chatLog.append(bubble);
  chatLog.scrollTop = chatLog.scrollHeight;
}

chatForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = chatForm.elements.message;
  const message = input.value.trim();
  if (!message) return;

  input.value = "";
  addChatMessage("user", message);
  chatMessages.push({ role: "user", text: message });
  const pending = document.createElement("p");
  pending.className = "assistant pending";
  pending.textContent = "Thinking...";
  chatLog.append(pending);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: chatMessages })
    });
    const payload = await response.json();
    const reply = response.ok ? payload.reply : payload.error;
    pending.textContent = reply || "I could not respond right now.";
    chatMessages.push({ role: "assistant", text: pending.textContent });
  } catch {
    pending.textContent = "Chat is unavailable right now. Please email geineldungao012@gmail.com.";
  }
});
