<template>
  <div>
    <h1 class="sr-only">Enter OTP</h1>
    <div class="space-y-4">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Enter the 6-digit code sent to your email
      </p>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="otp" class="block text-sm/7 font-medium text-gray-950 dark:text-white">
            OTP Code
          </label>
          <TextInput
            v-model="otp"
            type="text"
            id="otp"
            placeholder="000000"
            maxlength="6"
            class="mt-2 text-center tracking-widest"
          />
        </div>
        <Button type="submit" class="w-full">
          Verify
        </Button>
      </form>
      <RouterLink
        to="/login"
        class="block text-center text-sm text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
      >
        Back to login
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import Button from '../../components/Button.vue'
import TextInput from '../../components/TextInput.vue'

const otp = ref('')
const router = useRouter()

const handleSubmit = () => {
  // In a real app, this would verify the OTP
  // For now, just navigate to home
  router.push('/')
}
</script>
