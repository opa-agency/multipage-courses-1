<template>
  <div v-if="interview">
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
              Browserul tău nu suportă redarea video.
            </video>
          </div>

          <!-- Header -->
          <div class="space-y-6">
            <hgroup>
              <p class="text-sm/7 font-semibold text-gray-500">Interviu</p>
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
              Capitole
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
import { ref, onMounted, inject, h } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import ClockIcon from '../icons/ClockIcon.vue'
import { getInterview } from '../data/interviews'

const route = useRoute()
const interview = ref(null)
const breadcrumbsRef = inject('breadcrumbs', ref(null))

const formatDuration = (seconds) => {
  if (!seconds) return ''
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  return h > 0 ? (m > 0 ? `${h} oră ${m} min` : `${h} oră`) : `${m} min`
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
    if (breadcrumbsRef && interview.value) {
      breadcrumbsRef.value = () => h(Breadcrumbs, {}, [
        h(RouterLink, { to: '/', class: 'whitespace-nowrap text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200' }, () => 'Acasă'),
        h('span', { class: 'text-gray-400' }, '/'),
        h(RouterLink, { to: '/interviews', class: 'whitespace-nowrap text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200' }, () => 'Interviuri'),
        h('span', { class: 'text-gray-400' }, '/'),
        h('span', { class: 'text-gray-950 dark:text-white' }, interview.value.name),
      ])
    }
  }
})
</script>
