/* ==========================================================================
   DEV PRATAP SINGH PORTFOLIO - MAIN APP CONTROLLER
   ========================================================================== */

import { projectsData } from '../data/projects-data.js';
import { certsData } from '../data/certs-data.js';
import { skillsData } from '../data/skills-data.js';
import { journeyData } from '../data/journey-data.js';

import { buildProjectVisual } from './project-visuals.js';
import { initHeroCanvas } from './hero-animation.js';
import { initModals } from './modal-handler.js';
import { initContactForm } from './contact-form.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvas();
  initModals();
  initContactForm();

  renderProjects('ALL');
  renderSkills();
  renderTimeline();
  renderCertifications();

  initNavbarScroll();
  initCategoryFilters();
  initScrollReveal();
});

/* ==========================================================================
   RENDER PROJECTS (EDITORIAL MASONRY GRID)
   ========================================================================== */
function renderProjects(filterCategory) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = filterCategory === 'ALL'
    ? projectsData
    : projectsData.filter(p => p.category === filterCategory || p.categoryLabel.includes(filterCategory));

  container.innerHTML = filtered.map(project => {
    const visualHtml = buildProjectVisual(project.id);
    const isFeaturedLarge = project.id === 'agri-pulse';
    const isFeaturedHalf = project.id === 'ai-interview-simulator' || project.id === 'pathlight-dijkstra';

    let cardClass = "project-card secondary-third";
    if (isFeaturedLarge) cardClass = "project-card featured-large";
    else if (isFeaturedHalf) cardClass = "project-card featured-half";

    return `
      <div class="${cardClass}" data-category="${project.category}">
        <!-- Visual Storytelling Cover -->
        <div class="project-visual-cover">
          ${visualHtml}
        </div>

        <!-- Info & Actions -->
        <div class="project-info">
          <div>
            <div class="project-badge-bar">
              <span class="project-category-tag" style="color: ${project.accentColor}; border: 1px solid ${project.accentColor}33;">
                ${project.categoryLabel}
              </span>
              ${project.featured ? `<span style="font-size: 0.7rem; font-weight: 700; color: #f59e0b;">★ FEATURED</span>` : ''}
            </div>

            <h3 class="project-title" style="margin-top: 0.75rem;">${project.title}</h3>
            <p class="project-subtitle">${project.subtitle}</p>
            <p class="project-description" style="margin-top: 0.75rem;">${project.summary}</p>
          </div>

          <div>
            <div class="project-tech-tags" style="margin-bottom: 1rem;">
              ${project.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>

            <div class="project-actions">
              ${project.caseStudy ? `
                <button onclick="openCaseStudy('${project.id}')" class="btn btn-primary btn-sm" style="background: ${project.accentColor}; border: none;">
                  View Case Study ↗
                </button>
              ` : ''}
              
              <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary btn-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>

              ${project.liveDemoUrl ? `
                <a href="${project.liveDemoUrl}" target="_blank" class="btn btn-outline btn-sm">
                  Live Demo ↗
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* Category Filter Handler */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjects(category);
    });
  });
}

/* ==========================================================================
   RENDER SKILLS
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skillsData.map(cat => `
    <div class="skills-category-group">
      <h3 class="skills-category-title">
        <span style="color: var(--text-accent);">✦</span> ${cat.category}
      </h3>
      <div class="skills-grid">
        ${cat.skills.map(skill => `
          <div class="skill-card">
            <div class="skill-header">
              <span class="skill-name">${skill.name}</span>
            </div>
            <p class="skill-context">${skill.context}</p>
            <div class="skill-projects-used">
              ${skill.usedIn.map(p => `<span class="skill-project-tag">${p}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   RENDER JOURNEY TIMELINE
   ========================================================================== */
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = journeyData.map(item => `
    <div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="timeline-content">
        <div class="timeline-period">${item.period}</div>
        <h4 class="timeline-title">${item.title}</h4>
        <div class="timeline-org">${item.organization}</div>
        <p class="timeline-desc">${item.description}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   RENDER CERTIFICATIONS
   ========================================================================== */
function renderCertifications() {
  const container = document.getElementById('certs-grid');
  if (!container) return;

  container.innerHTML = certsData.map(cert => `
    <div class="cert-card">
      <div class="cert-image-wrap" onclick="openCertLightbox('${cert.id}')">
        ${cert.image ? `
          <img src="${cert.image}" alt="${cert.title}" loading="lazy">
          <div class="cert-zoom-overlay">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            Click to View Certificate
          </div>
        ` : `
          <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📜</div>
            <div>${cert.title}</div>
          </div>
        `}
      </div>

      <div class="cert-body">
        <div>
          <span style="font-size: 0.7rem; font-weight: 700; color: var(--text-accent); text-transform: uppercase;">${cert.category}</span>
          <h4 class="cert-title" style="margin-top: 0.25rem;">${cert.title}</h4>
          <div class="cert-issuer">${cert.issuer}</div>
        </div>

        <div class="cert-meta">
          <span>${cert.date}</span>
          <button onclick="openCertLightbox('${cert.id}')" style="color: var(--text-accent); font-weight: 600; font-size: 0.8rem;">
            Inspect ↗
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   NAVBAR SCROLL OBSERVER & MOBILE MENU
   ========================================================================== */
function initNavbarScroll() {
  const header = document.querySelector('.header');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }
}

/* ==========================================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
