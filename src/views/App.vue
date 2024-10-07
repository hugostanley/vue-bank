<script setup>
import { auth, currentUsersBalance } from '../utils/store.js'
import AppLayout from '../components/App/Layout.vue'


</script>
<template>
  <AppLayout>
    Overview

    <div>
      current user: {{ auth.loggedInUser.username }}
    </div>
    <div>
      balance: {{currentUsersBalance}}
    </div>
  </AppLayout>
</template>
