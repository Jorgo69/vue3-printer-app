<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>

    <!-- Bar de Navigation -->
    <NavBar />

    <!-- Corps dynamique [Layouts] -->
    <RouterView />

    <!-- Footer -->
     <Footer class="hidden md:flex" />
</template>


