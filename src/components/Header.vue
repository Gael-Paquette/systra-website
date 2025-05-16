<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const links = [
    { label: 'ACCUEIL', path: '/' },
  { label: 'RESERVER', path: '/book' },
  { label: 'A PROPOS', path: '/about' },
  { label: 'NOS TRAINS', path: '/train' }
]
</script>

<template>
  <header class="w-full bg-white shadow-md py-4 px-6">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo Systra -->
      <router-link to="/">
        <img src="@/assets/logos/logo-systra.svg" alt="Systra Logo" class="h-10" />
      </router-link>

      <!-- Navigation -->
      <nav class="flex space-x-4">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="px-6 py-2 rounded-full shadow-md text-white font-semibold"
          :class="{
            'bg-red-800': route.path === link.path,
            'bg-blue-900': route.path !== link.path
          }"
        >
          {{ link.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
</style>