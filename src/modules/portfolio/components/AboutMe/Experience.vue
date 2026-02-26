<template>
  <!-- Work Experience Card -->
  <div
    class="bg-white shadow-md rounded-lg p-6 mb-0 relative -top-24 z-10 transition-transform duration-300 hover:shadow-xl"
  >
    <h2 class="fade-in text-teal-900 text-xl font-semibold mb-1">
      {{ workExperience.title }}
    </h2>
    <h5 class="fade-in text-yellow-900 text-lg font-medium mb-2">
      {{ workExperience.company }}
    </h5>
    <p class="fade-in text-gray-700 mb-4">{{ workExperience.period }}</p>

    <ul class="list-disc list-inside space-y-2">
      <li
        class="fade-in text-gray-800"
        v-for="(task, index) in workExperience.tasks"
        :key="index"
      >
        {{ task }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const workExperience = ref({
  title: "Work Experience",
  company: "MotivIT (US Based Remote)",
  period: "Feb 2019 – May 2025",
  tasks: [
    "Developed internal and client portals, HR applications, and business transaction systems.",
    "Built modular, feature-based frontend and backend code, ensuring clear separation of concerns, reusable services, and long-term scalability.",
    "Implemented REST APIs and real-time WebSocket features across multiple backend frameworks.",
    "Ensured secure and scalable solutions using JWT authentication, session-based authorization, and optimized MySQL databases.",
    "Automated operational processes with PowerShell scripts, cron jobs, and event schedulers.",
    "Troubleshot technical issues and optimized system performance for efficiency and reliability.",
  ],
});
</script>