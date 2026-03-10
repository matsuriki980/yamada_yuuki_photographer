/**
 * email.js
 * 保存済みお問い合わせデータを EmailJS で送信
 */

export const sendContactEmail = async () => {
  const raw = sessionStorage.getItem("contactFormData");
  if (!raw) return false;

  const data = JSON.parse(raw);

  try {
    emailjs.init({
      publicKey: "j_cU8tJuS9Ruk8HoW",
    });

    await emailjs.send("service_zk4awnz", "template_teiqpac", data);

    return true;
  } catch (error) {
    console.error("メール送信失敗:", error);
    alert("送信に失敗しました。");
    return false;
  }
};
