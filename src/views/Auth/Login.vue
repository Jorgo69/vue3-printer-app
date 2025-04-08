<template>

    <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-24 mx-auto lg:py-32">
            <div class="lg:flex">
                <div class="lg:w-1/2">
                    <img class="w-auto h-7 sm:h-8" src="../../assets/svg/printer-free-3-svgrepo-com.svg" alt="">

                    <h1 class="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">Bienvenu sur Printer App</h1>
                    
                    <h1 class="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
                        Connectez-vous a votre compte
                    </h1>
                </div>

                <div class="mt-8 lg:w-1/2 lg:mt-0">
                    <div class="w-full lg:max-w-xl">
                        <div class="relative flex items-center">
                            <span class="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input type="email" v-model="email" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Addresse Email">
                        </div>

                        <div class="relative flex items-center mt-4">
                            <span class="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input type="password" v-model="password" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Mot de Passe">
                        </div>

                        <div class="relative flex items-center mt-4" v-if="errMsg">
                            <span class="absolute text-center">
                                {{errMsg}}
                            </span>
                        </div>

                        <div class="mt-8 md:flex grid grid-rows-4  md:items-center">
                            <button @click="login" class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Connexion
                            </button>

                            <RouterLink to="/register" class="inline-block mt-4 text-center text-blue-500 md:mt-0 md:mx-6 hover:underline dark:text-blue-400">
                                S'incrire
                            </RouterLink>

                            <RouterLink to="/password-forget" class="inline-block mt-4 text-center text-blue-500 md:mt-0 md:mx-6 hover:underline dark:text-blue-400">
                                Identifiant Oublie?
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import { ref } from 'vue';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRoute } from 'vue-router';

const router = useRoute();

const email = ref();
const password = ref();
const errMsg = ref();



// Sign in
const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("User signed in:", userCredential.user);
  } catch (error) {
    console.error("Error signing in:", error.message);

    switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "Email Invalide";
                break;

            case "auth/user-not-found":
                errMsg.value = "Aucun compte associe a cet email";
                break;
            
            case "auth/wrong-password":
                errMsg.value = "Mot de passe Incorrect";
                break;

            case "auth/user-disabled":
                errMsg.value = "Compte desactiver";
                break;
        
            default:
                errMsg.value = "Email ou Mot de Passe Incorrect";
                break;
        }
  }
};




// const login = () => {
//     console.log("cool");

//     signInWithEmailAndPassword(auth, email.value, password.value)
//     .then((data) => {

//         console.log("Success");
        
//     })
//     .catch((error) =>{

//         console.log(error);

        
//     });
// }
</script>