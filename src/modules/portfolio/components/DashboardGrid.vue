<template>
  <section
    class="flex flex-col gap-6 bg-gradient-to-r from-teal-700 via-teal-500 to-teal-300 relative overflow-hidden"
  >
    <!-- Optional overlay pattern -->
    <div
      class="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_3px)] opacity-25 pointer-events-none"
    ></div>

    <!-- Content Cards -->
    <HeroCard class="relative z-10" />

    <!-- <AboutCard
      class="relative z-10"
      style="height: 420px;" 
    /> -->

    <!-- Uncomment and add when ready -->
    <!-- <SkillsCard class="p-2 relative z-10" /> -->
    <!-- <ProjectsCard class="relative z-10" /> -->
    <!-- <WorkExperienceCard class="p-5 relative z-10" /> -->
  </section>
</template>

<script setup>
import HeroCard from "./HeroCard.vue";
import AboutCard from "./AboutCard.vue";
// import SkillsCard from "./SkillsCard.vue";
// import WorkExperienceCard from "./WorkExperienceCard.vue";
// import ProjectsCard from "./ProjectsCard.vue";
</script>