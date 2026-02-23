<template>
  <div class="page-shell">
    <AppHeader @lang-change="onLangChange" />

    <main class="main-content">
      <div class="container">

        <!-- Tagline -->
        <p class="tagline">{{ ui.tagline }}</p>

        <!-- Mode selector -->
        <div class="mode-selector" role="group" :aria-label="ui.modeLabel">
          <button
            class="mode-btn"
            :class="{ active: mode === 'work' }"
            @click="setMode('work')"
          >
            {{ ui.work }}
          </button>
          <button
            class="mode-btn"
            :class="{ active: mode === 'break' }"
            @click="setMode('break')"
          >
            {{ ui.breakLabel }}
          </button>
        </div>

        <!-- Timer display -->
        <div
          class="timer-display"
          :class="{ running: isRunning, done: isDone }"
          aria-live="polite"
          :aria-label="`${ui.timerLabel}: ${formattedTime}`"
        >
          {{ formattedTime }}
        </div>

        <!-- Controls -->
        <div class="controls">
          <button
            class="ctrl-btn ctrl-primary"
            @click="togglePlay"
            :aria-label="isRunning ? ui.pause : ui.play"
          >
            <Icon v-if="isRunning" icon="lucide:pause" width="22" height="22" />
            <Icon v-else icon="lucide:play" width="22" height="22" />
          </button>

          <button
            class="ctrl-btn"
            @click="reset"
            :aria-label="ui.reset"
          >
            <Icon icon="lucide:rotate-ccw" width="20" height="20" />
          </button>

          <!-- Sound toggle -->
          <button
            class="ctrl-btn sound-btn"
            :class="{ active: soundOn }"
            @click="soundOn = !soundOn"
            :aria-label="ui.sound"
            :aria-pressed="soundOn"
          >
            <Icon v-if="soundOn" icon="lucide:volume-2" width="18" height="18" />
            <Icon v-else icon="lucide:volume-x" width="18" height="18" />
            <span class="sound-label">{{ ui.sound }}</span>
          </button>
        </div>

      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

// ── i18n ─────────────────────────────────────────────────────────────────────

const translations = {
  en: {
    tagline: 'Manage your energy, not just your time.',
    modeLabel: 'Timer mode',
    work: 'Work',
    breakLabel: 'Break',
    timerLabel: 'Time remaining',
    play: 'Start',
    pause: 'Pause',
    reset: 'Reset',
    sound: 'Sound',
  },
  fr: {
    tagline: 'Gérez votre énergie, pas seulement votre temps.',
    modeLabel: 'Mode minuterie',
    work: 'Travail',
    breakLabel: 'Pause',
    timerLabel: 'Temps restant',
    play: 'Démarrer',
    pause: 'Pause',
    reset: 'Réinitialiser',
    sound: 'Son',
  },
}

const lang = ref('en')
onMounted(() => {
  const stored = localStorage.getItem('lang')
  if (stored === 'fr' || stored === 'en') lang.value = stored
})
const onLangChange = (l) => { lang.value = l }
const ui = computed(() => translations[lang.value] ?? translations.en)

// ── Timer state ───────────────────────────────────────────────────────────────

const DURATIONS = { work: 25 * 60, break: 5 * 60 }

const mode = ref('work')
const secondsLeft = ref(DURATIONS.work)
const isRunning = ref(false)
const isDone = ref(false)
const soundOn = ref(false)

let interval = null

const formattedTime = computed(() => {
  const m = Math.floor(secondsLeft.value / 60).toString().padStart(2, '0')
  const s = (secondsLeft.value % 60).toString().padStart(2, '0')
  return `${m}:${s}`
})

function setMode(m) {
  if (interval) clearInterval(interval)
  interval = null
  mode.value = m
  secondsLeft.value = DURATIONS[m]
  isRunning.value = false
  isDone.value = false
}

function reset() {
  if (interval) clearInterval(interval)
  interval = null
  secondsLeft.value = DURATIONS[mode.value]
  isRunning.value = false
  isDone.value = false
}

function tick() {
  if (secondsLeft.value <= 0) {
    clearInterval(interval)
    interval = null
    isRunning.value = false
    isDone.value = true
    if (soundOn.value) playBeep()
    return
  }
  secondsLeft.value--
}

function togglePlay() {
  if (isDone.value) { reset(); return }
  if (isRunning.value) {
    clearInterval(interval)
    interval = null
    isRunning.value = false
  } else {
    isRunning.value = true
    isDone.value = false
    interval = setInterval(tick, 1000)
  }
}

onUnmounted(() => { if (interval) clearInterval(interval) })

// ── Sound ─────────────────────────────────────────────────────────────────────

function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = 'sine'
    osc.frequency.setValueAtTime(880, ctx.currentTime)
    gain.gain.setValueAtTime(0.35, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 1.2)
  } catch (_) {}
}

// ── SEO ───────────────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Pomodoro — JWPRO',
  description: 'A minimal Pomodoro timer to manage your focus sessions.',
})
</script>

<style scoped>
/* ── Shell ───────────────────────────────────────────────────────────────── */
.page-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.main-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: var(--space-lg);
}

/* ── Container ───────────────────────────────────────────────────────────── */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3xl);
  width: 100%;
  max-width: 380px;
}

/* ── Tagline ─────────────────────────────────────────────────────────────── */
.tagline {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  text-align: center;
  letter-spacing: 0.01em;
}

/* ── Mode selector ───────────────────────────────────────────────────────── */
.mode-selector {
  display: flex;
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl, 0.75rem);
  padding: 3px;
  gap: 3px;
}

.mode-btn {
  flex: 1;
  padding: var(--space-xs) var(--space-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  background: transparent;
  border: none;
  border-radius: calc(var(--border-radius-xl, 0.75rem) - 3px);
  cursor: pointer;
  transition: all var(--duration-150, 150ms) var(--ease-out, ease);
  white-space: nowrap;
}

.mode-btn:hover {
  color: var(--color-text-primary);
}

.mode-btn.active {
  background: var(--color-surface-primary);
  color: var(--color-text-primary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

/* ── Timer display ───────────────────────────────────────────────────────── */
.timer-display {
  font-size: clamp(4.5rem, 18vw, 7rem);
  font-weight: var(--font-weight-bold);
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  transition: color var(--duration-300, 300ms) var(--ease-out, ease);
  user-select: none;
}

.timer-display.running {
  color: var(--color-brand-primary-500);
}

.timer-display.done {
  color: var(--color-status-success, #22c55e);
  animation: done-pulse 1.5s ease-in-out 2;
}

@keyframes done-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* ── Controls ────────────────────────────────────────────────────────────── */
.controls {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.ctrl-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl, 0.75rem);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--duration-150, 150ms) var(--ease-out, ease);
  padding: var(--space-sm) var(--space-md);
}

.ctrl-btn:hover {
  border-color: var(--color-border-interactive);
  color: var(--color-text-primary);
}

/* Play/Pause — larger, branded */
.ctrl-primary {
  padding: var(--space-md) var(--space-xl);
  background: var(--color-brand-primary-500);
  border-color: var(--color-brand-primary-500);
  color: #fff;
}

.ctrl-primary:hover {
  filter: brightness(1.1);
  border-color: var(--color-brand-primary-500);
  color: #fff;
}

/* Sound toggle */
.sound-btn {
  font-size: var(--font-size-xs);
}

.sound-btn.active {
  border-color: var(--color-brand-primary-500);
  color: var(--color-brand-primary-500);
}

.sound-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}

/* ── Responsive ──────────────────────────────────────────────────────────── */
@media (max-width: 400px) {
  .controls {
    flex-wrap: wrap;
    justify-content: center;
  }

  .sound-btn {
    order: 3;
    flex-basis: 100%;
    justify-content: center;
  }
}
</style>
