<template>
  <div>
    <h1 class="sr-only">Login</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label
          for="email"
          class="block w-full text-sm/7 font-medium text-gray-950 dark:text-white"
        >
          Email
        </label>
        <TextInput
          v-model="email"
          type="email"
          id="email"
          required
          class="mt-2"
        />
      </div>
      <Button type="submit" class="w-full">
        Send one-time password
      </Button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '../../components/Button.vue'
import TextInput from '../../components/TextInput.vue'

const email = ref('')
const router = useRouter()

const handleSubmit = () => {
  // In a real app, this would send an OTP to the email
  // For now, just navigate to OTP page
  router.push('/otp')
}
</script>
