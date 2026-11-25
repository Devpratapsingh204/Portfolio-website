/* ==========================================================================
   MODAL CONTROLLER MODULE
   Handles Case Study Drawers and Certificate Lightboxes
   ========================================================================== */

import { projectsData } from '../data/projects-data.js';
import { certsData } from '../data/certs-data.js';

export function initModals() {
  // Case Study Modal Elements
  const projectModal = document.getElementById('project-modal');
  const projectModalContainer = document.getElementById('project-modal-container');
  const closeProjectModalBtn = document.getElementById('close-project-modal');

  // Certificate Lightbox Elements
  const certModal = document.getElementById('cert-modal');
  const certModalContainer = document.getElementById('cert-modal-container');
  const closeCertModalBtn = document.getElementById('close-cert-modal');

  // Open Case Study Modal
  window.openCaseStudy = function(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !project.caseStudy) return;

    const cs = project.caseStudy;
    projectModalContainer.innerHTML = `
      <div class="case-study-header" style="border-bottom: 1px solid var(--bg-glass-border); padding: 2.5rem 2.5rem 1.5rem 2.5rem;">
        <span style="font-size: 0.8rem; font-weight: 700; color: ${project.accentColor}; text-transform: uppercase; letter-spacing: 0.05em;">CASE STUDY • ${project.categoryLabel}</span>
        <h2 class="case-study-title" style="font-size: 2rem; font-weight: 800; margin-top: 0.5rem; color: var(--text-main);">${project.title}</h2>
        <p style="color: var(--text-muted); font-size: 1rem;">${project.subtitle}</p>
        
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;">
          ${project.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('')}
        </div>
      </div>

      <div class="case-study-body">
        <div class="case-study-section">
          <h4 class="case-study-section-title">💡 Why I Built It</h4>
          <p class="case-study-text">${cs.whyIBuiltIt}</p>
        </div>

        <div class="case-study-section">
          <h4 class="case-study-section-title">🚨 The Problem</h4>
          <p class="case-study-text">${cs.problem}</p>
        </div>

        <div class="case-study-section">
          <h4 class="case-study-section-title">🛠️ Technical Approach & Architecture</h4>
          <p class="case-study-text">${cs.approach}</p>
        </div>

        <div class="case-study-section">
          <h4 class="case-study-section-title">🎯 Key Results</h4>
          <ul class="case-study-list">
            ${cs.results.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>

        <div class="case-study-section">
          <h4 class="case-study-section-title">🧠 What I Learned</h4>
          <p class="case-study-text">${cs.learnings}</p>
        </div>

        <div style="display: flex; gap: 1rem; margin-top: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--bg-glass-border);">
          <a href="${project.githubUrl}" target="_blank" class="btn btn-primary" style="background: ${project.accentColor};">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Explore Codebase
          </a>
          ${project.liveDemoUrl ? `
            <a href="${project.liveDemoUrl}" target="_blank" class="btn btn-secondary">
              Live Demo ↗
            </a>
          ` : ''}
        </div>
      </div>
    `;
    projectModal.classList.add('active');
  };

  // Open Certificate Lightbox
  window.openCertLightbox = function(certId) {
    const cert = certsData.find(c => c.id === certId);
    if (!cert) return;

    certModalContainer.innerHTML = `
      <div style="padding: 2rem; text-align: center;">
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-accent); text-transform: uppercase;">CERTIFICATE PREVIEW</span>
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-main); margin-top: 0.25rem;">${cert.title}</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">${cert.issuer} • ${cert.date}</p>

        ${cert.image ? `
          <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--bg-glass-border); margin-bottom: 1.5rem; max-height: 550px; background: #000;">
            <img src="${cert.image}" alt="${cert.title}" style="width: 100%; height: auto; max-height: 550px; object-fit: contain;">
          </div>
        ` : `
          <div style="padding: 3rem; background: var(--bg-card); border-radius: 12px; margin-bottom: 1.5rem;">
            <p style="color: var(--text-muted);">${cert.description}</p>
          </div>
        `}

        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.85rem; color: var(--text-muted); padding-top: 1rem; border-top: 1px solid var(--bg-glass-border);">
          <span>Credential ID: <strong style="color: var(--text-main);">${cert.credentialId}</strong></span>
          ${cert.credentialUrl ? `
            <a href="${cert.credentialUrl}" target="_blank" class="btn btn-outline btn-sm">Verify Credential ↗</a>
          ` : ''}
        </div>
      </div>
    `;
    certModal.classList.add('active');
  };

  // Close handlers
  if (closeProjectModalBtn) {
    closeProjectModalBtn.addEventListener('click', () => projectModal.classList.remove('active'));
  }
  if (closeCertModalBtn) {
    closeCertModalBtn.addEventListener('click', () => certModal.classList.remove('active'));
  }

  [projectModal, certModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    }
  });
}
