# Claude 繁體中文介面套件

> 將 Claude.ai 左側導覽列與系統介面中文化的 Chrome 擴充套件，不影響對話內容。

![License](https://img.shields.io/badge/license-MIT-blue)
![Manifest](https://img.shields.io/badge/manifest-v3-green)
![Size](https://img.shields.io/badge/size-8.4KB-lightgrey)

---

## 功能特色

- ✅ 一安裝即自動中文化，無需任何設定
- 🔁 繁體中文 / 简体中文 一鍵切換
- 🛡️ **僅翻譯介面**：左側導覽、按鈕、選單、系統提示
- 💬 **完全不影響對話內容**，Claude 回答維持原樣
- ⚡ 體積極小（8.4 KB），無外部依賴

---

## 套件結構

```
claude-zh-tw/
├── manifest.json     # 擴充套件設定（Manifest V3）
├── content.js        # 主翻譯腳本（MutationObserver 監聽 DOM）
├── popup.html        # 控制面板介面
└── popup.js          # 控制面板邏輯（語言切換、開關）
```

---

## 安裝方式

### 方法一：直接載入（開發者模式）

1. 下載本專案並解壓縮（或 `git clone`）
2. 開啟 Chrome，網址列輸入：

   ```
   chrome://extensions
   ```

3. 右上角開啟「**開發人員模式**」
4. 點擊「**載入未封裝項目**」→ 選擇 `claude-zh-tw` 資料夾
5. 開啟 [claude.ai](https://claude.ai)，介面即自動中文化 ✅

### 方法二：打包安裝

```bash
git clone https://github.com/keapaisme/claude-web-zh-TW.git
# 於 chrome://extensions 選擇「載入未封裝項目」→ 選擇資料夾
```

---
## 中文未完全顯示？
注意：Claude.ai 若未來更新 HTML 結構，部分詞彙可能需要補充到翻譯詞庫（content.js 內的 DICT 物件）。如需新增詞彙，直接編輯即可，無需重新打包。

## 安裝後可以刪除檔案嗎？

| 檔案 | 可否刪除 |
|------|----------|
| `claude-zh-tw.zip`（壓縮檔） | ✅ 可以刪除 |
| `claude-zh-tw/`（資料夾） | ❌ 必須保留 |

Chrome 的「載入未封裝項目」模式會**直接讀取資料夾**，並不會將檔案複製到 Chrome 內部。若資料夾被刪除，Chrome 下次啟動時會報錯並停用擴充套件。

建議將資料夾移至不會誤刪的位置，例如 `Documents` 或 `Applications`。

### 想完全不依賴資料夾？

**方法一：打包成 `.crx`**
在 `chrome://extensions` 點擊「封裝擴充功能」，產生獨立安裝檔。注意 Chrome 對未上架的 `.crx` 有安全限制，安裝上較麻煩。

**方法二：上架 Chrome Web Store**
審核通過後任何人皆可一鍵安裝，無需保留資料夾。需一次性繳交 $5 美元開發者費用。

---

## 使用說明

點擊瀏覽器工具列的擴充套件圖示，開啟控制面板：

| 操作 | 說明 |
|------|------|
| 點擊「繁體」 | 切換為繁體中文介面 |
| 點擊「简体」 | 切換為简体中文介面 |
| 開關切換 | 停用後自動還原原始英文介面（重新載入頁面） |

---

## 翻譯範圍

### 已翻譯項目

- 左側導覽列（新增對話、搜尋、最近對話、專案）
- 帳號選單（設定、登出、升級方案）
- 對話操作（重新命名、刪除、封存、分享、釘選）
- 輸入框 placeholder
- 系統按鈕（儲存、取消、確認、關閉）
- 狀態提示（載入中、思考中、發生錯誤）

### 不翻譯項目（保持原狀）

- 所有對話訊息（使用者輸入 & Claude 回答）
- Markdown 渲染內容
- 程式碼區塊

---

## 新增翻譯詞彙

若 Claude.ai 介面更新後出現未翻譯的文字，直接編輯 `content.js` 中的 `DICT` 物件：

```js
const DICT = {
  "zh-TW": {
    // 在此新增：「英文原文」:「繁體中文翻譯」
    "New feature": "新功能",
  },
  "zh-CN": {
    "New feature": "新功能",
  }
};
```

修改後，於 `chrome://extensions` 點擊「重新載入」即可生效，無需重新打包。

---

## 技術說明

- **Manifest V3**：符合 Chrome 最新擴充套件規範
- **MutationObserver**：監聽 DOM 變動，動態翻譯非同步載入的介面元素
- **chrome.storage.sync**：設定同步至 Google 帳號，換裝置不需重設
- **無外部請求**：翻譯詞庫內嵌於程式碼，完全離線運作

---

## 貢獻方式

歡迎送出 Pull Request 補充翻譯詞彙或修正錯誤！

1. Fork 本專案
2. 編輯 `content.js` 的 `DICT` 物件，新增或修正詞彙
3. 送出 PR，說明變更內容

---

## 授權

MIT License © 2025

> **免責聲明**：本套件為非官方社群作品，與 Anthropic 無關。Claude.ai 介面若有重大改版，部分翻譯可能需要更新。
