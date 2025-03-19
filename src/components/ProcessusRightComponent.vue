<script setup lang="ts">
import A3 from '@/assets/svg/a3.vue';
import A4 from '@/assets/svg/a4.vue';
import ArrowLeftShort from '@/assets/svg/arrow-left-short.vue';
import ArrowRightShort from '@/assets/svg/arrow-right-short.vue';
import BlackWhite from '@/assets/svg/black-white.vue';
import Color from '@/assets/svg/color.vue';
import Doucle from '@/assets/svg/doucle.vue';
import FitPage from '@/assets/svg/fit-page.vue';
import Page from '@/assets/svg/page.vue';
import Paysage from '@/assets/svg/paysage.vue';

</script>

<template>
    <div class="md:col-span-4 w-full bg-gray-200 my-4 rounded-sm" >
        
        <div class="m-2 max-w-2xl px-8 py-4 bg-white shadow-md dark:bg-gray-800 rounded-md">
            <h4 class="text-center">Couleurs</h4>
            <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                    <BlackWhite class="size-10 stroke-inherit" />
                    Blanc & Noir
                </span>
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                    <Color class="size-10 stroke-inherit" />
                    Couleur
                </span>
            </div>
        </div>

        <div class="m-2 max-w-2xl px-8 py-4 bg-white shadow-md dark:bg-gray-800 rounded-md">
            <h4 class="text-center">Une/Doucle Page</h4>
            <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                    <Page class="size-10 stroke-inherit" />
                    A4
                </span>
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                    <Doucle class="size-10 stroke-inherit" />
                    A3
                </span>
            </div>
        </div>

        <div class="m-2 max-w-2xl px-8 py-4 bg-white shadow-md dark:bg-gray-800 rounded-md">
            <h4 class="text-center">Format</h4>
            <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                    <A4 class="size-10 stroke-inherit" />
                    Blanc & Noir
                </span>
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                    <A3 class="size-10 stroke-inherit" />
                    Couleur
                </span>
            </div>
        </div>

        <div class="m-2 max-w-2xl px-8 py-4 bg-white shadow-md dark:bg-gray-800 rounded-md">
            <h4 class="text-center">Echelle</h4>
            <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                    <Paysage class="size-10 stroke-inherit" />
                    Taille originale
                </span>
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                    <FitPage class="size-10 stroke-black" />
                    Ajuster
                </span>
            </div>
        </div>

        <div class="m-2 max-w-2xl px-8 py-4 bg-white shadow-md dark:bg-gray-800 rounded-md">
            <h4 class="text-center">Nombre de copie</h4>
            <div class="flex items-center justify-around">
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                    <ArrowLeftShort class="size-10 stroke-inherit" />
                    Taille originale
                </span>
                <span class="text-3xl font-bold text-gray-600 dark:text-gray-400">
                    1
                </span>
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                    <ArrowRightShort class="size-10 stroke-black" />
                    Ajuster
                </span>
            </div>
        </div>
    </div>
</template>