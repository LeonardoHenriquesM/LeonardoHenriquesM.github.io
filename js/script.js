const modal = document.getElementById('modal');
const vid = document.getElementById('vid');

document.querySelectorAll('.proj a[data-video]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    vid.src = a.dataset.video;
    modal.showModal();
    vid.play();
  });
});

document.getElementById('close').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
modal.addEventListener('close', () => { vid.pause(); vid.removeAttribute('src'); vid.load(); });