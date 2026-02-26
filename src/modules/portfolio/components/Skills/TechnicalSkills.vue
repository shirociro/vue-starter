<template>
  <!-- Technical Skills Card -->
  <div
    class="relative top-5 bg-yellow-100/80 rounded-lg p-6 text-gray-900 shadow-md transition-transform duration-300 hover:shadow-xl"
  >
    <!-- Technical Skills Title -->
    <h3 class="text-xl font-semibold mb-4">{{ technicalSkills.title }}</h3>

    <!-- Skill Groups -->
    <div class="flex flex-wrap gap-4 mb-6">
      <div
        v-for="(group, index) in skillGroups"
        :key="index"
        class="flex flex-wrap gap-4 w-full md:w-1/3"
      >
        <div
          v-for="skill in group"
          :key="skill.main"
          class="relative skill-item"
        >
          <!-- Skill Button -->
          <button
            @mouseenter="stopAutoHover(skill)"
            @mouseleave="(() => (skill.hover = false, autoHoverEnabled = true))()"
            :class="[
              'px-3 py-1 rounded text-sm font-semibold transition-transform duration-200',
              skill.hover ? 'bg-teal-700 text-white scale-105' : 'bg-teal-300 text-teal-900'
            ]"
          >
            {{ skill.main }}
          </button>

          <!-- Tooltip -->
          <div
            class="absolute left-1/2 bottom-full -translate-x-1/2 mb-2 w-40 bg-yellow-200 text-gray-900 text-xs font-semibold p-2 rounded shadow-md opacity-0 pointer-events-none transition-opacity duration-200"
            :class="{ 'opacity-100 pointer-events-auto': skill.hover }"
          >
            <ul class="list-disc list-inside space-y-1 m-0">
              <li v-for="detail in skill.details" :key="detail">{{ detail }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Tools -->
    <h3 class="text-xl font-semibold mb-3">{{ toolsCard.title }}</h3>
    <div class="flex flex-wrap gap-4">
      <div
        v-for="tool in tools.value"
        :key="tool"
        class="bg-gray-200 px-3 py-1 rounded text-gray-900 text-sm font-medium"
      >
        {{ tool }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// Technical Skills
const technicalSkills = ref({ title: "Technical Skills" });

const skills = ref([
  {
    main: "Vue.js",
    details: [
      "Composition API",
      "Lifecycle Hooks",
      "Dynamic Components",
      "Composables",
      "Pinia",
      "Tanstack/VueQuery",
      "Vue Router (Nested & Lazy Routes)",
      "Slots",
      "Reactive / Ref / Computed",
      "Watchers / WatchEffect",
      "Directives (v-if, v-for, v-model)",
      "VueBootstrap",
      "Vuetify",
      "PrimeVue",
    ],
    hover: false,
  },
  {
    main: "Node.js (Express)",
    details: [
      "EventEmitter",
      "Cluster",
      "Modular/Feature Based Architecture",
      "REST API",
      "Versioned APIs",
      "Middleware",
      "Validation",
      "JWT Auth",
      "Security",
      "Logging",
      "File Uploads",
      "NodeMailer",
      "Environment Management",
      "Streaming / Buffers",
      "WebSocket / Socket.io",
    ],
    hover: false,
  },
  {
    main: "PHP Custom MVC",
    details: [
      "OOP / Object-Oriented Programming",
      "Routing & Controllers",
      "Services / Business Logic",
      "Middleware",
      "Session-based Authentication",
      "PHPMailer / Email Handling",
    ],
    hover: false,
  },
  {
    main: "Go (Fiber)",
    details: [
      "REST API Development",
      "Middleware & Routing",
      "Concurrency / Goroutines",
      "Database Integration",
      "Error Handling & Logging",
      "Validation & Security",
    ],
    hover: false,
  },
  {
    main: "MySQL",
    details: [
      "CTE/WITH",
      "Joins",
      "Normalization",
      "Denormalization",
      "Procedures",
      "Functions",
      "Events",
      "Views",
      "Triggers",
      "Transactions",
      "JSON",
    ],
    hover: false,
  },
  {
    main: "Scripting/Automation",
    details: ["CronJobs", "Powershell"],
    hover: false,
  },
  { main: "HTML5", details: ["Semantic HTML", "Bootstrap 5", "Tailwind"] },
  {
    main: "JavaScript",
    details: ["ES6+", "Async / Await", "Promises", "DOM Manipulation", "Axios"],
  },
  { main: "CSS3", details: ["Responsive Design", "Styling", "Layout"] },
]);

const skillGroups = computed(() => {
  const size = 3;
  const result = [];
  for (let i = 0; i < skills.value.length; i += size) {
    result.push(skills.value.slice(i, i + size));
  }
  return result;
});

// Tools
const toolsCard = ref({ title: "Tools" });
const tools = ref(["GitHub", "Postman", "Filezilla", "Docker"]);

// Auto Hover
const autoHoverEnabled = ref(true);
let hoverInterval = null;

onMounted(() => {
  hoverInterval = setInterval(() => {
    if (!autoHoverEnabled.value) return;

    const randomGroupIndex = Math.floor(Math.random() * skillGroups.value.length);
    const randomSkillIndex = Math.floor(
      Math.random() * skillGroups.value[randomGroupIndex].length
    );
    const randomSkill = skillGroups.value[randomGroupIndex][randomSkillIndex];

    randomSkill.hover = true;
    setTimeout(() => {
      randomSkill.hover = false;
    }, 1200);
  }, 2200);
});

const stopAutoHover = (skill) => {
  autoHoverEnabled.value = false;

  skillGroups.value.forEach((group) => group.forEach((s) => (s.hover = false)));

  skill.hover = true;

  if (hoverInterval) {
    clearInterval(hoverInterval);
    hoverInterval = null;
  }
};
</script>