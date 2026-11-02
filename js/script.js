const pop = document.getElementById('pop');

document.querySelectorAll('.proj a[data-title]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('pop-img').src = a.dataset.img;
    document.getElementById('pop-img').alt = 'Capture du site ' + a.dataset.title;
    document.getElementById('pop-title').textContent = a.dataset.title;
    document.getElementById('pop-desc').textContent = a.dataset.desc;
    document.getElementById('pop-link').href = a.dataset.link;

    const tags = document.getElementById('pop-tags');
    tags.innerHTML = '';
    a.dataset.tags.split(',').forEach(t => {
      const s = document.createElement('span');
      s.className = 'pill';
      s.textContent = t;
      tags.appendChild(s);
    });

    pop.showModal();
  });
});

document.getElementById('close').addEventListener('click', () => pop.close());
pop.addEventListener('click', e => { if (e.target === pop) pop.close(); });

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

menu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});