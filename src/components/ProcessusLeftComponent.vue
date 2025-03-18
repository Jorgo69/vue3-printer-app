<script setup>
    import Poubelle from "../assets/svg/poubelle.vue";
    import { Paper } from "../assets/svg/black-white.vue";
</script>

<template>
    <div class="col-span-1 grid grid-row-2 gap-2 md:col-span-8" >

        <!-- Start Container card -->
        <div class="grid grid-cols-12 h-24 bg-gray-400 rounded-sm">
            <div class="col-span-11 flex items-center justify-between px-2 content-around bg-gray-50 hover:bg-gray-400 transition duration-300 ease-in-out rounded-sm">

                <div class="md:bg-transparent 3xs:bg-custom-blue">
                    <div class="">
                        WhatsApp Image 2025-03-10 at 22.12.41.jpeg (56 x 91mm @300dpi)
                    </div>
                    <div class="">
                        <Paper class="w-5 h-2" />
                    </div>
                </div>

                <div class="flex items-center space-x-2">
                    <div class="3xs:hidden md:flex">
                        €0.03 – €0.20
                    </div>
                    <div class="">
                        <button class="flex items-center space-x-1 border-2 border-solid rounded-md p-2">
                            <span class="hidden md:flex">
                                Ouvrir &nbsp;
                            </span>
                            <svg class="size-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 12 18.25 5.125 12 5.125C5.75 5.125 2 12 2 12C2 12 5.75 18.875 12 18.875C18.25 18.875 22 12 22 12ZM3.46625 12C4.07064 11.0814 4.7658 10.2259 5.54125 9.44625C7.15 7.835 9.35 6.375 12 6.375C14.65 6.375 16.8488 7.835 18.46 9.44625C19.2354 10.2259 19.9306 11.0814 20.535 12C20.4625 12.1087 20.3825 12.2288 20.2913 12.36C19.8725 12.96 19.2538 13.76 18.46 14.5538C16.8488 16.165 14.6487 17.625 12 17.625C9.35 17.625 7.15125 16.165 5.54 14.5538C4.76456 13.7741 4.07065 12.9186 3.46625 12Z"></path> <path d="M12 8.875C11.1712 8.875 10.3763 9.20424 9.79029 9.79029C9.20424 10.3763 8.875 11.1712 8.875 12C8.875 12.8288 9.20424 13.6237 9.79029 14.2097C10.3763 14.7958 11.1712 15.125 12 15.125C12.8288 15.125 13.6237 14.7958 14.2097 14.2097C14.7958 13.6237 15.125 12.8288 15.125 12C15.125 11.1712 14.7958 10.3763 14.2097 9.79029C13.6237 9.20424 12.8288 8.875 12 8.875ZM7.625 12C7.625 10.8397 8.08594 9.72688 8.90641 8.90641C9.72688 8.08594 10.8397 7.625 12 7.625C13.1603 7.625 14.2731 8.08594 15.0936 8.90641C15.9141 9.72688 16.375 10.8397 16.375 12C16.375 13.1603 15.9141 14.2731 15.0936 15.0936C14.2731 15.9141 13.1603 16.375 12 16.375C10.8397 16.375 9.72688 15.9141 8.90641 15.0936C8.08594 14.2731 7.625 13.1603 7.625 12Z"></path></svg>
                        </button>
                    </div>
                </div>

            </div>
            <div class="col-span-1 bg-yellow-200 flex items-center justify-center">
                <Poubelle class="size-6" />
            </div>
        </div>
        <!-- End Container Card -->
    </div>
</template>

