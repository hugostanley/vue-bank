<script setup>
import AuthLayout from '../components/Auth/Layout.vue'
import Input from '../components/Form/Input.vue'
import Button from '../components/Button.vue'
import Divider from '../components/Divider.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { auth } from '../utils/store.js'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const handleSubmit = () => {
  // An example on how the global state management can be used.
  const userSignedIn = auth.maybeLoginUser({ username: username.value, password: password.value })
  if (userSignedIn) {
    router.push('/app')
  }
}

</script>
<template>
  <AuthLayout>
    <div class="text-center">
      <h1 class="text-3xl font-bold">Welcome back</h1>
      <span class="text-zinc-400">Enter your details to login</span>
    </div>
    <div class="w-full flex flex-col gap-3">
      <form @submit.prevent="handleSubmit" class="space-y-3">
        <!-- v-model is a vue macro that automatically assigns a components
          value to the specified ref. Say in react, when you have a controlled
          input where its value is assigned to a state and a setState is used
          onChange, this is vue's macro for that. -->
        <Input v-model="username" placeholder="Username" />
        <Input v-model="password" placeholder="Password" type="password" />
        <Button type="submit">Sign in</Button>
      </form>
      <Divider>or</Divider>
      <RouterLink to="/signup">
        <Button variant="secondary">
          Create an account
        </Button>
      </RouterLink>
    </div>
  </AuthLayout>
</template>
