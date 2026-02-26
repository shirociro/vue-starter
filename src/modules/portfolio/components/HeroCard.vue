<template>
  <section
    class="relative h-[65vh] min-h-[400px] w-full overflow-hidden flex items-center"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center transition-filter duration-500"
      :style="{ backgroundImage: `url(${heroImage})` }"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/25 md:bg-gradient-to-b md:from-black/55 md:to-black/35"></div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6">
      <div
        class="max-w-2xl animate-fadeInRightToLeft"
      >
        <h1 class="text-teal-900 text-5xl md:text-4xl font-semibold mb-3">
          {{ name }}
        </h1>
        <h5 class="text-yellow-900 md:text-white text-xl md:text-lg font-medium mb-4">
          {{ title }}
        </h5>
        <p class="text-gray-700 md:text-gray-100 text-base md:text-sm leading-relaxed">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImageUrl from "@/assets/main.png";

defineProps({
  name: { type: String, default: "RICO CARBONEL" },
  title: { type: String, default: "FullStack Web Developer" },
  description: {
    type: String,
    default:
      "Expert in Vue3, Express.js, and modern full-stack architecture. Turning complex problems into elegant, scalable solutions.",
  },
});

const heroImage = heroImageUrl;
</script>

<style>
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