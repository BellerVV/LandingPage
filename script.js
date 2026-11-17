// mostram as atrações do dia selecionado
document.querySelectorAll('.day-tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.day-tab').forEach(item => {
    item.classList.remove('active');
    item.setAttribute('aria-selected', 'false');
  });
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  document.querySelectorAll('.artist-list').forEach(list => {
    list.classList.toggle('hidden', list.dataset.list !== tab.dataset.day);
  });
}));

// menu para celular: abre e fecha a navegação
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.topbar nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});