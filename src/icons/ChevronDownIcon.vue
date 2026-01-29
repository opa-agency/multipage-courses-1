<template>
  <svg
    viewBox="0 0 8 5"
    fill="none"
    :class="['h-2 shrink-0', className]"
    v-bind="$attrs"
  >
    <path
      d="M7.5 1L4.5 4L1.5 1"
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
