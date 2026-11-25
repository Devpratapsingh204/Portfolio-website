/* ==========================================================================
   CONTACT FORM MODULE
   Functional mailto email generator and direct contact interaction
   ========================================================================== */

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim() || 'Portfolio Project Collaboration';
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
    const mailtoBody = encodeURIComponent(`Hi Dev Pratap,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`);

    // Trigger direct mail client
    window.location.href = `mailto:devpratap284@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Feedback
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `✓ Email Client Opened!`;
    submitBtn.style.background = '#10b981';

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = '';
    }, 4000);
  });
}
