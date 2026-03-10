/**
 *  下部ヘッダー 表示切替
 */
export const initHeaderBottom = () => {
  const headerBottom = document.querySelector(".js-header-bottom");
  const triggerElement = document.querySelector(".js-header--bottom-trigger");

  if (!headerBottom) return;

  const showHeaderBottomOnScroll = () => {
    gsap.to(headerBottom, {
      autoAlpha: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const hideHeaderBottomOnScroll = () => {
    gsap.to(headerBottom, {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  ScrollTrigger.create({
    trigger: triggerElement,
    // markers: true,
    start: "bottom top",
    onEnter: () => showHeaderBottomOnScroll(),
    onLeaveBack: () => hideHeaderBottomOnScroll(),
  });
};
