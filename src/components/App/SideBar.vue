<script setup>
import { auth } from '../../utils/store.js'
import { AudioLines, LayoutDashboard, HandCoins, Landmark, DollarSign, LogOut } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
const loggedInUser = auth.loggedInUser

</script>

<template>
  <aside class="w-72 h-screen border-r-[1px] border-r-zinc-200 shadow-md px-6
    py-8 bg-emerald-950 text-white space-y-16">
    <div class="flex flex-wrap font-bold text-xl gap-2">
      <AudioLines />
      Someapp
    </div>
    <div class="space-y-10 text-sm text-emerald-100 h-[80%]">
      <RouterLink exactActiveClass="text-white [&>svg]:text-[#C3F438] font-bold" to="/app"
        class="flex gap-2  items-center">
        <LayoutDashboard size="20" />
        Overview
      </RouterLink>
      <RouterLink exactActiveClass="text-white [&>svg]:text-[#C3F438] font-bold" to="/app/transactions"
        class="flex gap-2  items-center">
        <HandCoins size="20" />
        Transactions
      </RouterLink>
      <RouterLink exactActiveClass="text-white [&>svg]:text-[#C3F438] font-bold" to="/app/transfer"
        class="flex gap-2  items-center">
        <Landmark size="20" />
        Transfer
      </RouterLink>
      <RouterLink exactActiveClass="text-white [&>svg]:text-[#C3F438] font-bold" to="/app/deposit"
        class="flex gap-2  items-center">
        <DollarSign size="20" />
        Deposit
      </RouterLink>
    </div>
    <button @click="auth.logOutUser()" class="flex text-emerald-100 gap-4">
      <LogOut />
      Log out
    </button>
  </aside>
</template>
