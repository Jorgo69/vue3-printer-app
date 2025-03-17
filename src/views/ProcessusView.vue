<script setup lang="ts">
import ProcessusLeftComponent from '@/components/ProcessusLeftComponent.vue';
import ProcessusRightComponent from '@/components/ProcessusRightComponent.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    
    <section class="bg-gray-300 p-4 m-4 flex justify-between ">

        <div class="file-upload">
            <!-- Input de fichier masqué -->
            <input
                type="file"
                accept="application/pdf,.pdf,image/jpeg,.jpg"
                multiple
                name="file"
                id="fileInput"
                class="hidden"
            />

            <!-- Bouton personnalisé -->
            <label for="fileInput" class="cursor-pointer bg-blue-500 text-white uppercase rounded-sm px-4 py-2">
                Ajouter fichier
            </label>
        </div>

        <RouterLink to="" class="hover:underline ">
            Help
        </RouterLink>
    </section>

    <section class="grid grid-cols-1  md:grid-cols-12 gap-4 m-4">

        <!-- Le second composant occupe 8 colonnes -->
        <ProcessusLeftComponent  />
        <!-- Le premier composant occupe 4 colonnes -->
        <ProcessusRightComponent />
    </section>
</template>