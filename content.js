// content.js — Claude.ai 介面中文化
// 僅翻譯左側導覽列與系統介面，不觸碰對話訊息

(() => {
  // ── 翻譯詞庫（內嵌，免額外請求）──────────────────────────────
  const DICT = {
    "zh-TW": {
      "New chat":"新增對話","New Chat":"新增對話",
      "Search chats":"搜尋對話","Search conversations":"搜尋對話紀錄",
      "Recents":"最近對話","Yesterday":"昨天","Today":"今天",
      "Previous 7 days":"過去 7 天","Previous 30 days":"過去 30 天","Older":"更早之前",
      "Projects":"專案","New project":"新增專案","Add to project":"加入專案",
      "Project instructions":"專案設定","No projects yet":"尚無專案",
      "Settings":"設定","Profile":"個人資料","Account":"帳號",
      "Appearance":"外觀","Notifications":"通知","Privacy":"隱私",
      "Log out":"登出","Sign out":"登出","Sign in":"登入",
      "Upgrade plan":"升級方案","Upgrade to Pro":"升級至 Pro",
      "Manage subscription":"管理訂閱",
      "Rename":"重新命名","Delete":"刪除","Archive":"封存",
      "Share":"分享","Export chat":"匯出對話",
      "Pin":"釘選","Unpin":"取消釘選",
      "More options":"更多選項","Copy link":"複製連結",
      "Message Claude...":"輸入訊息…",
      "How can Claude help you today?":"今天需要什麼幫助？",
      "Attach files":"附加檔案","Upload file":"上傳檔案",
      "Voice input":"語音輸入","Stop":"停止",
      "Regenerate response":"重新生成","Edit":"編輯","Copy":"複製","Try again":"重試",
      "Choose model":"選擇模型",
      "Loading...":"載入中…","Thinking...":"思考中…","Typing...":"輸入中…",
      "No conversations yet":"尚無對話紀錄","Start a new chat":"開始新對話",
      "Something went wrong":"發生錯誤，請稍後再試",
      "General":"一般","Language":"語言","Theme":"主題",
      "Dark mode":"深色模式","Light mode":"淺色模式","System":"跟隨系統",
      "Save":"儲存","Cancel":"取消","Confirm":"確認","Close":"關閉","Done":"完成",
      "Claude can make mistakes.":"Claude 可能會出現錯誤。",
      "Consider checking important information.":"重要資訊請自行查證。",
      "Free plan":"免費方案","Pro plan":"Pro 方案","Team plan":"團隊方案",
      "Starred":"已加星號","All chats":"所有對話",
      "Help & support":"說明與支援","What's new":"最新消息",
      "Feedback":"意見回饋","Keyboard shortcuts":"鍵盤快捷鍵","Chats":"對話","Artifacts":"作品","Code":"程式碼","Customize":"自訂","Upgrade":"升級","Try the basics":"入門基礎","Bring history from another AI":"從其他 AI 匯入對話紀錄","So you're not starting from scratch":"無需從零開始","Connect your everyday tools":"連結你的常用工具","Claude gives better answers when it understands what matters to you":"讓 Claude 更了解你，回答更精準","Get the desktop app":"下載桌面版 App","Hand off tasks, code with Claude, and do more from your desktop":"在桌面版執行任務、撰寫程式，發揮更多功能","Skills":"技能","Memory":"記憶","Integrations":"整合服務","Connected apps":"已連結的應用程式","Recent":"最近","View all":"查看全部","See all":"查看全部","Create project":"建立專案","No chats yet":"尚無對話","Search":"搜尋"
    },
    "zh-CN": {
      "New chat":"新建对话","New Chat":"新建对话",
      "Search chats":"搜索对话","Search conversations":"搜索对话记录",
      "Recents":"最近对话","Yesterday":"昨天","Today":"今天",
      "Previous 7 days":"过去 7 天","Previous 30 days":"过去 30 天","Older":"更早以前",
      "Projects":"项目","New project":"新建项目","Add to project":"添加到项目",
      "Project instructions":"项目设置","No projects yet":"暂无项目",
      "Settings":"设置","Profile":"个人资料","Account":"账号",
      "Appearance":"外观","Notifications":"通知","Privacy":"隐私",
      "Log out":"退出登录","Sign out":"退出登录","Sign in":"登录",
      "Upgrade plan":"升级方案","Upgrade to Pro":"升级至 Pro",
      "Manage subscription":"管理订阅",
      "Rename":"重命名","Delete":"删除","Archive":"归档",
      "Share":"分享","Export chat":"导出对话",
      "Pin":"置顶","Unpin":"取消置顶",
      "More options":"更多选项","Copy link":"复制链接",
      "Message Claude...":"输入消息…",
      "How can Claude help you today?":"今天需要什么帮助？",
      "Attach files":"附加文件","Upload file":"上传文件",
      "Voice input":"语音输入","Stop":"停止",
      "Regenerate response":"重新生成","Edit":"编辑","Copy":"复制","Try again":"重试",
      "Choose model":"选择模型",
      "Loading...":"加载中…","Thinking...":"思考中…","Typing...":"输入中…",
      "No conversations yet":"暂无对话记录","Start a new chat":"开始新对话",
      "Something went wrong":"出现错误，请稍后再试",
      "General":"常规","Language":"语言","Theme":"主题",
      "Dark mode":"深色模式","Light mode":"浅色模式","System":"跟随系统",
      "Save":"保存","Cancel":"取消","Confirm":"确认","Close":"关闭","Done":"完成",
      "Claude can make mistakes.":"Claude 可能会出现错误。",
      "Consider checking important information.":"重要信息请自行查证。",
      "Free plan":"免费方案","Pro plan":"Pro 方案","Team plan":"团队方案",
      "Starred":"已加星标","All chats":"所有对话",
      "Help & support":"帮助与支持","What's new":"最新动态",
      "Feedback":"意见反馈","Keyboard shortcuts":"键盘快捷键","Chats":"对话","Artifacts":"作品","Code":"代码","Customize":"自定义","Upgrade":"升级","Try the basics":"入门基础","Bring history from another AI":"从其他 AI 导入对话记录","So you're not starting from scratch":"无需从零开始","Connect your everyday tools":"连接你的常用工具","Claude gives better answers when it understands what matters to you":"让 Claude 更了解你，回答更精准","Get the desktop app":"下载桌面版 App","Hand off tasks, code with Claude, and do more from your desktop":"在桌面版执行任务、编写代码，发挥更多功能","Skills":"技能","Memory":"记忆","Integrations":"集成服务","Connected apps":"已连接的应用","Recent":"最近","View all":"查看全部","See all":"查看全部","Create project":"创建项目","No chats yet":"暂无对话","Search":"搜索"
    }
  };

  // ── 狀態 ─────────────────────────────────────────────────────
  let lang = "zh-TW";
  let enabled = true;
  let observer = null;

  // ── 判斷是否為「對話訊息」節點（不翻譯）──────────────────────
  function isConversationNode(el) {
    // 排除對話泡泡、markdown 渲染區、使用者輸入框
    return el.closest(
      '[data-testid="user-message"], ' +
      '[data-testid="assistant-message"], ' +
      '.prose, ' +
      '[class*="message"], ' +
      '[class*="chat-message"], ' +
      'textarea, ' +
      '[contenteditable="true"]'
    );
  }

  // ── 翻譯單一文字節點 ──────────────────────────────────────────
  function translateNode(node) {
    if (!enabled) return;
    if (node.nodeType !== Node.TEXT_NODE) return;
    if (isConversationNode(node.parentElement)) return;

    const dict = DICT[lang] || DICT["zh-TW"];
    const original = node.textContent.trim();
    if (!original) return;

    for (const [en, zh] of Object.entries(dict)) {
      if (node.textContent === en || node.textContent === en + " ") {
        node.textContent = zh;
        return;
      }
    }
  }

  // ── 翻譯 placeholder ──────────────────────────────────────────
  function translateAttributes(el) {
    if (!enabled) return;
    if (isConversationNode(el)) return;

    const dict = DICT[lang] || DICT["zh-TW"];
    const attrs = ["placeholder", "aria-label", "title"];
    for (const attr of attrs) {
      const val = el.getAttribute(attr);
      if (val && dict[val]) el.setAttribute(attr, dict[val]);
    }
  }

  // ── 遍歷並翻譯整棵子樹 ───────────────────────────────────────
  function translateTree(root) {
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      {
        acceptNode(node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (isConversationNode(node)) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) {
        translateNode(node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        translateAttributes(node);
      }
    }
  }

  // ── MutationObserver：監聽 DOM 變動 ──────────────────────────
  function startObserver() {
    observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) translateTree(node);
          else if (node.nodeType === Node.TEXT_NODE) translateNode(node);
        }
        if (m.type === "characterData") translateNode(m.target);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  // ── 初始化 ────────────────────────────────────────────────────
  function init() {
    chrome.storage.sync.get({ lang: "zh-TW", enabled: true }, (data) => {
      lang = data.lang;
      enabled = data.enabled;
      if (enabled) {
        translateTree(document.body);
        startObserver();
      }
    });
  }

  // ── 監聽來自 popup 的訊息（切換語言 / 開關）──────────────────
  chrome.runtime.onMessage.addListener((msg) => {
    if (msg.type === "SET_LANG") {
      lang = msg.lang;
      enabled = true;
      translateTree(document.body);
      if (!observer) startObserver();
    }
    if (msg.type === "TOGGLE") {
      enabled = msg.enabled;
      if (!enabled && observer) {
        observer.disconnect();
        observer = null;
        location.reload(); // 停用時還原，重新載入最快
      } else if (enabled) {
        translateTree(document.body);
        if (!observer) startObserver();
      }
    }
  });

  // ── 等待 body 就緒後啟動 ──────────────────────────────────────
  if (document.body) {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
