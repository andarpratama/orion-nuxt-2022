<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div>
    <Navigation />
    <div class="banner flex justify-center items-center">
      <h2 class="text-white text-4xl lg:text-5xl font-extrabold">
        Courts List
      </h2>
    </div>

    <div
      class="court-list mx-4 lg:mx-[165px] xl:mx-[240px] py-10 lg:py-20 mb-[40px]"
    >
      <div class="court-header flex justify-center gap-2 mb-6">
        <button
          @click="() => (activeCategory = 'all')"
          class="px-4 py-2 rounded-lg"
          :class="
            activeCategory === 'all'
              ? `bg-primary hover:bg-yellow-500 text-secondary`
              : `bg-gray-600 hover:bg-gray-700 text-gray-50`
          "
        >
          Semua
        </button>
        <button
          v-for="category in categories"
          :key="category.id"
          @click="() => (activeCategory = category.attributes.name)"
          class="px-4 py-2 rounded-lg"
          :class="
            activeCategory === category.attributes.name
              ? `bg-primary hover:bg-yellow-500 text-secondary`
              : `bg-gray-600 hover:bg-gray-700 text-gray-50`
          "
        >
          {{ category.attributes.name }}
        </button>
      </div>

      <!-- <div class="court-item w-full bg-white p-4 rounded-lg flex flex-col lg:flex-row mb-6 ">
        <img
          class="w-96 h-60 rounded-lg mb-4 lg:mb-0"
          src="https://images.unsplash.com/photo-1630420598913-44208d36f9af"
          alt="Court"
        />

        <div class="px-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-3xl font-bold">Lapangan 1</h2>
            <button class="bg-gray-900 rounded-lg text-white px-6 py-2">
              Booking
            </button>
            <NuxtLink
              class="bg-gray-900 rounded-lg text-white px-6 py-2"
              to="/court/1"
              >Booking</NuxtLink
            >
          </div>
          <div class="mb-2">
            <span class="py-1 px-4 rounded-xl bg-gray-900 text-yellow-300 mr-4"
              >VIP</span
            >
            <span class="font-bold text-xl">Rp 200.000 / Jam</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            itaque explicabo velit officia iste laudantium, necessitatibus vero
            dolore amet rem? Exercitationem id excepturi velit ducimus omnis
            accusantium ex. Eius, vero!
          </p>
        </div>
      </div> -->

      <div
        class="flex justify-center items-center"
        v-for="(court) in courts"
        :key="court.id"
      >
        <div
          v-if="
            activeCategory === court.attributes.category.data.attributes.name ||
            activeCategory === 'all'
          "
          class="court-item w-full bg-white p-4 rounded-lg flex flex-col lg:flex-row mb-6 max-w-[920px]"
        >
          <img
            class="w-96 h-60 rounded-lg mb-4 lg:mb-0"
            src="https://images.unsplash.com/photo-1630420598913-44208d36f9af"
            alt="court"
          />

          <div class="px-4">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-3xl font-bold">
                {{ court.attributes.name }}
              </h2>
              <NuxtLink
                :to="{ path: `/court/${court.id}` }"
                class="bg-gray-900 rounded-lg text-white px-6 py-2"
              >
                Booking
              </NuxtLink>
            </div>
            <div class="mb-2">
              <span
                class="py-1 px-4 rounded-xl bg-gray-900 text-yellow-300 mr-4"
                >{{ court.attributes.category.data.attributes.name }}</span
              >
              <span class="font-bold text-xl"
                >Rp {{ court.attributes.price }} / Jam</span
              >
            </div>
            <p>
              {{ court.attributes.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourtList',
  data() {
    return {
      courts: [],
      categories: [],
      activeCategory: 'all',
    }
  },
  async mounted() {
    try {
      // const response = await this.$strapi.find('courts')
      // const response = await this.$axios.$get(
      //   'http://localhost:1337/api/courts?populate=category'
      // )
      const response = await this.$strapi.find('courts', [['populate', '*']])
      // eslint-disable-next-line no-console

      this.courts = response.data
    } catch (error) {
      this.courts = []
    }
    try {
      const category = await this.$strapi.find('categories', [
        ['populate', '*'],
      ])
      // const category = await this.$axios.$get(
      //   'http://localhost:1337/api/categories'
      // )
      // eslint-disable-next-line no-console

      this.categories = category.data
    } catch (error) {
      this.categories = []
    }
  },
}
</script>

<style scoped>
.banner {
  background-image: url('/images/lapangan.png'),
    linear-gradient(to top, rgb(0, 0, 0), rgba(255, 255, 255, 0));
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  position: relative;
}

.banner::before {
  content: '';
  display: inline-block;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #0a192b, #0a192b00);
  position: absolute;
  bottom: 0;
}

@media only screen and (min-width: 768px) {
  .banner {
    height: 500px;
    background-position: 0 -110px;
  }
}
</style>
