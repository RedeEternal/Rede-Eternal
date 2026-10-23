const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  toggle.textContent = open ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false');
  if (toggle) { toggle.textContent = '☰'; toggle.setAttribute('aria-label', 'Abrir menu'); }
}));
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
  const value = button.dataset.copy;
  const feedback = document.getElementById('copyFeedback');
  try {
    await navigator.clipboard.writeText(value);
    button.textContent = 'COPIADO!'; if (feedback) feedback.textContent = `Endereço copiado: ${value}`;
  } catch {
    const field = document.createElement('textarea'); field.value = value; field.style.position = 'fixed'; field.style.opacity = '0'; document.body.appendChild(field); field.select();
    const copied = document.execCommand('copy'); field.remove();
    button.textContent = copied ? 'COPIADO!' : 'COPIE MANUALMENTE'; if (feedback) feedback.textContent = copied ? `Endereço copiado: ${value}` : `Copie este endereço: ${value}`;
  }
  window.setTimeout(() => { button.textContent = 'COPIAR'; if (feedback) feedback.textContent = ''; }, 2800);
}));
document.getElementById('year').textContent = new Date().getFullYear();
