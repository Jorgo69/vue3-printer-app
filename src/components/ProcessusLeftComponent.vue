<script setup>
// import { Basket } from "../assets/svg/basket-svgrepo-com.svg";
</script>
<template>
    <div class="col-span-1 md:col-span-8 bg-red-400 h-96 rounded-sm" >
        <div class="max-w-full px-8 py-4 bg-white shadow-md dark:bg-gray-800">
            <div class="flex items-center justify-between">
                <div>
                    <span class="text-sm font-light text-gray-600 dark:text-gray-400">Nom du fichier (Nbre total de page)</span> <br>
                    <span>
                        <img src="../assets/svg/paper-svgrepo-com.svg" alt="Svg papier" class="size-4">
                    </span>
                </div>
                <div class="flex">
                    <span class="underline mx-2">
                        Prix unitaire
                    </span>
                    <button class="flex px-2 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">
                        Voir 
                        <img src="../assets//svg/eye-svgrepo-com.svg" alt="" class="size-6 mx-1">
                    </button>
                    <button>
                        <img src="../assets/svg/basket-svgrepo-com.svg" alt="" class="size-6 hover:text-red-400">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>