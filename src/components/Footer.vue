<script setup lang="ts">
import systra from '@/assets/logos/systra.png'
import logoFacebook from '@/assets/logos/logo-facebook.png'
import logoInstagram from '@/assets/logos/logo-instagram.png'
import logoTwitter from '@/assets/logos/logo-twitter.png'
import logoLinkedin from '@/assets/logos/logo-linkedin.png'
</script>

<template>
  <footer class="bg-white text-center py-10 border-t">
    <div class="container mx-auto px-4">
      <!-- Logo principal -->
      <div class="mb-6">
        <img :src="systra" alt="SystrA Logo" class="mx-auto h-44" />
      </div>

      <!-- Réseaux sociaux -->
      <div class="flex justify-center items-center space-x-8 mb-6">
        <a href="#" aria-label="Facebook">
          <img :src="logoFacebook" alt="Facebook" class="h-6" />
        </a>
        <a href="#" aria-label="Instagram">
          <img :src="logoInstagram" alt="Instagram" class="h-6" />
        </a>
        <a href="#" aria-label="Twitter">
          <img :src="logoTwitter" alt="Twitter" class="h-6" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <img :src="logoLinkedin" alt="LinkedIn" class="h-6" />
        </a>
      </div>

      <!-- Liens légaux -->
      <div class="flex flex-wrap justify-center space-x-4 text-sm text-gray-600 mb-4">
        <a href="#">Conditions générales d'utilisation</a>
        <a href="#">Politique des cookies</a>
        <a href="#">Politique de confidentialité</a>
        <a href="#">Plan du site</a>
        <a href="#">Conditions d'assurance</a>
      </div>

      <!-- Copyright -->
      <div class="text-xs text-gray-500">
        &copy;2025 Systra. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>