<template>
  <div class="wrapper min-h-screen flex flex-col justify-center items-center">
    <div
      class="list-order w-full bg-secondary flex flex-col items-center justify-center py-[100px] px-[10px] md:px-[100px] lg:px-[165px]"
    >
      <div class="list-order__wrapper flex flex-col items-center gap-[20px]">
        <div
          class="list-order__item w-full p-[10px] flex flex-col md:flex-row justify-center bg-slate-300 rounded-lg gap-[20px]"
          v-for="order in listOrder"
          :key="order.id"
        >
          <div class="list-order__item__thumbnail w-full md:w-[30%] rounded-md">
            <picture>
              <img class="rounded-lg" src="/images/logo.png" alt="court" />
            </picture>
          </div>

          <div
            class="list-order__item__content w-full md:w-[70%] flex flex-col justify-center gap-[20px]"
          >
            <div class="list-order__item__content__title">
              <h2 class="text-[32px] font-bold text-secondary">
                {{ order.attributes.court.data.attributes.name }}
              </h2>
            </div>
            <div class="list-order__item__content__subtitle">
              <h4 class="text-[20px] text-gray-700">
                Tanggal {{ formatDateRawToYMD(order.attributes.date) }} Jam
                {{
                  formatDateRawToYMD(
                    order.attributes.master_time.data.attributes.time
                  )
                }}
                WIB
              </h4>
            </div>
            <div class="list-order__item__content__status">
              <p
                class="text-[20px]"
                :class="
                  order.attributes.is_paid ? 'text-green-700' : 'text-red-700'
                "
              >
                {{ order.attributes.is_paid ? 'Lunas' : 'Belum Bayar' }}
              </p>
            </div>
            <div class="list-order__item__content__button">
              <NuxtLink :to="{ path: `/order/${order.id}` }">
                <button
                  class="bg-secondary px-[20px] py-[10px] rounded-lg text-primary font-bold"
                >
                  Detail
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <EmptyMessage v-if="listOrder.length === 0" />
      </div>
    </div>
  </div>
</template>

<script>
import EmptyMessage from '../../components/EmptyMessage.vue'

export default {
  name: 'OrderList',
  data() {
    return {
      listOrder: [],
      credentials: null,
    }
  },
  async mounted() {
    try {
      const response = await this.$axios.$get(
        'http://localhost:1337/api/users/me',
        {
          headers: {
            Authorization: 'Bearer ' + this.getCookie('jwt'),
          },
        }
      )
      this.credentials = response
    } catch (error) {
      this.credentials = null
      this.$router.push({
        path: `/auth/login`,
      })
    }
    await this.$axios
      .$get(`http://localhost:1337/api/orders`, {
        params: {
          'filters[users_permissions_user][id][$eq]': this.credentials.id,
          populate: ['court', 'master_time', 'users_permissions_user'],
        },
      })
      .then((response) => {
        this.listOrder = response.data
      })
  },
  methods: {
    getCookie(name) {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop().split(';').shift()
    },
    formatDateRawToYMD(dateRaw) {
      return dateRaw
        .replace(/T/, ' ')
        .replace(/\..+/, '')
        .replace('00:00:00', '')
    },
  },
  components: { EmptyMessage },
}
</script>

<style scoped></style>
