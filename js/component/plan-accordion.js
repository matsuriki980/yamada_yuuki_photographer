/**
 *  service-plan アコーディオン 開閉アニメーション
 */
export const initPlanAccordion = () => {
  const details = document.querySelectorAll(".js-details");

  if(!details) return;

  details.forEach((details) => {
    const summary = details.querySelector(".js-summary");
    const content = details.querySelector(".js-accordion");

    // 開くときの処理
    const openAccordion = () => {
      details.open = true;

      gsap.fromTo(
        content,
        { height: 0 },
        { height: "auto", duration: 0.8, ease: "power2.out" },
      );
    };

    // 閉じるときの処理
    const closeAccordion = () => {
      gsap.to(content, {
        height: 0,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          details.open = false;
        },
      });
    };

    summary.addEventListener("click", (e) => {
      e.preventDefault(); // デフォルトの挙動を止める

      if (!details.open) {
        openAccordion();
      } else {
        closeAccordion();
      }
    });
  });
};
