<template>
  <div v-if="interview">
    <div class="border-b border-gray-950/10 dark:border-white/10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <nav class="flex gap-8 overflow-x-auto">
          <router-link to="/" class="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">Home</router-link>
          <span class="text-gray-400">/</span>
          <router-link to="/interviews" class="px-1 py-4 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">Interviews</router-link>
          <span class="text-gray-400">/</span>
          <span class="px-1 py-4 text-sm text-gray-950 dark:text-white">{{ interview.name }}</span>
        </nav>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl py-14">
        <div class="space-y-16">
          <!-- Video -->
          <div v-if="interview.video" class="-mx-4 sm:-mx-6 overflow-hidden rounded-lg bg-gray-900">
            <video
              controls
              class="w-full"
              :poster="interview.video.thumbnail"
            >
              <source :src="interview.video.hd" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <!-- Header -->
          <div class="space-y-6">
            <hgroup>
              <p class="text-sm/7 font-semibold text-gray-500">Interview</p>
              <h1 class="text-3xl tracking-tight text-gray-950 dark:text-white">
                {{ interview.name }}
              </h1>
            </hgroup>
            <p class="text-base/7 text-gray-700 dark:text-gray-400">
              {{ interview.intro }}
            </p>
            <div class="flex items-center gap-x-2 text-sm/7 font-semibold text-gray-950 dark:text-white">
              <ClockIcon class="stroke-gray-950/40 dark:stroke-white/40" />
              <span>{{ formatDuration(interview.video.duration) }}</span>
            </div>
          </div>

          <!-- Chapters -->
          <div v-if="interview.chapters">
            <h2 class="border-b border-gray-950/5 pb-4 text-2xl font-medium tracking-tight text-gray-950 dark:border-white/10 dark:text-white">
              Chapters
            </h2>
            <div class="mt-8 space-y-4">
              <div
                v-for="chapter in interview.chapters"
                :key="chapter.start"
                class="flex items-baseline gap-6"
              >
                <span class="text-sm/7 font-semibold text-gray-500 whitespace-nowrap">
                  {{ formatTimestamp(chapter.start) }}
                </span>
                <p class="text-sm/7 font-semibold text-gray-950 dark:text-white">
                  {{ chapter.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ClockIcon from '../icons/ClockIcon.vue'
import { getInterview } from '../data/interviews'

const route = useRoute()
const interview = ref(null)

const formatDuration = (seconds) => {
  if (!seconds) return ''
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  return h > 0 ? (m > 0 ? `${h} hr ${m} min` : `${h} hr`) : `${m} min`
}

const formatTimestamp = (seconds) => {
  if (!seconds) return '0:00'
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return h > 0 
    ? `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
    : `${m}:${s.toString().padStart(2, '0')}`
}

onMounted(async () => {
  const slug = route.params.slug
  if (slug) {
    interview.value = await getInterview(slug)
  }
})
</script>
