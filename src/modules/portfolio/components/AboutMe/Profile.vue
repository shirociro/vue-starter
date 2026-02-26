<template>
  <!-- About Me Card -->
  <div
    class="bg-yellow-800/90 text-white rounded-lg p-6 relative z-10 -mt-24 shadow-md transition-transform duration-300 hover:shadow-xl"
  >
    <h2 class="fade-in text-2xl font-semibold mb-3">
      {{ aboutMe.title }}
    </h2>

    <p class="fade-in text-white text-base leading-relaxed">
      {{ aboutMe.description }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const aboutMe = ref({
  title: "About Me",
  description:
    "Full-Stack Developer with 6+ years of experience delivering scalable, production-ready web applications. Strong expertise in frontend and backend development, feature-based architecture, and building clean, modular codebases optimized for long-term maintainability and team collaboration.",
});
</script>