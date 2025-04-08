<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProcessusLeftComponent from "@/components/ProcessusLeftComponent.vue";
import ProcessusRightComponent from "@/components/ProcessusRightComponent.vue";
import { RouterLink } from "vue-router";

// Liste réactive pour stocker les fichiers uploadés
const files = ref<{ name: string; size: number; type: string }[]>([]);

// Sauvegarde des fichiers dans le LocalStorage
const saveFileToLocalStorage = () => {
    localStorage.setItem("uploadedFiles", JSON.stringify(files.value));
};

// Gérer l'upload de fichiers
const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
        const newFiles = Array.from(target.files).map((file) => ({
            name: file.name,
            size: file.size,
            type: file.type,
        }));
        files.value = [...files.value, ...newFiles];
        saveFileToLocalStorage();
    }
};

// Définir le type des options sélectionnées
interface SelectedOptions {
    colorMode: "blackWhite" | "color";
    pageFormat: "a4" | "a3";
    scaleMode: "original" | "fitPage";
    copies: number;
}

// État des options sélectionnées
const selectedOptions = ref<SelectedOptions>({
    colorMode: "blackWhite",
    pageFormat: "a4",
    scaleMode: "original",
    copies: 1,
});

// Supprimer un fichier par son index
const removeFile = (index: number) => {
    files.value.splice(index, 1);
    saveFileToLocalStorage();
};

// Charger les fichiers depuis le LocalStorage au chargement de la page
onMounted(() => {
    const savedFiles = localStorage.getItem("uploadedFiles");
    if (savedFiles) {
        try {
            const parsedFiles = JSON.parse(savedFiles);
            if (Array.isArray(parsedFiles)) {
                files.value = parsedFiles;
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des fichiers :", error);
        }
    }
});
</script>

<template>
    <section class="bg-gray-300 p-4 m-4 flex justify-between">
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

        <RouterLink to="" class="hover:underline">Help</RouterLink>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-12 gap-4 m-4">
        <!-- Composant gauche -->
        <ProcessusLeftComponent
            :files="files"
            @removeFile="removeFile"
            @selectFile="() => {
                selectedOptions = {
                    colorMode: 'blackWhite',
                    pageFormat: 'a4',
                    scaleMode: 'original',
                    copies: 1,
                };
            }"
        />

        <!-- Composant droit -->
        <ProcessusRightComponent
            v-model:colorMode="selectedOptions.colorMode"
            v-model:pageFormat="selectedOptions.pageFormat"
            v-model:scaleMode="selectedOptions.scaleMode"
            v-model:copies="selectedOptions.copies"
        />
    </section>
</template>