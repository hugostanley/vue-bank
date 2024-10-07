<script setup>
import AppLayout from '../components/App/Layout.vue'
import { transactions, currentUsersTransactions } from '../utils/store.js'

function formatDate(timestamp) {
  const date = new Date(timestamp)
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;
  return formattedDate
}

</script>
<template>
  <AppLayout>
    Transactions

    <div class="rounded-lg">
      <div class="flex
        w-full bg-zinc-100 text-zinc-500 text-sm font-semibold">
        <div class="w-[10%] flex items-center justify-center">
        </div>
        <div class="w-[30%] px-2 py-4">
          Amount
        </div>
        <div class="w-[30%] px-2 py-4">
          Type
        </div>
        <div class="w-[30%] px-2 py-4">
          Date
        </div>
      </div>

      <!-- Vue uses the v-for directive for rendering lists similar to svelte,
        erb, and heex templating -->
      <div v-for="(transaction, index) in currentUsersTransactions" class="flex
        w-full hover:bg-zinc-100 transition-all">
        <div class="w-[10%] flex items-center justify-center">
          {{ index + 1}}
        </div>
        <div class="w-[30%] p-2">
          {{ transaction.amount }}
        </div>
        <div class="w-[30%] p-2">
          {{ transaction.type }}
        </div>
        <div class="w-[30%] p-2">
          {{ formatDate(transaction.date) }}
        </div>
      </div>
    </div>
  </AppLayout>
</template>
