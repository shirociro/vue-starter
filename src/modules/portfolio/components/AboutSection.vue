<template>
  <div class="w-full px-0">
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Left Column (Profile + Experience) -->
      <div class="w-full lg:w-7/12 space-y-6">
        <AboutMeCard />
        <ExperienceCard />
      </div>

      <!-- Right Column (Technical Skills) -->
      <div class="w-full lg:w-5/12">
        <TechStackCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutMeCard from "./AboutCard.vue";
import ExperienceCard from "./ExperienceCard.vue";
import TechStackCard from "./TechnicalSkills.vue"; 
</script>