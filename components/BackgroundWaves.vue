<template>
  <div class="bg-waves-wrapper" aria-hidden="true">

    <!-- ── Waves: anchored to the BOTTOM ──────────────────────── -->
    <svg class="waves-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 340" preserveAspectRatio="none" fill="none">
      <defs>
        <linearGradient id="waveGrad1" x1="0" y1="0" x2="1920" y2="340" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="var(--color-brand-primary-600)" stop-opacity="0.22" />
          <stop offset="100%" stop-color="var(--color-brand-primary-400)" stop-opacity="0.10" />
        </linearGradient>
        <linearGradient id="waveGrad2" x1="1920" y1="0" x2="0" y2="340" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="var(--color-brand-primary-500)" stop-opacity="0.16" />
          <stop offset="100%" stop-color="var(--color-brand-primary-300)" stop-opacity="0.07" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1920" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="var(--color-brand-primary-400)" stop-opacity="0.55" />
          <stop offset="100%" stop-color="var(--color-brand-primary-600)" stop-opacity="0.28" />
        </linearGradient>
        <linearGradient id="lineGradR" x1="1920" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="var(--color-brand-primary-400)" stop-opacity="0.45" />
          <stop offset="100%" stop-color="var(--color-brand-primary-600)" stop-opacity="0.20" />
        </linearGradient>
      </defs>

      <!-- Wave 1: left-to-right -->
      <path fill="url(#waveGrad1)">
        <animate
          attributeName="d"
          dur="14s"
          repeatCount="indefinite"
          values="
            M0,120 C320,50 640,200 960,120 C1280,50 1600,180 1920,120 L1920,340 L0,340Z;
            M0,145 C320,90 640,225 960,145 C1280,72 1600,202 1920,145 L1920,340 L0,340Z;
            M0,120 C320,50 640,200 960,120 C1280,50 1600,180 1920,120 L1920,340 L0,340Z"
        />
      </path>

      <!-- Wave 2: right-to-left -->
      <path fill="url(#waveGrad2)" opacity="0.75">
        <animate
          attributeName="d"
          dur="18s"
          repeatCount="indefinite"
          values="
            M0,185 C320,255 640,100 960,185 C1280,265 1600,115 1920,185 L1920,340 L0,340Z;
            M0,207 C320,279 640,122 960,207 C1280,287 1600,138 1920,207 L1920,340 L0,340Z;
            M0,185 C320,255 640,100 960,185 C1280,265 1600,115 1920,185 L1920,340 L0,340Z"
        />
      </path>

      <!-- Flow line 1 -->
      <path stroke="url(#lineGrad)" stroke-width="1.5" fill="none" opacity="0.55">
        <animate
          attributeName="d"
          dur="11s"
          repeatCount="indefinite"
          values="
            M0,70 C320,18 640,130 960,70 C1280,18 1600,108 1920,70;
            M0,90 C320,38 640,150 960,90 C1280,35 1600,128 1920,90;
            M0,70 C320,18 640,130 960,70 C1280,18 1600,108 1920,70"
        />
      </path>

      <!-- Flow line 2 -->
      <path stroke="url(#lineGradR)" stroke-width="1" fill="none" opacity="0.40">
        <animate
          attributeName="d"
          dur="15s"
          repeatCount="indefinite"
          values="
            M0,110 C320,168 640,55 960,110 C1280,175 1600,68 1920,110;
            M0,130 C320,190 640,75 960,130 C1280,196 1600,90 1920,130;
            M0,110 C320,168 640,55 960,110 C1280,175 1600,68 1920,110"
        />
      </path>

      <!-- Flow line 3: deep faint -->
      <path stroke="url(#lineGrad)" stroke-width="1" fill="none" opacity="0.20">
        <animate
          attributeName="d"
          dur="20s"
          repeatCount="indefinite"
          values="
            M0,240 C320,185 640,290 960,240 C1280,185 1600,268 1920,240;
            M0,260 C320,205 640,310 960,260 C1280,205 1600,288 1920,260;
            M0,240 C320,185 640,290 960,240 C1280,185 1600,268 1920,240"
        />
      </path>
    </svg>

  </div>
</template>

<style scoped>
.bg-waves-wrapper {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.waves-svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 340px;
}
</style>

