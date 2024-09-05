export const github_main = () => {
  const tab_menu = document.getElementById('tab-menu');

  let github = document.createElement('div');
  let hover_github = document.createElement('div');
  tab_menu.appendChild(github);

  github.textContent = 'GitHub';
  hover_github.textContent = 'GitHub 바로가기';

  github.addEventListener('mouseover', () => {
    github.style.backgroundColor = 'black';
    github.style.color = 'white';
    tab_menu.appendChild(hover_github);
  });

  github.addEventListener('mouseout', () => {
    github.style.backgroundColor = 'white';
    github.style.color = 'black';
    tab_menu.removeChild(hover_github);
  });
};
