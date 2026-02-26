<template>
  <div class="about-me-container w-full p-0">
    <div class="flex flex-col lg:flex-row gap-6">
      
      <!-- Left Column (Profile + Experience) -->
      <div class="w-full lg:w-7/12 space-y-6">
        <Profile />
        <Experience />
      </div>

      <!-- Right Column (Technical Skills) -->
      <div class="w-full lg:w-5/12">
        <TechnicalSkills />
      </div>

    </div>
  </div>
</template>

<script setup>
import Experience from "./AboutMe/Experience.vue";
import Profile from "./AboutMe/Profile.vue";
import TechnicalSkills from "./Skills/TechnicalSkills.vue";
</script>

<style scoped>

</style>