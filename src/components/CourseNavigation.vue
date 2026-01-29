<template>
  <div class="space-y-8">
    <div v-for="module in modules" :key="module.id">
      <h2 class="text-base/7 font-semibold text-gray-950 sm:text-sm/6 dark:text-white">
        {{ module.title }}
      </h2>
      <ul class="mt-4 flex flex-col gap-4 border-l border-gray-950/10 text-base/7 text-gray-700 dark:border-white/10 dark:text-gray-400 sm:mt-3 sm:gap-3 sm:text-sm/6">
        <li
          v-for="lesson in module.lessons"
          :key="lesson.id"
          class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"
        >
          <RouterLink
            :to="`/${lesson.id}`"
            :aria-current="currentPath === `/${lesson.id}` ? 'page' : undefined"
            class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white"
            @click="$emit('navigate')"
          >
            {{ lesson.title }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'

defineProps({
  modules: {
    type: Array,
    required: true,
  },
})

defineEmits(['navigate'])

const route = useRoute()
const currentPath = computed(() => route.path)
</script>
