/**
 *  お問い合わせフォーム バリデーションチェック / データ保存
 */
export const initHandleContactFormSubmit = () => {
  const form = document.querySelector("#contact-form");

  if (!form) return;

  // バリデーションチェック
  const validateContactForm = () => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.reportValidity()) return;

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      sessionStorage.setItem("contactFormData", JSON.stringify(data));

      window.location.href = "./contact-confirm.html";
    });
  };

  // 入力値復元（確認画面から戻った時の入力情報を維持）
  // const restoreContactFormData = () => {
  //   const raw = sessionStorage.getItem("contactFormData");
  //   if (!raw) return;
  //
  //   const data = JSON.parse(raw);
  //
  //   Object.keys(data).forEach((key) => {
  //     const field = form.querySelector(`[name="${key}"]`);
  //
  //     if (!field) return;
  //
  //     field.value = data[key] ?? "";
  //   });
  // };

  validateContactForm();
  restoreContactFormData();
};
