<template>
  <div v-if="lesson">
    <!-- Main content -->
    <div class="mx-auto max-w-7xl">
      <!-- Video -->
      <div class="-mx-2 sm:-mx-4">
        <div v-if="lesson.video" class="overflow-hidden">
          <video
            controls
            class="w-full"
            :poster="lesson.video.thumbnail"
          >
            <source :src="lesson.video.url" type="video/mp4" />
            Browserul tău nu suportă redarea video.
          </video>
        </div>
      </div>

      <!-- Content and Table of Contents -->
      <div class="mx-auto flex max-w-2xl gap-x-10 py-10 sm:py-14 lg:max-w-5xl">
        <div class="w-full flex-1">
          <!-- Title and Description -->
          <div id="content" class="prose max-w-none dark:prose-invert">
            <h1 class="text-3xl font-semibold text-gray-950 dark:text-white">
              {{ lesson.title }}
            </h1>
            <p class="mt-4 text-base/7 text-gray-700 dark:text-gray-400">
              {{ lesson.description }}
            </p>
            <!-- Rendered Content -->
            <div v-if="lesson.content" class="mt-8 prose prose-sm dark:prose-invert max-w-none" v-html="renderedContent"></div>
          </div>

          <!-- Next Page Link -->
          <div class="mt-16 border-t border-gray-200 pt-8 dark:border-white/10">
            <NextPageLink
              v-if="lesson.next"
              :title="lesson.next.title"
              :description="lesson.next.description"
              :href="`/${lesson.next.id}`"
            />
            <NextPageLink
              v-else
              title="Interviuri"
              description="Explorează interviuri cu experți din industrie și lideri de opinie."
              href="/interviews"
            />
          </div>
        </div>
        <!-- Table of Contents (Desktop only) -->
        <div class="hidden w-66 lg:block">
          <TableOfContents contentId="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, h, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import NextPageLink from '../components/NextPageLink.vue'
import TableOfContents from '../components/TableOfContents.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import { getLesson } from '../data/lessons'
import { highlightCode } from '../utils/highlighter'

const breadcrumbsRef = inject('breadcrumbs', ref(null))

const route = useRoute()
const lesson = ref(null)
const renderedContent = ref('')

async function renderContent(content) {
  if (!content) return ''
  
  let html = content
  let headingCounter = { h2: 0, h3: 0 }
  
  // Convert markdown headings to HTML with IDs
  html = html.replace(/^### (.*?)$/gm, (match, text) => {
    headingCounter.h3++
    const id = `heading-h3-${headingCounter.h3}`
    return `<h3 id="${id}" class="text-lg font-semibold text-gray-950 dark:text-white mt-6 mb-2">${text}</h3>`
  })
  html = html.replace(/^## (.*?)$/gm, (match, text) => {
    headingCounter.h2++
    const id = `heading-h2-${headingCounter.h2}`
    return `<h2 id="${id}" class="text-2xl font-semibold text-gray-950 dark:text-white mt-8 mb-3">${text}</h2>`
  })
  
  // Convert markdown images - handle both with and without dimensions
  // Replace {scheme} with dark to use dark variant of images
  html = html.replace(/!\[(.*?)\|?.*?\]\((.*?)\)/g, (match, alt, url) => {
    const darkUrl = url.replace('{scheme}', 'dark')
    return `<img src="${darkUrl}" alt="${alt}" class="rounded-lg my-6 w-full" />`
  })
  
  // Convert markdown bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
  
  // Convert markdown italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')
  
  // Extract and highlight code blocks with Shiki
  const codeBlocks = []
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    const index = codeBlocks.length
    codeBlocks.push({ lang: lang || 'javascript', code: code.trim() })
    return `__CODE_BLOCK_${index}__`
  })
  
  // Highlight all code blocks asynchronously
  const highlightedBlocks = await Promise.all(
    codeBlocks.map(({ code, lang }) => highlightCode(code, lang))
  )
  
  // Replace placeholders with highlighted code
  highlightedBlocks.forEach((highlightedHtml, index) => {
    html = html.replace(`__CODE_BLOCK_${index}__`, highlightedHtml)
  })
  
  // Convert inline code
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 text-sm">$1</code>')
  
  // Convert numbered lists
  html = html.replace(/^(\d+)\. (.*?)$/gm, '<li class="list-item ml-4">$2</li>')
  
  // Convert bullet lists
  html = html.replace(/^- (.*?)$/gm, '<li class="list-item ml-4">$1</li>')
  
  // Wrap consecutive list items in ul/ol
  html = html.replace(/(<li class="list-item.*?)(?=<li class="list-item"|<h|$)/gs, (match) => {
    if (!match.includes('<ul') && !match.includes('<ol')) {
      return '<ul class="list-disc space-y-2 mb-4">' + match + '</ul>'
    }
    return match
  })
  
  // Add paragraph spacing
  html = html.replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 dark:text-gray-300">')
  html = '<p class="mb-4 text-gray-700 dark:text-gray-300">' + html + '</p>'
  
  // Clean up double tags
  html = html.replace(/<p class="mb-4[^"]*">(<h[23])/g, '$1')
  html = html.replace(/(<\/h[23]>)<\/p>/g, '$1')
  html = html.replace(/<p class="mb-4[^"]*">(<ul|<img|<pre)/g, '$1')
  html = html.replace(/(<\/ul>)<\/p>/g, '$1')
  html = html.replace(/(<img[^>]*>)<\/p>/g, '$1')
  html = html.replace(/(<\/pre>)<\/p>/g, '$1')
  
  return html
}


const loadLesson = async (slug) => {
  if (!slug) return
  
  lesson.value = await getLesson(slug)
  
  // Render content with syntax highlighting
  if (lesson.value?.content) {
    renderedContent.value = await renderContent(lesson.value.content)
  }
  
  // Set breadcrumbs in the layout
  if (breadcrumbsRef && lesson.value) {
    breadcrumbsRef.value = () => h(Breadcrumbs, {}, [
      h(RouterLink, { to: '/', class: 'whitespace-nowrap text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200' }, () => 'Acasă'),
      h('span', { class: 'hidden text-gray-400 md:inline' }, '/'),
      h(RouterLink, { 
        to: `/#${lesson.value.module.id}`, 
        class: 'hidden whitespace-nowrap text-gray-600 hover:text-gray-900 md:inline dark:text-gray-400 dark:hover:text-gray-200' 
      }, () => lesson.value.module.title),
      h('span', { class: 'text-gray-400' }, '/'),
      h('span', { class: 'text-gray-950 dark:text-white' }, lesson.value.title)
    ])
  }
}


// Watch for route changes and reload lesson
watch(
  () => route.params.slug,
  (newSlug) => {
    loadLesson(newSlug)
  },
  { immediate: true }
)
</script>
