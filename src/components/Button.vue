<template>
  <button
    :type="type"
    :class="[
      className,
      'rounded-full bg-gray-950 px-3.5 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800',
      'focus:outline-2 focus:outline-offset-2 focus:outline-blue-500',
      'dark:bg-gray-700 dark:hover:bg-gray-600',
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
  className: String,
})
</script>
