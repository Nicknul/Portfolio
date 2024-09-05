/**
 * @param {Element} element_name 요소 이름
 * @param {string} src 이미지 경로
 * @param {string} alt 이미지 설명
 * @param {number} width 너비
 * @param {number} height 폭
 */
export const imgs = (element_name, src, alt, width, height) => {
  element_name.src = src;
  element_name.alt = alt;
  element_name.width = width;
  element_name.height = height;
};
