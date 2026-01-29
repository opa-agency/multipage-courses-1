<template>
  <div class="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div class="flex justify-center">
        <Logo class="h-12 w-auto text-gray-950 dark:text-white" />
      </div>
      <div class="rounded-lg border border-gray-950/10 bg-white p-8 dark:border-white/10 dark:bg-gray-950">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Logo from '../components/Logo.vue'
</script>
