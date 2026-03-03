/**
 *  ハンバーガーメニュー
 */
export const initializeHamburgerMenu = () => {
  const menu = document.querySelector(".js-header-menu");
  const openBtn = document.querySelector(".js-header-menu-open-button");
  const closeBtn = document.querySelector(".js-header-menu-close-button");

  if (!menu || !openBtn || !closeBtn) return;

  openBtn.addEventListener("click", () => {
    menu.showModal();
  });

  closeBtn.addEventListener("click", () => {
    menu.close();
  });
};
