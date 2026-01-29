<template>
  <div>
    <div class="border-b border-gray-950/10 dark:border-white/10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <nav class="flex gap-8 overflow-x-auto">
          <router-link to="/" class="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">Home</router-link>
          <span class="text-gray-400">/</span>
          <span class="px-1 py-4 text-sm text-gray-950 dark:text-white">Interviews</span>
        </nav>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <h1 class="mt-10 text-3xl/10 font-normal tracking-tight text-gray-950 sm:mt-14 dark:text-white">
        Interviews
      </h1>
      <p class="mt-6 max-w-xl text-base/7 text-gray-700 dark:text-gray-400">
        Explore interviews with industry experts and thought leaders.
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
import { ref, onMounted } from 'vue'
import VideoCard from '../components/VideoCard.vue'
import { getInterviews } from '../data/interviews'

const interviews = ref([])

onMounted(async () => {
  interviews.value = await getInterviews()
})
</script>
