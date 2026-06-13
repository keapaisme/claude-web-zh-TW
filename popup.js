// popup.js — 控制面板邏輯

const btnTW = document.getElementById("btn-tw");
const btnCN = document.getElementById("btn-cn");
const toggleEnabled = document.getElementById("toggle-enabled");

// 讀取儲存設定
chrome.storage.sync.get({ lang: "zh-TW", enabled: true }, (data) => {
  setActiveLang(data.lang);
  toggleEnabled.checked = data.enabled;
});

// 切換繁體
btnTW.addEventListener("click", () => {
  applyLang("zh-TW");
});

// 切換簡體
btnCN.addEventListener("click", () => {
  applyLang("zh-CN");
});

// 開關
toggleEnabled.addEventListener("change", () => {
  const enabled = toggleEnabled.checked;
  chrome.storage.sync.set({ enabled });
  sendToTab({ type: "TOGGLE", enabled });
});

function applyLang(lang) {
  setActiveLang(lang);
  chrome.storage.sync.set({ lang, enabled: true });
  toggleEnabled.checked = true;
  sendToTab({ type: "SET_LANG", lang });
}

function setActiveLang(lang) {
  btnTW.classList.toggle("active", lang === "zh-TW");
  btnCN.classList.toggle("active", lang === "zh-CN");
}

function sendToTab(msg) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.id) {
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }
  });
}
