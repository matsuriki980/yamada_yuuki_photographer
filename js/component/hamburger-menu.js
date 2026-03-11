/**
 *  ハンバーガーメニュー
 */
export const initializeHamburgerMenu = () => {
  const menu = document.querySelector(".js-header-menu");
  const openBtn = document.querySelector(".js-header-menu-open-button");
  const closeBtn = document.querySelector(".js-header-menu-close-button");

  if (!menu || !openBtn || !closeBtn) return;

  // 開くときの処理
  const openMenu = () => {
    menu.showModal();
    document.body.style.overflow = "hidden";

    gsap.fromTo(
      menu,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      },
    );
  };

  // 閉じるときの処理
  const closeMenu = () => {
    gsap.to(menu, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        menu.close();
        document.body.style.overflow = "";
      },
    });
  };

  openBtn.addEventListener("click", () => {
    openMenu();
  });

  closeBtn.addEventListener("click", () => {
    closeMenu();
  });

  // SPのみ描画
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) {
      menu.close();
      document.body.style.overflow = "";
    }
  });
};
