<template>
  <section
    class="relative w-full h-[65vh] min-h-[400px] flex items-center overflow-hidden rounded-br-none"
  >
    <!-- Background image -->
    <div
      class="absolute inset-0 bg-cover bg-center transition-all duration-500"
      :style="{ backgroundImage: `url(@/assets/main.png)` }"
    ></div>

    <!-- Overlay for contrast -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/55 to-black/35 md:hidden"
    ></div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-5">
      <div class="max-w-2xl animate-fadeInRightToLeft">
        <h1 class="text-5xl md:text-4xl font-semibold text-teal-900 mb-3">
          {{ name }}
        </h1>
        <h5 class="text-xl md:text-lg font-medium text-yellow-800 mb-4">
          {{ title }}
        </h5>
        <p class="text-gray-700 md:text-gray-200 leading-relaxed">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  name: { type: String, default: "RICO CARBONEL" },
  title: { type: String, default: "FullStack Web Developer" },
  description: {
    type: String,
    default:
      "Expert in Vue3, Express.js, and modern full-stack architecture. Turning complex problems into elegant, scalable solutions.",
  },
});
</script>

<style scoped>
@keyframes fadeInRightToLeft {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fadeInRightToLeft {
  animation: fadeInRightToLeft 1s ease forwards;
}
</style>