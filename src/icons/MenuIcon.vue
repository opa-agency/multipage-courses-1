<template>
  <svg
    viewBox="0 0 16 16"
    fill="none"
    :class="['h-4 shrink-0', className]"
    v-bind="$attrs"
  >
    <circle cx="8" cy="3" r="1" />
    <circle cx="8" cy="8" r="1" />
    <circle cx="8" cy="13" r="1" />
  </svg>
</template>

<script setup>
defineProps({
  className: String,
})
</script>
