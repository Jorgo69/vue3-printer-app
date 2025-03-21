<script setup lang="ts">
import ProcessusLeftComponent from '@/components/ProcessusLeftComponent.vue';
import ProcessusRightComponent from '@/components/ProcessusRightComponent.vue';
import { RouterLink } from 'vue-router';


import { ref, onMounted } from "vue"; // pour des data reactifs | onMonted Au chargement




    // const files  = ref<File[]>([]);
    // const files  = ref(
    //     JSON.parse(localStorage.getItem("uploadedFiles")) || [] // localStorage.getItem pour recuperer
    //     // Json donne désérialisées avec JSON.parse
    // );

    const files = ref<{ 
        name: string; 
        size: number; 
        type: string;
    }[]>([]);

    

    //sauvegarde des fichier meme apres rafrichissement
    const saveFileToLocalStorage = () => {
        localStorage.setItem("uploadedFiles", JSON.stringify(files.value)); // localStorage.setItem pour sauvegarder
        // JSon sérialisées avec JSON.stringify
    }

    // Gerer le upload de fichiers
    const handleFileUpload = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if(target.files){
            // converit l'object File en objects avec metadonnees
            const newFiles = Array.from(target.files).map((file) => ({
                name: file.name,
                size: file.size,
                type: file.type,
            }));
            
            files.value = [
                ...files.value,
                // ...Array.from(target.files)
                ...newFiles
            ];
            saveFileToLocalStorage(); // sauvegarde immediat a l'ajout
        }
    };

    // suppression de fichier par index
    const removeFile = (index: number) => {
        files.value.splice(index, 1); // pour retirer de la liste
        saveFileToLocalStorage(); // mise a jour avec la meme fonction
    }

    // Charger les fichiers depuis le LocalStorage au chargement de la page
    onMounted(() => {
    const savedFiles = localStorage.getItem("uploadedFiles");
    if (savedFiles) {
        try {
            const parsedFiles = JSON.parse(savedFiles);
            if (Array.isArray(parsedFiles)) {
                files.value = parsedFiles; // Assigner uniquement si c'est un tableau
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des fichiers depuis le LocalStorage :", error);
        }
    }
});
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
                @change="handleFileUpload"
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
        <ProcessusLeftComponent 
            :files="files" 
            @removeFile="removeFile"
         />
        <!--  // ecoute l'evenement avec removeFile --> 
        <!-- Le premier composant occupe 4 colonnes -->
        <ProcessusRightComponent />
    </section>
</template>