<template>
  <router-link v-if="href" :to="href" class="flex flex-col gap-2 group cursor-pointer">
    <div class="overflow-hidden rounded-lg">
      <img
        :src="imageUrl"
        :alt="title"
        class="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-transform"
      />
    </div>
    <h3 class="font-semibold text-gray-950 dark:text-white text-sm line-clamp-2 group-hover:underline">
      {{ title }}
    </h3>
    <p class="text-xs text-gray-600 dark:text-gray-400">
      {{ author }}
    </p>
  </router-link>
  <div v-else class="flex flex-col gap-2 group cursor-pointer">
    <div class="overflow-hidden rounded-lg">
      <img
        :src="imageUrl"
        :alt="title"
        class="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-transform"
      />
    </div>
    <h3 class="font-semibold text-gray-950 dark:text-white text-sm line-clamp-2 group-hover:underline">
      {{ title }}
    </h3>
    <p class="text-xs text-gray-600 dark:text-gray-400">
      {{ author }}
    </p>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: null,
  },
})
</script>
