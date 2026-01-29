<template>
  <div
    class="sticky top-0 z-10 flex items-center justify-between gap-x-8 bg-white/90 px-4 py-4 backdrop-blur-sm dark:bg-gray-950/90 sm:px-6"
  >
    <slot />
    <nav class="flex items-center">
      <IconButton
        class="lg:hidden"
        @click="mobileMenuOpen = true"
      >
        <MenuIcon class="fill-gray-950 dark:fill-white" />
      </IconButton>
      <MobileNavigation
        :open="mobileMenuOpen"
        @close="mobileMenuOpen = false"
      />
      <div class="hidden gap-x-6 text-sm/6 text-gray-950 dark:text-white lg:flex">
        <RouterLink to="/">Curs</RouterLink>
        <RouterLink to="/interviews">Interviuri</RouterLink>
        <RouterLink to="/resources">Resurse</RouterLink>
        <div class="relative">
          <button
            @click="accountMenuOpen = !accountMenuOpen"
            class="inline-flex items-center gap-x-2 focus:outline-none"
          >
            Cont
            <ChevronDownIcon class="stroke-gray-950 dark:stroke-white" />
          </button>
          <Transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="accountMenuOpen"
              class="absolute right-0 mt-1 w-48 rounded-lg bg-white/75 p-0.5 shadow-sm outline outline-gray-950/5 backdrop-blur-sm dark:bg-gray-950/75 dark:outline-white/10"
            >
              <RouterLink
                to="#"
                class="block rounded-md px-3 py-0.5 text-sm/7 text-gray-950 hover:bg-blue-500 hover:text-white dark:text-white"
              >
                Setări
              </RouterLink>
              <RouterLink
                to="#"
                class="block rounded-md px-3 py-0.5 text-sm/7 text-gray-950 hover:bg-blue-500 hover:text-white dark:text-white"
              >
                Suport
              </RouterLink>
              <RouterLink
                to="/login"
                class="block rounded-md px-3 py-0.5 text-sm/7 text-gray-950 hover:bg-blue-500 hover:text-white dark:text-white"
              >
                Ieșire
              </RouterLink>
            </div>
          </Transition>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Transition } from 'vue'
import IconButton from './IconButton.vue'
import MenuIcon from '../icons/MenuIcon.vue'
import ChevronDownIcon from '../icons/ChevronDownIcon.vue'
import MobileNavigation from './MobileNavigation.vue'

const mobileMenuOpen = ref(false)
const accountMenuOpen = ref(false)
</script>
