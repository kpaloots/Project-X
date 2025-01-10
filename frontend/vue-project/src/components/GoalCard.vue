<template>
  <div class="goal-container" @click="goToYourGoals">
    <!-- Pealkiri -->
    <h3 class="goal-title">{{ goal.title }}</h3>
    <!-- Progressi ring -->
    <div class="progress-circle">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#459AFF" />
            <stop offset="100%" stop-color="#6054FF" />
          </linearGradient>
        </defs>
        <!-- Taustaring -->
        <circle cx="70" cy="70" r="60" stroke="#e6e6e6" stroke-width="10" fill="none" />
        <!-- Progressiring -->
        <circle
          cx="70"
          cy="70"
          r="60"
          stroke="url(#progressGradient)"
          stroke-width="10"
          fill="none"
          stroke-linecap="round"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
        />
      </svg>
      <!-- Protsent -->
      <div class="progress-label">{{ goal.progress }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoalCard",
  props: ["goal"],
  computed: {
    circumference() {
      return 2 * Math.PI * 60;
    },
    dashOffset() {
      return this.circumference - (this.goal.progress / 100) * this.circumference;
    },
  },
  methods: {
    goToYourGoals() {
      console.log(`Navigating to ${this.goal.title}`);
    },
  },
};
</script>


<style src="../styles/goals.css"></style>