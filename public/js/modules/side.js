import { imgs } from '../utils/img.js';

export const side = (icon_name, icon_textNode) => {
  const side_memu = document.getElementById('side-menu');
  const bundle = document.createElement('div');
  bundle.className = 'bundle';
  side_memu.appendChild(bundle);

  let icon = new Image();
  icon.id = 'E-mail';
  imgs(icon, '../storage/imgs/email.png', 'E-mail', 48, 48);
  let hover_icon = document.createElement('div');

  icon.textContent = icon_name;
  icon.style.cursor = 'pointer';

  const hover_icon_text = icon_textNode;
  hover_icon.textContent = hover_icon_text;

  bundle.appendChild(icon);

  icon.addEventListener('click', () => {
    navigator.clipboard
      .writeText(hover_icon_text)
      .then(() => {
        alert(`${hover_icon_text}이 복사되었습니다.`);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  });

  icon.addEventListener('mouseover', () => {
    bundle.appendChild(hover_icon);
    icon.style.backgroundColor = '#e2e2e2';
  });

  icon.addEventListener('mouseout', () => {
    icon.style.backgroundColor = 'white';
    bundle.removeChild(hover_icon);
  });
};
