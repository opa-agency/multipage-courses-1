<template>
  <nav class="sticky top-16">
    <h2 class="text-sm/6 font-semibold text-gray-950 dark:text-white">
      On this page
    </h2>
    <ul class="mt-3 flex flex-col gap-3 border-l border-gray-950/10 text-sm/6 text-gray-700 dark:border-white/10 dark:text-gray-400">
      <li
        v-for="heading in headings"
        :key="heading.id"
        class="-ml-px border-l border-transparent pl-4 hover:text-gray-950 dark:hover:text-white"
        :class="{
          'border-gray-950 dark:border-white': activeHeading === heading.id,
          'hover:border-gray-400': activeHeading !== heading.id,
        }"
      >
        <a
          :href="`#${heading.id}`"
          :aria-current="activeHeading === heading.id ? 'location' : undefined"
          class="block"
          :class="[
            heading.level === 3 && 'pl-4',
            activeHeading === heading.id
              ? 'font-medium text-gray-950 dark:text-white'
              : '',
          ]"
          @click.prevent="scrollToHeading(heading.id)"
        >
          {{ heading.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'

const props = defineProps({
  contentId: {
    type: String,
    required: true,
  },
})

const headings = ref([])
const activeHeading = ref(null)
let observer = null
let retryTimeout = null

const scrollToHeading = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Update URL hash without triggering router navigation
    history.replaceState(null, '', `#${id}`)
    activeHeading.value = id
  }
}

const setupObserver = async () => {
  await nextTick()
  
  // Clear any existing retry timeout
  if (retryTimeout) {
    clearTimeout(retryTimeout)
    retryTimeout = null
  }
  
  const root = document.getElementById(props.contentId)
  if (!root) {
    retryTimeout = setTimeout(setupObserver, 100)
    return
  }

  // Extract headings
  const headingElements = Array.from(root.querySelectorAll('h2, h3'))
  if (headingElements.length === 0) {
    retryTimeout = setTimeout(setupObserver, 100)
    return
  }

  headings.value = headingElements.map((heading) => ({
    id: heading.id,
    text: heading.textContent || '',
    level: parseInt(heading.tagName[1]),
  }))

  // Clean up existing observer
  if (observer) {
    observer.disconnect()
  }

  // Track which headings are currently visible
  const visibleHeadings = new Map()

  // Observe headings directly
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleHeadings.set(entry.target.id, entry.target)
        } else {
          visibleHeadings.delete(entry.target.id)
        }
      })

      // Set the first visible heading as active
      if (visibleHeadings.size > 0) {
        const firstVisibleId = Array.from(visibleHeadings.keys())[0]
        activeHeading.value = firstVisibleId
      }
    },
    {
      rootMargin: '-100px 0px -66% 0px',
      threshold: [0, 1],
    }
  )

  headingElements.forEach((heading) => {
    observer.observe(heading)
  })
}

// Watch for changes in the DOM by setting up a mutation observer
const setupContentWatcher = () => {
  const root = document.getElementById(props.contentId)
  if (!root) return

  const contentObserver = new MutationObserver(() => {
    // Content changed, re-setup the heading observer
    setupObserver()
  })

  contentObserver.observe(root, {
    childList: true,
    subtree: true,
  })

  onBeforeUnmount(() => {
    contentObserver.disconnect()
  })
}

onMounted(() => {
  setupObserver()
  // Set up watcher after initial setup
  setTimeout(setupContentWatcher, 200)
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
  if (retryTimeout) {
    clearTimeout(retryTimeout)
  }
})
</script>
