<template>
  <div v-if="open" class="lg:hidden">
    <Teleport to="body">
      <Transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-950/25"
          @click="$emit('close')"
        />
      </Transition>
      <Transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          class="fixed inset-0 flex justify-end pl-11"
        >
          <div
            class="w-full max-w-2xs bg-white px-4 py-5 ring ring-gray-950/10 dark:bg-gray-950 dark:ring-white/10"
          >
            <div class="flex justify-end">
              <button
                class="inline-flex h-6 w-6 items-center justify-center rounded-md"
                @click="$emit('close')"
              >
                <CloseIcon class="stroke-gray-950 dark:stroke-white" />
              </button>
            </div>
            <div class="mt-4">
              <div class="flex flex-col gap-y-2">
                <RouterLink
                  to="/"
                  class="block rounded-md px-4 py-1.5 text-lg/7 font-medium tracking-tight text-gray-950 hover:bg-gray-950/5 dark:text-white dark:hover:bg-white/5"
                  @click="$emit('close')"
                >
                  Course
                </RouterLink>
                <RouterLink
                  to="/interviews"
                  class="block rounded-md px-4 py-1.5 text-lg/7 font-medium tracking-tight text-gray-950 hover:bg-gray-950/5 dark:text-white dark:hover:bg-white/5"
                  @click="$emit('close')"
                >
                  Interviews
                </RouterLink>
                <RouterLink
                  to="/resources"
                  class="block rounded-md px-4 py-1.5 text-lg/7 font-medium tracking-tight text-gray-950 hover:bg-gray-950/5 dark:text-white dark:hover:bg-white/5"
                  @click="$emit('close')"
                >
                  Resources
                </RouterLink>
              </div>
              <div class="mt-6 flex flex-col gap-y-2">
                <h3 class="px-4 py-1 text-sm/7 text-gray-500">Account</h3>
                <RouterLink
                  to="#"
                  class="rounded-md px-4 py-1 text-sm/7 font-semibold text-gray-950 hover:bg-gray-950/5 dark:text-white dark:hover:bg-white/5"
                >
                  Settings
                </RouterLink>
                <RouterLink
                  to="#"
                  class="rounded-md px-4 py-1 text-sm/7 font-semibold text-gray-950 hover:bg-gray-950/5 dark:text-white dark:hover:bg-white/5"
                >
                  Support
                </RouterLink>
                <RouterLink
                  to="/login"
                  class="rounded-md px-4 py-1 text-sm/7 font-semibold text-gray-950 hover:bg-gray-950/5 dark:text-white dark:hover:bg-white/5"
                  @click="$emit('close')"
                >
                  Sign out
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { Transition, Teleport } from 'vue'
import { RouterLink } from 'vue-router'
import CloseIcon from '../icons/CloseIcon.vue'

defineProps({
  open: Boolean,
})

defineEmits(['close'])
</script>
