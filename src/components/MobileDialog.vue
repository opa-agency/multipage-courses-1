<template>
  <Teleport to="body">
    <Transition
      v-show="open"
      as="div"
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
        @click="close"
      />
    </Transition>
    <Transition
      v-show="open"
      as="div"
      enter-active-class="transition ease-out duration-100"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="open"
        class="fixed inset-y-0 left-0 isolate w-sm max-w-[calc(100%-(11rem))] overflow-y-auto bg-white ring ring-gray-950/10 dark:bg-gray-950 dark:ring-white/10"
      >
        <div class="sticky top-0 z-10 px-4 py-4 sm:px-6">
          <div class="flex h-6 shrink-0">
            <button
              @click="close"
              class="inline-flex h-6 w-6 items-center justify-center rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
            >
              <slot name="close-icon" />
            </button>
          </div>
        </div>
        <slot :close="close" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { Transition, Teleport } from 'vue'
import { ref } from 'vue'

const props = defineProps({
  open: Boolean,
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>
