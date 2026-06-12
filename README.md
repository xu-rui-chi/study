# 學習與成長導航

單頁式教育品牌網站。純 HTML / CSS / JavaScript，無框架，可直接部署至 GitHub Pages。

## 檔案
- `index.html` — 頁面結構與 SEO / Open Graph 設定
- `style.css` — 樣式（手機優先、響應式）
- `script.js` — 互動與捲動動畫
- `og-image.png` — 社群分享預覽圖（1200×630）

## 部署到 GitHub Pages
1. 將以上檔案上傳到 repo 根目錄（main 分支）。
2. Settings → Pages → Source 選 `main` / `(root)` → Save。
3. 約 1 分鐘後，網站會出現在 `https://<帳號>.github.io/Study-Guide/`。

## 上線前要改的兩個地方
1. `script.js` 最上方的 `FORM_URL` → 換成你的 Google 表單連結。
2. （選用）`index.html` 中被註解的 GA4 區塊 → 填入 Measurement ID 以開啟成效追蹤。
