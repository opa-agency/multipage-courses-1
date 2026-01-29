<template>
  <div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <h1 class="mt-10 text-3xl/10 font-normal tracking-tight text-gray-950 sm:mt-14 dark:text-white">
        Resurse
      </h1>
      <p class="mt-6 max-w-xl text-base/7 text-gray-600 dark:text-gray-400">
        O colecție de resurse care te pot ajuta să navighezi incertitudinea și să faci alegeri aliniate cu valorile și obiectivele tale.
      </p>

      <div class="mt-16 space-y-16">
      <!-- Writing Section -->
      <PageSection>
        <template #title>
          <h2>Articole</h2>
        </template>
        <p class="text-sm/8 text-gray-600 dark:text-gray-400">
          Învață să separi semnalul de zgomot și instinctele de impulsuri.
        </p>
        <div class="mt-8 max-w-2xl space-y-6">
          <ContentLink
            type="article"
            title="Iluzia Alegerii"
            description="Cum Neuroștiința Modernă Susține Determinismul."
          />
          <ContentLink
            type="article"
            title="Dincolo de Liberul Arbitru: O Scurtă Istorie a Filosofiei Deterministe"
            description="Urmărind gândirea deterministă de la stoicii antici la neuroștiința modernă."
          />
          <ContentLink
            type="article"
            title="Povestea Vieții Tale A Fost Scrisă Înainte Să Te Naști"
            description="Cum să combate Nihilismul când nu ai agenție."
          />
          <ContentLink
            type="article"
            title="5 Moduri În Care 'Liberul Tău Arbitru' Te Face De Fapt Nefericit"
            description="Cum credința în alegere creează suferință inutilă în viața de zi cu zi."
          />
          <ContentLink
            type="article"
            title="Mitul Responsabilității: De Ce Auto-Acuzarea Nu Are Sens Logic"
            description="Examinând inconsistențele logice în a te face responsabil."
          />
        </div>
      </PageSection>

      <!-- Podcasts Section -->
      <PageSection>
        <template #title>
          <h2>Podcasturi</h2>
        </template>
        <p class="text-sm/8 text-gray-600 dark:text-gray-400">
          Conversații captivante de la fondatorii determinismului și liberării voinței.
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
          <h2>Cărți</h2>
        </template>
        <p class="text-sm/8 text-gray-600 dark:text-gray-400">
          O colecție atent selectată de cărți care explorează intersecția dintre alegere, scop și dezvoltare personală.
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
          <h2>Instrumente</h2>
        </template>
        <p class="text-sm/8 text-gray-600 dark:text-gray-400">
          Lucruri pe care le folosesc pentru a-mi liniști mintea și a lua decizii.
        </p>
        <div class="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
          <ContentLink
            type="tool"
            title="Monedă Deterministă"
            description="O monedă cu cap pe ambele părți."
          />
          <ContentLink
            type="tool"
            title="Bila Magică 8"
            description="Fiecare răspuns este doar emoji-ul de ridicare din umeri."
          />
          <ContentLink
            type="tool"
            title="BetterHelp"
            description="Uneori ai nevoie doar să vorbesti cu cineva."
          />
          <ContentLink
            type="tool"
            title="Post-it Notes"
            description="Folosesc cele verzi pentru ideile mele bune."
          />
          <ContentLink
            type="tool"
            title="Arborele de Decizii Mobius"
            description="O diagramă de luare a deciziilor care conduce mereu la același rezultat."
          />
        </div>
      </PageSection>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, h, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import PageSection from '../components/PageSection.vue'
import ContentLink from '../components/ContentLink.vue'
import VideoCard from '../components/VideoCard.vue'
import Bookshelf from '../components/Bookshelf.vue'
import Book from '../components/Book.vue'

const breadcrumbsRef = inject('breadcrumbs', ref(null))

onMounted(() => {
  if (!breadcrumbsRef) return
  breadcrumbsRef.value = () => h(Breadcrumbs, {}, [
    h(RouterLink, { to: '/', class: 'whitespace-nowrap text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200' }, () => 'Acasă'),
    h('span', { class: 'text-gray-400' }, '/'),
    h('span', { class: 'text-gray-950 dark:text-white' }, 'Resurse'),
  ])
})
</script>
