<template>
  <div class="goal-card">
    <h3>{{ goal.title }}</h3>
    <div class="progress-circle">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <!-- Gradient määratlus -->
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#459AFF" />
            <stop offset="100%" stop-color="#6054FF" />
          </linearGradient>
        </defs>
        <!-- Ringid -->
        <circle cx="50" cy="50" r="45" stroke="#e6e6e6" stroke-width="10" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#progressGradient)"
          stroke-width="10"
          stroke-linecap="round"
          fill="none"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
          transform="rotate(-90 50 50)"
        />
      </svg>
      <span class="progress-label">{{ goal.progress }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoalCard',
  props: {
    goal: Object,
  },
  computed: {
    circumference() {
      return 2 * Math.PI * 45 // 2 * π * raadius
    },
    dashOffset() {
      return this.circumference * (1 - this.goal.progress / 100)
    },
  },
}
</script>

<style src="../styles/goals.css"></style>
