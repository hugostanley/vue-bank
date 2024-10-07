<script setup>
import AuthLayout from '../components/Auth/Layout.vue'
import Input from '../components/Form/Input.vue'
import Button from '../components/Button.vue'
import Divider from '../components/Divider.vue'
import { RouterLink } from 'vue-router'
import { auth } from '../utils/store.js'
import { useRouter } from 'vue-router'

import { ref } from 'vue'

const username = ref('')
const password = ref('')
const router = useRouter()

const handleSubmit = () => {
  const userCreated = auth.maybeSignUpUser({ username: username.value, password: password.value })
  if (userCreated) {
    router.push('/app')
  }
}

</script>
<template>
  <AuthLayout>
    <div class="text-center">
      <h1 class="text-3xl font-bold">Get Started</h1>
      <span class="text-zinc-400">Enter your credentials to create an account</span>
    </div>
    <div class="w-full flex flex-col gap-3">
      <form action="" @submit.prevent="handleSubmit" class="space-y-3">
        <Input v-model="username" placeholder="Username" />
        <Input v-model="password" placeholder="Password" type="password" />
        <Button>Sign Up</Button>
      </form>
      <Divider>or</Divider>
      <RouterLink to="/login">
        <Button variant="secondary">
          Login
        </Button>
      </RouterLink>
    </div>
  </AuthLayout>
</template>
