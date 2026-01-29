<template>
  <Teleport v-if="open" to="body">
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 bg-gray-950/25"
        @click="$emit('close')"
      />
    </Transition>
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="open"
        class="fixed inset-y-0 left-0 isolate max-w-[calc(100%-(11rem))] w-sm overflow-y-auto bg-white ring ring-gray-950/10 dark:bg-gray-950 dark:ring-white/10"
      >
        <div class="sticky top-0 z-10 px-4 py-4 sm:px-6">
          <div class="flex h-6 shrink-0">
            <button
              @click="$emit('close')"
              class="inline-flex h-6 w-6 items-center justify-center rounded-md"
            >
              <SidebarIcon class="shrink-0 stroke-gray-950 dark:stroke-white" />
            </button>
          </div>
        </div>
        <CourseNavigation
          :modules="modules"
          class="px-4 pb-4 sm:px-6"
          @navigate="$emit('close')"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { Transition, Teleport } from 'vue'
import CourseNavigation from './CourseNavigation.vue'
import SidebarIcon from '../icons/SidebarIcon.vue'

defineProps({
  open: Boolean,
  modules: {
    type: Array,
    required: true,
  },
})

defineEmits(['close'])
</script>
