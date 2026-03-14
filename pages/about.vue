<template>
  <div class="page-shell">
    <AppHeader />
    <main class="main-content">
      <div class="about-wrap">

        <!-- Row 1: Photo + Bio -->
        <div class="row row-top">
          <div class="col col-third">
            <div class="photo-wrap">
              <img src="/20264996_1.png" alt="Jacqueline Williams" class="photo-img" />
              <div class="photo-overlay" />
            </div>
          </div>
          <div class="col col-twothirds bio-col">
            <header class="about-header">
              <h1 class="about-name">Jacqueline Williams</h1>
              <p class="about-location">
                <Icon icon="lucide:map-pin" width="13" height="13" />
                Greater Paris Area, France
              </p>
            </header>
            <div style="height: var(--space-sm);"></div>
            <p class="bio-block">
              I build <strong>digital products that work</strong>. Sometimes they involve <strong>maps</strong>,
              sometimes <strong>cloud infrastructure</strong>, sometimes <strong>web apps</strong> — often all three.
              There's often a bit of <strong>SysAdmin</strong>, <strong>DevOps</strong>, and <strong>IaC</strong> sprinkled in too.
              I usually thrive figuring things out quickly, with real-world constraints, and all in good humour.
              <br /><em><strong>~ Jack</strong>(<strong>ie</strong>) <strong>of all trades ~</strong></em><br /><br />
              Thank you for visiting my corner of the internet. There's more behind the scenes I can't show.
              Please reach out if you'd like to discuss anything you're working on — fellow human behind a screen, take care. 🌍
            </p>
          </div>
        </div>

        <!-- Row 2: Experience / Education + floating certs -->
        <div class="row row-bottom">
          <div class="col col-twothirds">
            <section class="about-section">
              <h2 class="section-label">Experience</h2>
              <ul class="about-list">
                <li>
                  <strong>Software Engineer</strong> ·
                  <a href="https://www.capgemini.com/#" target="_blank" rel="noopener noreferrer" class="ilink">Capgemini</a>
                  — Cloud &amp; GIS Systems
                </li>
                <li>
                  <strong>Web GIS Developer</strong> ·
                  <a href="https://www.thalesgroup.com/en" target="_blank" rel="noopener noreferrer" class="ilink">Thales</a>
                  — Defence &amp; Mapping Systems
                </li>
                <li>
                  <strong>GIS Developer</strong> ·
                  <a href="https://www.ign.fr/institut/identity-card" target="_blank" rel="noopener noreferrer" class="ilink">IGN </a>
                  — Spatial Analysis ·
                  <a href="https://www.camptocamp.org/yeti" target="_blank" rel="noopener noreferrer" class="ilink">Avalanche Risk Prediction</a>
                </li>
              </ul>
            </section>
            <section class="about-section">
              <h2 class="section-label">Education</h2>
              <ul class="about-list">
                <li>
                  <strong>Master — Information Systems Technologies</strong>,
                  <a href="https://geodata-paris.fr/en/node/51" target="_blank" rel="noopener noreferrer" class="ilink">Geodata Paris</a>
                </li>
                <li>
                  <strong>Bachelor — Geography &amp; Regional Planning</strong>,
                  <a href="https://www.univ-grenoble-alpes.fr/english/" target="_blank" rel="noopener noreferrer" class="ilink">Université Grenoble Alpes</a>
                </li>
              </ul>
            </section>
            <div style="height: var(--space-lg);"></div>
          </div>

          <div class="col col-third cert-col">
            <a
              href="https://learn.microsoft.com/en-us/users/jacquelinewilliams-4789/credentials/b494e1749d479843"
              target="_blank" rel="noopener noreferrer"
              class="cert-badge cert-badge-1"
            >
              <img src="/badges/microsoft-az900.png" alt="AZ-900" />
            </a>
            <a
              href="https://learn.microsoft.com/en-us/users/jacquelinewilliams-0307/credentials/687941e860f63049"
              target="_blank" rel="noopener noreferrer"
              class="cert-badge cert-badge-2"
            >
              <img src="/badges/microsoft-az104.png" alt="AZ-104" />
            </a>
          </div>
        </div>

      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
useSeoMeta({
  title: 'About — Jacqueline Williams',
  description: 'GIS Architect & Cloud Engineer. Designing resilient geospatial systems at the intersection of cloud, mapping, and infrastructure.',
})
</script>

<style scoped>
/* ── Shell ───────────────────────────────────────────────────────── */
.page-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.main-content {
  flex: 1;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  padding: var(--space-lg) var(--space-lg) var(--space-2xl);
}
.about-wrap {
  width: 100%;
  max-width: 860px;
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

/* ── Header (inside bio col) ─────────────────────────────────────── */
.about-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}
.about-name {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin: 0;
  text-align: center;
}
.about-location {
  display: flex;
  align-items: center;
  gap: 0.4em;
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  margin: 0;
}

/* ── Rows ────────────────────────────────────────────────────────── */
.row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--space-2xl);
}
.col-third     { flex: 0 0 32%; padding-top: var(--space-sm); }
.col-twothirds { flex: 1 1 0; min-width: 0; }

/* ── Photo ───────────────────────────────────────────────────────── */
.photo-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: var(--border-radius-xl, 0.75rem);
  overflow: hidden;
}
.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.photo-overlay {
  position: absolute;
  inset: 0;
  background: var(--color-surface-primary);
  opacity: 0.18;
  backdrop-filter: blur(1px);
  border-radius: inherit;
  pointer-events: none;
  transition: opacity 300ms;
}

/* Overlay shifts with color scheme */
[data-color-scheme="dark"] .photo-overlay {
  background: var(--color-surface-primary);
  opacity: 0.28;
}

/* ── Bio ─────────────────────────────────────────────────────────── */
.bio-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  justify-content: center;
}
.bio-block {
  margin: 0;
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed, 1.7);
}
/* ── Experience / Education ──────────────────────────────────────── */
.about-section { margin-bottom: var(--space-lg); }
.about-section:last-child { margin-bottom: 0; }
.section-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 var(--space-xs);
}
.about-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed, 1.55);
}

/* ── Cert column ─────────────────────────────────────────────────── */
.cert-col {
  position: relative;
  align-self: stretch;
}
.cert-badge {
  position: absolute;
  display: block;
  width: 64%;
  max-width: 120px;
  border-radius: var(--border-radius-lg, 0.5rem);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  opacity: 0.88;
  transition: opacity 200ms, box-shadow 200ms;
}
.cert-badge:hover {
  opacity: 1;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
}
.cert-badge img {
  width: 100%;
  height: auto;
  display: block;
}
/* Dice-2 diagonals: top-left, bottom-right */
.cert-badge-1 {
  top: 10%;
  left: 8%;
  animation: float1 18s ease-in-out infinite alternate;
}
.cert-badge-2 {
  bottom: 10%;
  right: 8%;
  animation: float2 22s ease-in-out infinite alternate;
}
@keyframes float1 {
  0%   { transform: translateY(0px)   rotate(-1deg); }
  100% { transform: translateY(12px)  rotate(1deg);  }
}
@keyframes float2 {
  0%   { transform: translateY(0px)   rotate(1deg);  }
  100% { transform: translateY(-12px) rotate(-1deg); }
}

/* ── Inline links ────────────────────────────────────────────────── */
.ilink {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px dotted var(--color-brand-primary-500);
  transition: border-color 150ms;
}
.ilink:hover { border-bottom-style: solid; }

/* ── Responsive ──────────────────────────────────────────────────── */
@media (max-width: 680px) {
  .main-content { padding: var(--space-lg) var(--space-md) var(--space-xl); }

  /* ── Top row: newspaper float ──────────────────────────────────── */
  /* Collapse flex row; photo floats left and ALL bio text wraps      */
  /* naturally around and below it — zero forced whitespace.          */
  .row-top {
    display: block;
    margin-bottom: var(--space-xl);
  }
  .row-top::after {
    content: '';
    display: block;
    clear: both;
  }

  .row-top .col-third {
    float: left;
    width: 38%;
    padding-top: 0;
    margin-right: var(--space-md);
    margin-bottom: var(--space-xs);
    flex: unset;
  }

  .row-top .bio-col {
    display: block;
    justify-content: unset;
    gap: unset;
  }

  .row-top .bio-block {
    font-size: var(--font-size-sm);
    margin-top: 0;
  }

  /* ── Bottom row: stack columns ─────────────────────────────────── */
  .row-bottom {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }
  .col-third, .col-twothirds { flex: 1 1 100%; width: 100%; }

  /* Certs above experience */
  .cert-col { order: -1; min-height: 190px; position: relative; }
  .col-twothirds { order: 1; }
  .cert-badge { position: absolute; }
}
</style>
