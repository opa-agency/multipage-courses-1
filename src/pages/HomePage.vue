<template>
  <div class="relative mx-auto max-w-7xl">
    <div class="absolute -inset-x-2 top-0 -z-10 h-80 overflow-hidden rounded-t-2xl sm:h-96 md:h-112 lg:-inset-x-4 lg:h-128" style="mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)">
      <img
        alt=""
        src="https://assets.tailwindcss.com/templates/compass/hero-background.png"
        class="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        style="mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%); -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%)"
      />
      <div class="absolute inset-0 rounded-t-2xl outline-1 -outline-offset-1 outline-gray-950/10 dark:outline-white/10" />
    </div>
    <div class="mx-auto max-w-6xl">
      <div class="relative">
        <div class="px-4 pt-48 pb-12 lg:py-24">
          <Logo class="h-8 fill-gray-950 dark:fill-white" />
          <h1 class="sr-only">Prezentare curs</h1>
          <p class="mt-7 max-w-lg text-base/7 text-pretty text-gray-600 dark:text-gray-400">
            O călătorie cuprinzătoare care te ajută să navighezi incertitudinea și
            să faci alegeri aliniate cu valorile și obiectivele tale.
          </p>
          <div
            v-if="modules.length"
            class="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm/7 font-semibold text-gray-950 dark:text-white"
          >
            <div class="flex items-center gap-1.5">
              <BookIcon class="stroke-gray-950/40 dark:stroke-white/40" />
              {{ modules.length }} module
            </div>
            <span class="hidden text-gray-950/25 dark:text-white/25 sm:inline">
              &middot;
            </span>
            <div class="flex items-center gap-1.5">
              <LessonsIcon class="stroke-gray-950/40 dark:stroke-white/40" />
              {{ lessons.length }} lecții
            </div>
            <span class="hidden text-gray-950/25 dark:text-white/25 sm:inline">
              &middot;
            </span>
            <div class="flex items-center gap-1.5">
              <ClockIcon class="stroke-gray-950/40 dark:stroke-white/40" />
              {{ formatDuration(totalDuration) }}
            </div>
          </div>
          <div
            v-if="modules.length && modules[0].lessons.length"
            class="mt-10"
          >
            <RouterLink
              :to="`/${modules[0].lessons[0].id}`"
              class="inline-flex items-center gap-x-2 rounded-full bg-gray-950 px-3 py-0.5 text-sm/7 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <PlayIcon class="fill-white" />
              Începe cursul
            </RouterLink>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-y-16 pb-10 sm:px-4">
          <div
            v-for="(module, index) in modules"
            :key="module.id"
            class="scroll-mt-16 space-y-8"
            :id="module.id"
          >
            <div class="space-y-2 border-b border-gray-950/10 pb-8 dark:border-white/10">
              <p class="text-sm/7 font-semibold text-gray-950 dark:text-white">
                Partea {{ index + 1 }}
              </p>
            </div>
            <div class="max-w-2xl">
              <h2 class="text-2xl/7 font-medium tracking-tight text-gray-950 dark:text-white">
                {{ module.title }}
              </h2>
              <p class="mt-4 text-base/7 text-gray-700 dark:text-gray-400 sm:text-sm/7">
                {{ module.description }}
              </p>

              <ol class="mt-6 space-y-4">
                <li v-for="lesson in module.lessons" :key="lesson.id">
                  <ContentLink
                    :title="lesson.title"
                    :description="lesson.description"
                    type="video"
                    :duration="lesson.video?.duration"
                    :href="`/${lesson.id}`"
                  />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import BookIcon from '../icons/BookIcon.vue'
import LessonsIcon from '../icons/LessonsIcon.vue'
import ClockIcon from '../icons/ClockIcon.vue'
import PlayIcon from '../icons/PlayIcon.vue'
import Logo from '../components/Logo.vue'
import ContentLink from '../components/ContentLink.vue'
import { getModules } from '../data/lessons'

const modules = ref([])

const lessons = computed(() =>
  modules.value.flatMap(({ lessons }) => lessons)
)

const totalDuration = computed(() =>
  lessons.value.reduce((sum, { video }) => sum + (video?.duration ?? 0), 0)
)

const formatDuration = (seconds) => {
  if (!seconds) return ''
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  return h > 0 ? (m > 0 ? `${h} oră ${m} min` : `${h} oră`) : `${m} min`
}

onMounted(async () => {
  modules.value = await getModules()
})
</script>
