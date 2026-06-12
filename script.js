/* =========================================================
   學習與成長導航 — script.js
   無框架、原生 JS
   ========================================================= */

/* ---- 1. 在這裡填入你的 Google 表單連結 ---- */
const FORM_URL = "https://forms.gle/y4xX1ay5yJwuL1MR7";

document.addEventListener("DOMContentLoaded", () => {

  /* ---- 年份 ---- */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---- 固定導覽列：捲動時加底色 ---- */
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- 捲動進場動畫（IntersectionObserver，輕量）---- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach((el) => {
    // 同一群組的元素做輕微錯位，畫面更有層次
    const siblings = [...el.parentElement.querySelectorAll(".reveal")];
    el.style.transitionDelay = (siblings.indexOf(el) * 70) + "ms";
    io.observe(el);
  });

  /* ---- CTA：套用表單連結 + 成效追蹤 ----
     所有 class="cta" 的按鈕都會指向表單。
     若連結含 #apply（頁內錨點）則保留捲動行為，不覆蓋。            */
  document.querySelectorAll(".cta").forEach((btn) => {
    const href = btn.getAttribute("href");
    const isAnchor = href && href.startsWith("#");

    // 真正送出申請的主按鈕才直接連到表單；導覽列/Hero 先捲到申請區
    if (btn.id === "apply-cta" || (!isAnchor && href === "#")) {
      btn.href = FORM_URL;
      btn.target = "_blank";
      btn.rel = "noopener";
    }

    btn.addEventListener("click", () => {
      const source = btn.dataset.source || "unknown";
      // 有裝 GA4 就送事件，沒裝就印在 console，方便你之後接分析
      if (typeof gtag === "function") {
        gtag("event", "cta_click", { source });
      } else {
        console.log("[CTA] click from:", source);
      }
    });
  });
});
