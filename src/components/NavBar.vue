<script setup>
// Importations nécessaires
import { ref } from 'vue'; // Pour gérer l'état réactif
import { RouterLink } from 'vue-router'; // Pour utiliser RouterLink

// État pour gérer l'ouverture/fermeture du menu mobile
const isOpen = ref(false);
</script>

<template>
      <nav class="relative bg-white shadow dark:bg-gray-800">
    <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <RouterLink to="/">
          <!-- <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt=""> -->
           Printer App
        </RouterLink>

        <!-- Bouton du menu mobile -->
        <div class="flex lg:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            aria-label="toggle menu"
          >
            <!-- Icône du menu (hamburger) -->
            <svg
              v-if="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>

            <!-- Icône de fermeture (croix) -->
            <svg
              v-if="isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu mobile -->
      <div
        :class="{
          'translate-x-0 opacity-100': isOpen,
          'opacity-0 -translate-x-full': !isOpen,
        }"
        class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
      >
        <div class="flex flex-col md:flex-row md:mx-6">
          <!-- <RouterLink class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/">Accueil</RouterLink>
          <RouterLink class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/">Boutiques</RouterLink>
          <RouterLink class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/">Contact</RouterLink>
          <RouterLink class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/about">About</RouterLink> -->
        </div>

        <div class="flex justify-center md:block">
          <!-- Panier commenter pour le moment -->
          <!-- <RouterLink class="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" to="/">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span class="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
          </RouterLink> -->

          <!-- Fin Panier -->

          <button class="bg-white flex items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3  text-sm sm:text-base  dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5">
            <img class="w-5 h-5 sm:h-6 sm:w-6" src='../assets/svg/sign-in-circle-svgrepo-com.svg' alt="">
            <RouterLink to="/login">
              <span>Se connecter</span>
            </RouterLink>
        </button>
        </div>
      </div>
    </div>
  </nav>
</template>