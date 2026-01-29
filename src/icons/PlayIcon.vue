<template>
  <svg
    viewBox="0 0 8 8"
    fill="none"
    :class="['h-2 shrink-0', className]"
    v-bind="$attrs"
  >
    <path d="M7.25 3.567a.5.5 0 0 1 0 .866L2.75 7.031a.5.5 0 0 1-.75-.433V1.402a.5.5 0 0 1 .75-.433l4.5 2.598Z" />
  </svg>
</template>

<script setup>
defineProps({
  className: String,
})
</script>
