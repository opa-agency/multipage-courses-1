<template>
  <svg
    viewBox="0 0 16 16"
    fill="none"
    :class="['h-4 shrink-0', className]"
    v-bind="$attrs"
  >
    <path d="M10.5 4.5H6.5c-.55 0-1 .45-1 1v6m4-7h3c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H6.5c-.55 0-1-.45-1-1v-3m4-7V1.5c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h3" />
  </svg>
</template>

<script setup>
defineProps({
  className: String,
})
</script>
