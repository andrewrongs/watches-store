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
    <v-row class="pb-6 pt-6 px-10" no-gutters>
      <v-col class="mx-auto" cols="12">
        <v-btn></v-btn>
      </v-col>
      <v-col class=" mt-4" cols="4">
        <v-btn
          v-for="media in socialMedias"
          :key="media"
          class="mx-1"
          :icon="media.icon"
          :href="media.link"
          variant="text"
          target="_blank"
        ></v-btn>
      </v-col>
      <v-col class=" text-caption" cols="4">
        <strong class="d-block"><v-icon class="mx-2">mdi-store</v-icon> (04) 361 - 2345</strong>
        <strong class="d-block"><v-icon class="mx-2">mdi-mail</v-icon> fgrt9797@yahoo.com.tw</strong>
        <strong><v-icon class="mx-2">mdi-phone</v-icon> (04) 361 - 2345</strong>
      </v-col>
      <v-col class="text-caption" cols="4">
        <strong class="d-block"><v-icon class="mx-2">mdi-store</v-icon> (04) 361 - 2345</strong>
        <strong class="d-block"><v-icon class="mx-2">mdi-mail</v-icon> fgrt9797@yahoo.com.tw</strong>
        <strong><v-icon class="mx-2">mdi-phone</v-icon> (04) 361 - 2345</strong>
      </v-col>

      <v-col class="text-center text-caption mt-2 mb-5 border-t-sm pt-5" cols="12">
        <strong>© Henlex's Store. All Rights Reserved.  <a href="https://github.com/andrewrongs" class="font-weight-black" target="_blank">andrewrongs</a></strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
