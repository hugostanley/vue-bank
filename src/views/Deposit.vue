<script setup>
import AppLayout from '../components/App/Layout.vue'
import Input from '../components/Form/Input.vue'
import { ref } from 'vue'
import { transactions, auth, currentUsersTransactions, currentUsersBalance } from '../utils/store.js'

const amount = ref(0)
const loggedInUser = auth.loggedInUser
const balance = currentUsersBalance

function handleSubmit() {
  transactions.deposit(loggedInUser.username, amount.value)
}

</script>
<template>
  <AppLayout>
    Deposit
    <form @submit.prevent="handleSubmit" class="space-y-3">
      <Input v-model="amount" placeholder="Amount" min="100" type="number" />
      <Button type="submit">Deposit</Button>
    </form>
  </AppLayout>
</template>
