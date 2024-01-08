/**
 *
 * @param {*} tooltip Variable where the HTML element with `tooltip` ID is saved.
 * @param {*} popperInstance Variable where popper instance is saved.
 * @param {*} state Either `show` or `hide`.
 */
export const toggleTooltipVisibility = (tooltip, popperInstance, state) => {
  // `data-show` is simply the name of an HTML attribute that's used as a reference when changing tooltip styles.
  state === "show"
    ? tooltip.setAttribute("data-show", "")
    : tooltip.removeAttribute("data-show");

  popperInstance.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: "eventListeners", enabled: state === "show" },
    ],
  }));

  state === "show" && popperInstance.update();
};

export const hide = () => {};
