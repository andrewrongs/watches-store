<script setup>
import { reactive, ref, computed } from "vue";
import { onMounted } from "vue";
import axios from "axios";

const items = ref([]);
const loading = ref(true);
const selectedCategory = ref('metal');

const categories = reactive([
  { id: 'metal', name: '金屬' },
  { id: 'nylon', name: '尼龍' },
  { id: 'leather', name: '皮革' }
]);

async function fetchImg() {
  try {
    loading.value = true;
    const res = await axios.get(
      "https://api.unsplash.com/photos/?client_id=dD3MhsFtrsZzl0-OLQLzCY-qKnG-UpNsn4Fv2oQKhWU"
    );
    const photoData = res.data;

    items.value = photoData.map((item) => ({ imagePath: item.urls.regular }));
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
}

onMounted(fetchImg);

const metal = reactive([
  {
    description: "SPB381",
    imageName: "Home1.jpeg",
  },
  {
    description: "SPB417",
    imageName: "Home2.jpeg",
  },
  {
    description: "SSJ013",
    imageName: "Home3.jpeg",
  },
  {
    description: "SJE089",
    imageName: "Home1.jpeg",
  },
]);

const leather = reactive([
  {
    description: "SUR472",
    imageName: "Home4.jpeg",
  },
  {
    description: "SUR461",
    imageName: "Home5.jpeg",
  },
  {
    description: "SPB329",
    imageName: "Home6.webp",
  },
]);

const nylon = reactive([
  {
    description: "SSB401",
    imageName: "Home7.jpeg",
  },
  {
    description: "SSA426",
    imageName: "Home8.jpeg",
  },
]);

const currentItems = computed(() => {
  switch(selectedCategory.value) {
    case 'metal':
      return metal;
    case 'nylon':
      return nylon;
    case 'leather':
      return leather;
    default:
      return metal;
  }
});

function getImageUrl(name) {
  return `img/${name}`;
}
</script>

<template>
  <div>
    <!-- 輪播圖 -->
    <v-carousel
      :height="dynamicHeight"
      hide-delimiters="false"
      :cycle="true"
      interval="800"
      progress="#eee"
      :show-arrows="false"
    >
      <v-carousel-item
        cover
        v-for="(item, index) in items"
        :key="index"
        :src="item.imagePath"
      >
      </v-carousel-item>
    </v-carousel>


    <v-container class="my-15">
      <!-- 簡短介紹 -->
      <v-row justify="center" class="text-center">
        <v-col cols="12" md="8">
          <h2 class="text-h4 font-weight-bold mb-6">精選系列</h2>
          <p class="text-subtitle-1">
            每一款腕錶都代表著我們對完美的追求，融合傳統工藝與現代設計，為您帶來獨特的時尚體驗
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mb-16 mt-12">
      <!-- 類別選擇器 -->
      <v-tabs
        v-model="selectedCategory"
        class="mt-6 mb-6"
        color="primary"
        grow
      >
        <v-tab
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
          class="text-none"
        >
          {{ category.name }}
        </v-tab>
      </v-tabs>
      <v-row>
        <v-col
          v-for="(item, index) in currentItems"
          :key="index"
          cols="12"
          sm="6"
          md="3"
          class="d-flex"
        >
          <v-card
            class="mx-auto product-card"
            width="100%"
            elevation="2"
          >
            <v-img
              :src="getImageUrl(item.imageName)"
              class="align-end"
              height="300"
              cover
            >
              <div class="overlay d-flex flex-column align-center justify-center">
                <v-btn
                  color="white"
                  variant="outlined"
                  size="small"
                  class="mb-2"
                  @click.stop="navigateToItem"
                >
                  View More
                </v-btn>
                <span class="text-white text-subtitle-1">{{ item.description }}</span>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomeMain',
  methods: {
    navigateToItem() {
      this.$router.push({ name: "ShopItem" });
    },
  },
  computed: {
    dynamicHeight() {
      switch (this.$vuetify.display.name) {
        case "xs":
          return 250;
        case "sm":
          return 350;
        case "md":
          return 450;
        default:
          return 450;
      }
    },
  },
};
</script>

<style scoped>
.product-card {
  position: relative;
  transition: transform 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-5px);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .overlay {
  opacity: 1;
}

.v-tabs {
  border-radius: 8px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.03);
}

.v-tab {
  letter-spacing: 1px;
  font-weight: 500;
}

.v-tab--selected {
  background: rgba(0, 0, 0, 0.05);
}

/* 針對手機版的優化 */
@media (max-width: 600px) {
  .product-card {
    margin-bottom: 16px;
  }
  
  .v-tabs {
    margin-bottom: 24px;
  }
}
</style>