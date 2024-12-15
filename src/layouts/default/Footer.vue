<script setup>
import { reactive } from "vue";

const socialMedias = reactive([
    {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/",
    },
    {
        icon: "mdi-github",
        link: "https://github.com/andrewrongs",
    },
    {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/",
    },
    {
        icon: "mdi-youtube",
        link: "https://www.youtube.com/",
    },
]);
</script>

<template>
    <v-footer rounded style="background: linear-gradient(to left, #e2e2e2, #f7f5f5ce)">
        <v-row class="pb-6 pt-6 px-10 text-center" no-gutters>
            <v-col cols="12" md="4" class="mb-6">
                <h2 class="text-h6 font-weight-bold mb-4">ABOUT Henlex's</h2>
                <div class="text-body-2">
                    <strong class="mb-2 d-block">Henlex's is a restaurant founded in 2001.</strong>
                    <strong class="mb-2 d-block">Brand sirit xxxxxxxxxx please xxdsd</strong>
                    <strong>Start your shoing</strong>
                </div>
            </v-col>
            <v-col cols="12" md="4" class="mb-6">
                <h2 class="text-h6 font-weight-bold mb-4">CONTACT US</h2>
                <div class="text-body-2">
                    <div class="d-flex align-center justify-center mb-2">
                        <v-icon size="small" class="mr-2">mdi-store</v-icon>
                        <span>(04) 361 - 2345</span>
                    </div>
                    <div class="d-flex align-center justify-center mb-2">
                        <v-icon size="small" class="mr-2">mdi-mail</v-icon>
                        <span>fgrt9797@yahoo.com.tw</span>
                    </div>
                    <div class="d-flex align-center justify-center">
                        <v-icon size="small" class="mr-2">mdi-phone</v-icon>
                        <span>(04) 361 - 2345</span>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4" class="mb-6">
                <h2 class="text-h6 font-weight-bold mb-4 pt-x2">SHARE WITH US</h2>
                <v-btn v-for="media in socialMedias" :key="media" class="mx-2" :icon="media.icon" :href="media.link"
                    variant="text" target="_blank"></v-btn>
            </v-col>
            <v-col class="text-center text-caption mt-2 mb-5 border-t-sm pt-6" cols="12">
                <strong>© Henlex's Store. All Rights Reserved. <a href="https://github.com/andrewrongs"
                        class="font-weight-black" target="_blank">andrewrongs</a></strong>
            </v-col>
        </v-row>
    </v-footer>
</template>
