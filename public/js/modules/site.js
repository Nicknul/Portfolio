export const site = (site_name, site_link) => {
  const tab_menu = document.getElementById('tab-menu');

  const bundle = document.createElement('div');
  bundle.className = 'bundle';
  tab_menu.appendChild(bundle);

  let site = document.createElement('div');
  bundle.appendChild(site);
  site.textContent = site_name;
  site.style.cursor = 'pointer';

  let hover_site = document.createElement('div');
  hover_site.textContent = `${site_name} 보러가기`;

  site.addEventListener('click', () => {
    window.open(site_link, '_blank');
  });

  site.addEventListener('mouseover', () => {
    site.style.backgroundColor = 'black';
    site.style.color = 'white';
    bundle.appendChild(hover_site);
  });

  site.addEventListener('mouseout', () => {
    site.style.backgroundColor = 'white';
    site.style.color = 'black';
    bundle.removeChild(hover_site);
  });
};
