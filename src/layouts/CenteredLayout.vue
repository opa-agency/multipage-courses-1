<template>
  <div>
    <Navbar>
      <div class="flex items-center gap-x-4">
        <Logo class="h-8 w-auto text-gray-950 dark:text-white" />
      </div>
    </Navbar>
    <main class="px-4 py-8 sm:px-6">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Logo from '../components/Logo.vue'
</script>
