<template>
  <svg
    viewBox="0 0 16 16"
    fill="none"
    :class="['h-4 shrink-0', className]"
    v-bind="$attrs"
  >
    <path d="M5 5L11 11M11 5L5 11" stroke-linecap="square" />
  </svg>
</template>

<script setup>
defineProps({
  className: String,
})
</script>
