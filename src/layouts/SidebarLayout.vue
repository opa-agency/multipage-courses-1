<template>
  <div class="group" :data-sidebar-collapsed="isSidebarOpen ? undefined : ''">
    <!-- Sidebar -->
    <aside
      v-if="modules.length && isSidebarOpen"
      class="fixed inset-y-0 left-0 hidden w-80 overflow-y-auto border-r border-gray-950/10 px-6 py-4 dark:border-white/10 xl:block"
    >
      <nav aria-label="Course" class="">
        <div class="sticky top-4 flex h-6">
          <IconButton @click="isSidebarOpen = !isSidebarOpen">
            <SidebarIcon class="shrink-0 stroke-gray-950 dark:stroke-white" />
          </IconButton>
        </div>
        <div class="mt-3">
          <CourseNavigation :modules="modules" />
        </div>
      </nav>
    </aside>

    <!-- Main content -->
    <div :class="{ 'xl:ml-80': isSidebarOpen }">
      <Navbar>
        <div class="flex min-w-0 shrink items-center gap-x-4">
          <IconButton
            @click="isMobileDialogOpen = !isMobileDialogOpen"
            class="xl:hidden"
          >
            <SidebarIcon class="shrink-0 stroke-gray-950 dark:stroke-white" />
          </IconButton>
          <IconButton
            v-if="!isSidebarOpen"
            @click="isSidebarOpen = !isSidebarOpen"
            class="hidden max-xl:hidden xl:inline-flex"
          >
            <SidebarIcon class="shrink-0 stroke-gray-950 dark:stroke-white" />
          </IconButton>
          <div v-if="breadcrumbs" class="min-w-0">
            <component :is="breadcrumbs" />
          </div>
        </div>
      </Navbar>

      <!-- Mobile sidebar -->
      <MobileSidebar
        :open="isMobileDialogOpen"
        :modules="modules"
        @close="isMobileDialogOpen = false"
      />

      <main class="px-4 sm:px-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, provide, inject } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import IconButton from '../components/IconButton.vue'
import SidebarIcon from '../icons/SidebarIcon.vue'
import CourseNavigation from '../components/CourseNavigation.vue'
import MobileSidebar from '../components/MobileSidebar.vue'
import { getModules } from '../data/lessons'

const isSidebarOpen = ref(true)
const isMobileDialogOpen = ref(false)
const modules = ref([])
const breadcrumbs = ref(null)

// Provide breadcrumbs ref to child components
provide('breadcrumbs', breadcrumbs)

onMounted(async () => {
  modules.value = await getModules()
})
</script>
