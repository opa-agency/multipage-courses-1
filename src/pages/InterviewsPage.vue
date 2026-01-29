<template>
  <div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <h1 class="mt-10 text-3xl/10 font-normal tracking-tight text-gray-950 sm:mt-14 dark:text-white">
        Interviuri
      </h1>
      <p class="mt-6 max-w-xl text-base/7 text-gray-700 dark:text-gray-400">
        Explorează interviuri cu experți din industrie și lideri de opinie.
      </p>
      <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 pb-32 sm:grid-cols-2 xl:grid-cols-3">
        <VideoCard
          v-for="interview in interviews"
          :key="interview.id"
          :title="interview.name"
          :subtitle="interview.subtitle"
          :thumbnailUrl="interview.video.thumbnail"
          :duration="interview.video.duration"
          :href="`/interviews/${interview.id}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject, h } from 'vue'
import { RouterLink } from 'vue-router'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import VideoCard from '../components/VideoCard.vue'
import { getInterviews } from '../data/interviews'

const interviews = ref([])
const breadcrumbsRef = inject('breadcrumbs', ref(null))

onMounted(async () => {
  interviews.value = await getInterviews()
  if (breadcrumbsRef) {
    breadcrumbsRef.value = () => h(Breadcrumbs, {}, [
      h(RouterLink, { to: '/', class: 'whitespace-nowrap text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200' }, () => 'Acasă'),
      h('span', { class: 'text-gray-400' }, '/'),
      h('span', { class: 'text-gray-950 dark:text-white' }, 'Interviuri'),
    ])
  }
})
</script>
