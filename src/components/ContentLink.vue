<template>
  <div class="flow-root">
    <router-link
      :to="href"
      class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 cursor-pointer hover:bg-gray-950/4 dark:hover:bg-white/5"
    >
      <div class="flex h-6 shrink items-center">
        <ArticleIcon
          v-if="type === 'article'"
          class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40"
        />
        <CheckmarkIcon
          v-else-if="type === 'tool'"
          class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40"
        />
        <CirclePlayIcon
          v-else-if="type === 'video'"
          class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40"
        />
      </div>
      <div>
        <div>
          <span class="font-semibold text-gray-950 dark:text-white">
            {{ title }}
          </span>
          <span v-if="duration" class="mx-2 hidden text-gray-950/25 sm:inline dark:text-white/25">
            &middot;
          </span>
          <span v-if="duration" class="hidden text-gray-500 sm:inline">
            {{ formatDuration(duration) }}
          </span>
        </div>
        <div class="mt-1 text-gray-600 dark:text-gray-400">
          {{ description }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import ArticleIcon from '../icons/ArticleIcon.vue'
import CheckmarkIcon from '../icons/CheckmarkIcon.vue'
import CirclePlayIcon from '../icons/CirclePlayIcon.vue'

const router = useRouter()

const props = defineProps({
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
    default: '#',
  },
  type: {
    type: String,
    default: 'article',
  },
  duration: {
    type: Number,
    default: null,
  },
})

const formatDuration = (seconds) => {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}
</script>
