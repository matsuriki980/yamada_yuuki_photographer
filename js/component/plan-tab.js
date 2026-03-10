/**
 *  service-plan タブ切り替え
 */
export const initPlanTab = () => {
  const tabBtns = document.querySelectorAll(".js-service-plan-tab-btn");
  const tabPanels = document.querySelectorAll(".js-service-plan-list");

  if (!tabBtns || !tabPanels) return;

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      tabBtns.forEach((btn) =>
        btn.classList.remove("is-active", "service-plan-tab-btn--current"),
      );
      tabPanels.forEach((panel) => panel.classList.remove("is-active"));

      btn.classList.add("is-active", "service-plan-tab-btn--current");
      document
        .querySelector(`[data-panel="${target}"]`)
        .classList.add("is-active");
    });
  });
};
