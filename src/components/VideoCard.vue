<template>
  <router-link v-if="href" :to="href" class="group flex flex-col gap-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity">
    <div class="relative aspect-video overflow-hidden rounded-lg bg-gray-900">
      <img
        :src="thumbnailUrl"
        :alt="title"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
        <CirclePlayIcon class="h-12 w-12 text-white fill-white" />
      </div>
      <div v-if="duration" class="absolute bottom-2 right-2 rounded bg-black/75 px-2 py-1 text-xs text-white">
        {{ formatDuration(duration) }}
      </div>
    </div>
    <div>
      <h3 class="font-semibold text-gray-950 dark:text-white">
        {{ title }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        {{ subtitle }}
      </p>
    </div>
  </router-link>
  <div v-else class="group flex flex-col gap-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity">
    <div class="relative aspect-video overflow-hidden rounded-lg bg-gray-900">
      <img
        :src="thumbnailUrl"
        :alt="title"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
        <CirclePlayIcon class="h-12 w-12 text-white fill-white" />
      </div>
      <div v-if="duration" class="absolute bottom-2 right-2 rounded bg-black/75 px-2 py-1 text-xs text-white">
        {{ formatDuration(duration) }}
      </div>
    </div>
    <div>
      <h3 class="font-semibold text-gray-950 dark:text-white">
        {{ title }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import CirclePlayIcon from '../icons/CirclePlayIcon.vue'

defineProps({
  thumbnailUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
})

const formatDuration = (seconds) => {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}
</script>
