/**
 * @param {Element} element_1 이벤트 적용 시킬 요소
 * @param {Element} element_2 이벤트 발동 시 나타날 요소
 */
export const hover = (element_1, element_2) => {
  element_1.addEventListener('mouseover', () => {
    element_1.appendChild(element_2);
  });

  element_1.addEventListener('mouseout', () => {
    element_1.removeChild(element_2);
  });
};
