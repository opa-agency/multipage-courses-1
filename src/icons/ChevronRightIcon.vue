<template>
  <svg
    viewBox="0 0 5 8"
    fill="none"
    :class="['h-2 shrink-0', className]"
    v-bind="$attrs"
  >
    <path
      d="M1 7.5L4 4.5L1 1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
defineProps({
  className: String,
})
</script>
