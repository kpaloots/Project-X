<template>
  <div>
    <!-- Goals Overview kast -->
    <div class="goals-container">
      <div class="goals-overview">
        <section>
          <h2>Goals to be achieved</h2>
          <div class="goals">
            <GoalCard v-for="goal in activeGoals" :key="goal.id" :goal="goal" />
          </div>
        </section>
        <section>
          <h2>Already achieved Goals</h2>
          <div class="goals">
            <GoalCard v-for="goal in completedGoals" :key="goal.id" :goal="goal" />
          </div>
        </section>
      </div>
    </div>

    <!-- +New Goal nupp -->
    <button class="new-goal-button">+ New Goal</button>

    <!-- "Today I promise to..." kast -->
    <div class="promise-container">
      <input
        type="text"
        class="promise-input"
        placeholder="Today I promise to..."
      />
      <button class="send-button">
        <img src="@/assets/icons/send-icon.png" alt="Send" />
      </button>
    </div>
  </div>
</template>

<script>
import GoalCard from './GoalCard.vue'

export default {
  name: 'GoalsOverview',
  components: {
    GoalCard,
  },
  data() {
    return {
      activeGoals: [
        { id: 1, title: 'Goal 1', progress: 72 },
        { id: 2, title: 'Goal 2', progress: 50 },
      ],
      completedGoals: [{ id: 3, title: 'Goal 3', progress: 100 }],
    }
  },
}
</script>
