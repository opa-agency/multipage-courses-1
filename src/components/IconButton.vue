<template>
  <button
    :class="[
      className,
      'inline-flex h-6 w-6 items-center justify-center rounded-md',
      'focus:outline-2 focus:outline-offset-2 focus:outline-blue-500',
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  className: String,
})
</script>
