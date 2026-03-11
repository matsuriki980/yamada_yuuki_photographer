/**
 *  お問い合わせフォーム 入力確認画面　入力値反映
 */

import { sendContactEmail } from "./email.js";

export const initContactConfirm = () => {
  // フォーム入力値を反映する
  const dataReflection = () => {
    const raw = sessionStorage.getItem("contactFormData");

    if (!raw) return;

    let data = {};

    try {
      data = JSON.parse(raw);
    } catch {
      sessionStorage.removeItem("contactFormData");
      return;
    }

    document.querySelectorAll("[data-key]").forEach((el) => {
      const key = el.dataset.key;
      el.textContent = data[key] ?? "";
    });
  };

  // ボタンの遷移先を設定する
  const movePage = () => {
    const backButton = document.querySelector("#back-btn");
    const submitButton = document.querySelector("#submit-btn");

    if (!backButton || !submitButton) return;

    backButton.addEventListener("click", () => {
      window.location.href = "./contact.html";
    });

    submitButton.addEventListener("click", async () => {
      const isSuccess = await sendContactEmail();
      if (!isSuccess) return;

      sessionStorage.removeItem("contactFormData");
      window.location.href = "./contact-thanks.html";
    });
  };

  dataReflection();
  movePage();
};
