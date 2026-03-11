/**
 *  下部ヘッダー 表示切替
 */
export const initHeaderBottom = () => {
  const headerBottom = document.querySelector(".js-header-bottom");
  const triggerElement = document.querySelector(".js-header--bottom-trigger");

  if (!headerBottom) return;

  // 表示処理
  const showHeaderBottomOnScroll = () => {
    gsap.to(headerBottom, {
      autoAlpha: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // 非表示処理
  const hideHeaderBottomOnScroll = () => {
    gsap.to(headerBottom, {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // fvの下端を基準に実行
  ScrollTrigger.create({
    trigger: triggerElement,
    // markers: true,
    start: "bottom top",
    onEnter: () => showHeaderBottomOnScroll(),
    onLeaveBack: () => hideHeaderBottomOnScroll(),
  });
};
