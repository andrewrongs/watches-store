<template>
  <div>
    <v-container class="mb-16 mt-16">
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-img src="/img/InfoImg1.jpg" class="rounded-lg" height="500" cover></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <div class="info-content pa-6">
            <h2 class="text-h4 mb-8">Our Story Is Your Story</h2>
            <p class="text-body-1 mb-6">
              Founded in 1980, We are advocates for individuality. At the core of our brand, we seek to inspire, continually exploring new ways to build upon our collaborative community and provide a platform to share the stories of passionate creators.
            </p>
            <p class="text-body-1 mb-8">
              Each timepiece is designed to be cherished—to collect stories, to live a long life, and to be rediscovered season after season. With a vision anchored in self-expression, we aim to form inclusive collections.
            </p>
            <v-btn color="primary" variant="outlined" size="large">
              SHOP NOW
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mb-16">
      <v-row align="center">
        <v-col cols="12" md="6">
          <div class="info-content pa-6">
            <h2 class="text-h4 mb-8">We are a lifestyle brand</h2>
            <p class="text-body-1 mb-6">
              We believe that a watch is more than just a timepiece – it's a statement of personal style and a companion in life's journey. Our commitment to quality craftsmanship and innovative design has made us a trusted name in the industry.
            </p>
            <p class="text-body-1 mb-6">
              Every detail of our watches is carefully considered, from the selection of premium materials to the precision of our movements. We combine traditional watchmaking expertise with contemporary aesthetics to create timepieces that are both functional and beautiful.
            </p>
            <p class="text-body-1 mb-8">
              Join us in celebrating the art of timekeeping and discover a watch that reflects your unique story.
            </p>
            <v-btn color="primary" variant="outlined" size="large">
              EXPLORE MORE
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <v-img src="/img/InfoImg2.jpg" class="rounded-lg" height="500" cover></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "InfoMain",
};
</script>
