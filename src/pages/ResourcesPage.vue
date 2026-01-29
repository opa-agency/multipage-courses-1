<template>
  <div>
    <div class="border-b border-gray-950/10 dark:border-white/10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <nav class="flex gap-8 overflow-x-auto">
          <router-link to="/" class="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">Home</router-link>
          <span class="text-gray-400">/</span>
          <span class="px-1 py-4 text-sm text-gray-950 dark:text-white">Resources</span>
        </nav>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <h1 class="mt-10 text-3xl/10 font-normal tracking-tight text-gray-950 sm:mt-14 dark:text-white">
        Resources
      </h1>
      <p class="mt-6 max-w-xl text-base/7 text-gray-600 dark:text-gray-400">
        A collection of resources that can help you navigate uncertainty and make choices aligned with your values and goals.
      </p>

      <div class="mt-16 space-y-16">
      <!-- Writing Section -->
      <PageSection>
        <template #title>
          <h2>Writing</h2>
        </template>
        <p class="text-sm/8 text-gray-600 dark:text-gray-400">
          Learn to separate signal from noise, and instincts from impulses.
        </p>
        <div class="mt-8 max-w-2xl space-y-6">
          <ContentLink
            type="article"
            title="The Illusion of Choice"
            description="How Modern Neuroscience Supports Determinism."
          />
          <ContentLink
            type="article"
            title="Beyond Free Will: A Brief History of Deterministic Philosophy"
            description="Tracing deterministic thought from ancient stoics to modern neuroscience."
          />
          <ContentLink
            type="article"
            title="Your Life Story Was Written Before You Were Born"
            description="How to fend off Nihilism when you have no agency."
          />
          <ContentLink
            type="article"
            title="5 Ways Your 'Free Will' is Actually Making You Miserable"
            description="How belief in choice creates unnecessary suffering in everyday life."
          />
          <ContentLink
            type="article"
            title="The Accountability Myth: Why Self-Blame Makes No Logical Sense"
            description="Examining the logical inconsistencies in holding yourself responsible."
          />
        </div>
      </PageSection>

      <!-- Podcasts Section -->
      <PageSection>
        <template #title>
          <h2>Podcasts</h2>
        </template>
        <p class="text-sm/8 text-gray-600 dark:text-gray-400">
          Compelling conversations from the forefathers of determinism and free will.
        </p>
        <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          <VideoCard
            title="Thus Spoke the Podcast: EP 272"
            subtitle="Friedrich Nietzsche"
            thumbnailUrl="https://assets.tailwindcss.com/templates/compass/nietzsche-thumbnail.png"
            :duration="3720"
          />
          <VideoCard
            title="Monads & Mics with Mark Zuckerberg"
            subtitle="Gottfried Wilhelm Leibniz"
            thumbnailUrl="https://assets.tailwindcss.com/templates/compass/liebniz-thumbnail.png"
            :duration="4454"
          />
          <VideoCard
            title="The John Locke Show"
            subtitle="Tabula Rasa Media"
            thumbnailUrl="https://assets.tailwindcss.com/templates/compass/locke-thumbnail.png"
            :duration="5040"
          />
        </div>
      </PageSection>

      <!-- Books Section -->
      <PageSection>
        <template #title>
          <h2>Books</h2>
        </template>
        <p class="text-sm/8 text-gray-600 dark:text-gray-400">
          A carefully curated collection of books that explore the intersection of choice, purpose, and personal growth.
        </p>
        <Bookshelf class="mt-8">
          <Book
            title="I Was Always Going to Write This Book"
            author="Nora Flich"
            imageUrl="https://assets.tailwindcss.com/templates/compass/i-was-always-going-to-write-this-book.png"
          />
          <Book
            title="Preordained and Prosperous"
            author="Skylar Vonn"
            imageUrl="https://assets.tailwindcss.com/templates/compass/preordained-and-prosperous.png"
          />
          <Book
            title="Yes, But Why Did I Think That?"
            author="J. Ellington Splice, PhD"
            imageUrl="https://assets.tailwindcss.com/templates/compass/yes-but-why-did-i-think-that.png"
          />
          <Book
            title="The Responsibility Loophole"
            author="Dr. Frida Noone, PhD"
            imageUrl="https://assets.tailwindcss.com/templates/compass/the-responsiblity-loophole.png"
          />
          <Book
            title="The Path and the Passenger"
            author="Eleanor Vann"
            imageUrl="https://assets.tailwindcss.com/templates/compass/the-path-and-the-passenger.png"
          />
        </Bookshelf>
      </PageSection>

      <!-- Tools Section -->
      <PageSection>
        <template #title>
          <h2>Tools</h2>
        </template>
        <p class="text-sm/8 text-gray-600 dark:text-gray-400">
          Things I use to calm my mind and make decisions.
        </p>
        <div class="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
          <ContentLink
            type="tool"
            title="Deterministic Coin"
            description="A coin with heads on both sides."
          />
          <ContentLink
            type="tool"
            title="Magic 8-Ball"
            description="Every answer is just the shrugging emoji."
          />
          <ContentLink
            type="tool"
            title="BetterHelp"
            description="Sometimes you just need to talk to someone."
          />
          <ContentLink
            type="tool"
            title="Post-it Notes"
            description="I use the green ones for my good ideas."
          />
          <ContentLink
            type="tool"
            title="The Mobius Decision Tree"
            description="A decision-making flowchart that always leads back to the same outcome."
          />
        </div>
      </PageSection>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageSection from '../components/PageSection.vue'
import ContentLink from '../components/ContentLink.vue'
import VideoCard from '../components/VideoCard.vue'
import Bookshelf from '../components/Bookshelf.vue'
import Book from '../components/Book.vue'
</script>
