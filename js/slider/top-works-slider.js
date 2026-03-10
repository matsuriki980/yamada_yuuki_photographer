/**
 *  topぺージ スライダー
 */

export const initTopSlider = () => {
  const topWorksSlider = document.querySelector(".js-top-works-slider");

  if (!topWorksSlider) return;

  const splide = new Splide(topWorksSlider, {
    type: "loop",
    perPage: "2",
    perMove: "1",
    drag: false,
    arrows: false,
    autoWidth: true,
    gap: 56,

    breakpoints: {
      900: {
        perPage: "1",
        gap: 40,
      },
    },
  });

  const bindSliderArrowControls = () => {
    const prevArrow = document.querySelector(".js-pagination-btn--prev");
    const nextArrow = document.querySelector(".js-pagination-btn--next");

    prevArrow.addEventListener("click", () => {
      splide.go("<");
    });

    nextArrow.addEventListener("click", () => {
      splide.go(">");
    });
  };

  splide.mount();
  bindSliderArrowControls();
};
