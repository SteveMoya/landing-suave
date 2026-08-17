/** Newsletter: validación + feedback (mock, sin backend). */
export function initNewsletter(): void {
  const form = document.querySelector<HTMLFormElement>('[data-newsletter-form]');
  if (!form) return;

  const input = form.querySelector<HTMLInputElement>('input[type="email"]');
  const status = document.querySelector<HTMLElement>('[data-newsletter-status]');
  const successMsg = status?.dataset.success ?? '¡Listo! Revisa tu correo.';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input?.value.trim() ?? '';
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!valid) {
      input?.setAttribute('aria-invalid', 'true');
      if (status) {
        status.textContent = 'Introduce un correo válido.';
        status.classList.remove('text-mint-deep');
        status.classList.add('text-coral-deep');
      }
      input?.focus();
      return;
    }

    if (status) {
      status.textContent = successMsg;
      status.classList.remove('text-coral-deep');
      status.classList.add('text-mint-deep');
    }
    form.reset();
  });
}