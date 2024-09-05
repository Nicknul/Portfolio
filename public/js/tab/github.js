export const github_main = () => {
  const tab_menu = document.getElementById('tab-menu');
  const bundle = document.createElement('div');
  bundle.className = 'bundle';
  tab_menu.appendChild(bundle);

  let github = document.createElement('div');
  let hover_github = document.createElement('div');
  bundle.appendChild(github);

  github.textContent = 'GitHub';
  github.style.cursor = 'pointer';

  hover_github.textContent = 'GitHub 보러가기';

  github.addEventListener('click', () => {
    window.open('https://github.com/Nicknul', '_blank');
  });

  github.addEventListener('mouseover', () => {
    github.style.backgroundColor = 'black';
    github.style.color = 'white';
    bundle.appendChild(hover_github);
  });

  github.addEventListener('mouseout', () => {
    github.style.backgroundColor = 'white';
    github.style.color = 'black';
    bundle.removeChild(hover_github);
  });
};
