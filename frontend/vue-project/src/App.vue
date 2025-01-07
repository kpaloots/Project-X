<template>
  <div id="app">
    <!-- Navigation Bar -->
    <NavigationBar />
    <!-- Main Content -->
    <div class="main-content">
      <GoalsOverview />
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import GoalsOverview from "./components/GoalsOverview.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    GoalsOverview,
  },
};
</script>

<style src="./styles/app.css"></style>
