<template>
    <nav class="navigation-bar">
      <!-- Logo ja nimi -->
      <div class="header-container">
        <div class="logo-container">
          <img src="@/assets/icons/logo.png" alt="Logo" class="logo" />
          <h1 class="app-name">ASBYN</h1>
        </div>
        <button class="new-goal-btn">+ New goal</button>
      </div>
  
      <!-- Menüü -->
      <ul class="menu">
        <li><a href="#">Your goals</a></li>
        <li><a href="#">Completed goals</a></li>
      </ul>
  
      <!-- Alumine osa -->
      <div class="bottom-section">
        <a href="#" class="settings-link">Settings</a>
        <div class="profile">
          <img src="@/assets/icons/user.png" alt="Profile" class="profile-pic" />
          <span class="profile-name">Kristjan Paloots</span>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavigationBar",
  };
  </script>
  
  <style scoped src="../styles/navigation.css"></style>


  