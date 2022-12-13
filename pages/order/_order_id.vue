<template>
  <div>
    <div class="checkout bg-secondary h-full min-h-screen">
      <div
        class="checkout__wrapper p-[20px] min-h-screen flex flex-col justify-center md:p-[100px] lg:px-[300px]"
      >
        <div
          class="bg-white bg-opacity-25 backdrop-blur-lg rounded-lg mt-[3s0px]"
        >
          <div
            class="checkout__title text-center text-[32px] text-white font-bold"
          >
            <h2>Detail Order</h2>
          </div>
          <div class="checkout__detail flex flex-col">
            <div class="checkout__detail__wrapper p-[20px]">
              <div class="checkout__detail__item text-left w-full">
                <div
                  class="checkout__detail__item__title text-white bg-secondary px-3 rounded-lg"
                >
                  <h3>Court</h3>
                </div>

                <div
                  class="checkout__detail__item__value p-3 text-[14px] text-white"
                >
                  <p>{{ orderDetail.court.data.attributes.name }}</p>
                </div>
              </div>
              <div class="checkout__detail__item text-left w-full">
                <div
                  class="checkout__detail__item__title text-white bg-secondary px-3 rounded-lg"
                >
                  <h3>Jumlah Jam</h3>
                </div>

                <div
                  class="checkout__detail__item__value p-3 text-[14px] text-white"
                >
                  <p>1 Jam</p>
                </div>
              </div>
              <div class="checkout__detail__item text-left w-full">
                <div
                  class="checkout__detail__item__title text-white bg-secondary px-3 rounded-lg"
                >
                  <h3>Waktu</h3>
                </div>

                <div
                  class="checkout__detail__item__value p-3 text-[14px] text-white"
                >
                  <p>
                    {{
                      formatDateRawToYMD(
                        orderDetail.master_time.data.attributes.time
                      )
                    }}
                    WIB
                  </p>
                </div>
              </div>
              <div class="checkout__detail__item text-left w-full">
                <div
                  class="checkout__detail__item__title text-white bg-secondary px-3 rounded-lg"
                >
                  <h3>Tanggal</h3>
                </div>

                <div
                  class="checkout__detail__item__value p-3 text-[14px] text-white"
                >
                  <p>{{ orderDetail.date }}</p>
                </div>
              </div>
              <div class="checkout__detail__item text-left w-full">
                <div
                  class="checkout__detail__item__title text-white bg-secondary px-3 rounded-lg"
                >
                  <h3>Harga</h3>
                </div>

                <div
                  class="checkout__detail__item__value p-3 text-[14px] text-white"
                >
                  <p>Rp. {{ orderDetail.court.data.attributes.price }}</p>
                </div>
              </div>
              <div class="checkout__detail__item text-left w-full">
                <div
                  class="checkout__detail__item__title text-white bg-secondary px-3 rounded-lg"
                >
                  <h3>Status</h3>
                </div>

                <div
                  class="checkout__detail__item__value p-3 text-[14px] text-white"
                >
                  <p>{{ orderDetail.is_paid ? 'Lunas' : 'Belum terbayar' }}</p>
                </div>
              </div>
              <div v-if="!orderDetail.is_paid" class="checkout__detail__button">
                <form
                  ref="form"
                  class="w-full"
                  @submit.prevent="handleSubmitPay"
                >
                  <button
                    type="submit"
                    class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                  >
                    Bayar
                  </button>
                </form>
              </div>
              <div
                v-if="orderDetail.is_paid && orderDetail.code_booking"
                class="checkout__detail__button"
              >
                <div
                  class="code_booking text-[40px] text-primary font-extrabold text-center"
                >
                  <h2>{{ orderDetail.code_booking }}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  data() {
    return {
      credentials: null,
    }
  },
  async asyncData({ $axios, params, $route }) {
    const orderDetail = await $axios.$get(
      `http://localhost:1337/api/orders/${params.order_id}`,
      {
        params: {
          populate: ['court', 'master_time'],
        },
      }
    )

    // eslint-disable-next-line no-console
    return {
      orderDetail: orderDetail.data.attributes,
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
    handleSubmitPay: async function () {
      const body = {
        data: {
          is_paid: true,
        },
      }

      await this.$axios
        .$put(
          `http://localhost:1337/api/orders/${this.$route.params.order_id}`,
          { ...body }
        )
        .then((response) => {
          this.$router.push({
            path: `/checkout-success`,
          })
        })
    },
  },
}
</script>

<style scoped>
.banner {
  background-image: url('/images/lapangan.png');
  background-position: -80px 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  position: relative;
}

.banner::before {
  content: '';
  display: inline-block;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, rgb(0, 0, 0), rgba(255, 255, 255, 0));
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
