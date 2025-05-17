<script setup lang="ts">
import Tramway1 from '@/assets/logos/tramway-1.png'
import Tramway2 from '@/assets/logos/tramway-2.png'
</script>

<style scoped>
</style>

<template>
  <section class="container mx-auto px-4 py-12 text-gray-800">
    <!-- Titre principal -->
    <h1 class="text-5xl font-extrabold text-center text-red-800 mb-6">
      Bienvenue sur le site de SYSTRA
    </h1>
    <p class="text-lg text-center max-w-3xl mx-auto mb-10">
      Leader mondial de l’ingénierie des transports, SYSTRA conçoit les solutions de mobilité durable de demain. Présente dans plus de 70 pays, notre entreprise accompagne les grands projets ferroviaires internationaux.
    </p>

    <!-- Section présentation -->
    <div class="grid md:grid-cols-2 gap-8 items-center mb-16">
      <div>
        <h2 class="text-3xl font-bold text-blue-900 mb-4">Un acteur global de la mobilité</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>Plus de 1000 projets dans le monde</li>
          <li>Présence dans 70+ pays</li>
          <li>6000+ experts</li>
          <li>50 ans d'expérience dans le ferroviaire</li>
          <li>Investissements constants en R&D</li>
        </ul>
      </div>
      <img :src="Tramway1" alt="Tramway moderne" class="rounded-xl shadow-md" />
    </div>

    <!-- Section JO 2030 -->
    <div class="grid md:grid-cols-2 gap-8 items-center mb-16">
      <img :src="Tramway2" alt="Tramway Jeanne" class="rounded-xl shadow-md order-last md:order-first" />
      <div>
        <h2 class="text-3xl font-bold text-blue-900 mb-4">Projet phare : Tramway JO d’hiver 2030</h2>
        <p class="text-gray-700 mb-4">
          Pour les Jeux Olympiques d'hiver 2030, SYSTRA déploie un tramway haute performance, facilitant l’accès à la vallée touristique des Alpes tout en respectant l’environnement.
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>Transport écologique & silencieux</li>
          <li>Accessibilité totale PMR</li>
          <li>Technologies de confort & sécurité</li>
          <li>Partenariats régionaux solides</li>
        </ul>
      </div>
    </div>

    <!-- Objectifs -->
    <div class="text-center">
      <h2 class="text-3xl font-bold text-red-800 mb-4">Nos objectifs pour un futur durable</h2>
      <div class="grid md:grid-cols-3 gap-6 text-left mt-6">
        <div class="p-4 bg-blue-50 rounded shadow">
          <h3 class="text-lg font-semibold text-blue-900 mb-2">Faciliter le transport</h3>
          <p>Offrir un service fluide aux visiteurs pendant les JO et au-delà.</p>
        </div>
        <div class="p-4 bg-blue-50 rounded shadow">
          <h3 class="text-lg font-semibold text-blue-900 mb-2">Promouvoir le tourisme</h3>
          <p>Favoriser l'attractivité des Alpes par des accès modernes et fiables.</p>
        </div>
        <div class="p-4 bg-blue-50 rounded shadow">
          <h3 class="text-lg font-semibold text-blue-900 mb-2">Soutenir l'économie locale</h3>
          <p>Créer de l’emploi et dynamiser les territoires alpins.</p>
        </div>
      </div>
    </div>
  </section>
</template>
