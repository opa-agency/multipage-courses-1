<template>
  <div class="space-y-4">
    <p class="text-sm/7 font-semibold text-gray-500">What's next</p>
    <router-link
      :to="href"
      class="group flex gap-x-6 rounded-2xl border border-gray-200 px-6 py-4 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600"
    >
      <div class="flex-1">
        <h3 class="text-base/7 font-semibold text-gray-950 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300">
          {{ title }}
        </h3>
        <p class="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
          {{ description }}
        </p>
      </div>
      <div class="flex items-center">
        <svg class="h-6 w-6 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
})
</script>
