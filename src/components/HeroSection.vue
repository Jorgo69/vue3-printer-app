<script setup>
import { RouterLink} from 'vue-router'
</script>

<template>
  <header class="bg-white dark:bg-gray-900 text-center">
    

    <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Imprimez vos <span class="text-blue-500 "> documents </span> <br>  ou que vous soyez </h1>
                    
                    <p class="mt-3 text-gray-600 dark:text-gray-400">Envoyez vos documents directements a nos differents imprimentes connectes, et recuperer les en toutes simplicites. </p>
                    
                    <RouterLink to="/lol" class="w-1/2 px-5 py-2 mt-6 flex text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      Demarrer
                      <img class="w-5 h-5 sm:h-6 sm:w-6 ml-3" src="../assets/svg/sign-in-circle-svgrepo-com.svg" alt="">
                    </RouterLink>
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/3">
                <img class="w-full h-full lg:max-w-3xl" src="../assets/svg/printer-free-3-svgrepo-com.svg" alt="Catalogue-pana.svg">
            </div>
        </div>
    </div>

    

</header>
</template>