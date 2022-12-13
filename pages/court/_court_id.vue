<template>
  <div>
    <Navigation />

    <div
      class="detail-court bg-secondary text-white min-h-screen mb-[80px] md:mb-[100px] px-[20px] md:px-[100px] lg:px-[165px] pt-[100px]"
    >
      <div
        class="detail-court__title font-bold text-[20px] md:text-[26px] lg:text-[32px]"
      >
        <h2>Detail Court</h2>
      </div>
      <div
        class="detail-court__wrapper flex flex-col items-center gap-[20px] w-full bg-white bg-opacity-20 p-[10px] md:p-[20px] lg-[p-30px] rounded-lg"
      >
        <div class="detail-court__thumbnailh-full flex flex-col justify-center">
          <picture>
            <img
              class="rounded-lg"
              src="/images/futsal_court.png"
              alt="detail court"
            />
          </picture>
        </div>
        <div class="detail-court__content w-full">
          <div class="detail-court__content__wrapper flex flex-col">
            <div class="flex justify-between mb-[5px]">
              <div class="detail-court__content__title">
                <h2
                  class="text-[20px] md:text-[26px] lg:text-[32px]"
                  v-text="courtDetail.name"
                ></h2>
              </div>
              <div class="detail-court__content__price text-[20px]">
                <span v-text="courtDetail.price + ` / Jam`"></span>
              </div>
            </div>
            <div class="detail-court__content__subtitle text-[14px]">
              <p v-text="courtDetail.description"></p>
            </div>
          </div>
        </div>
        <div class="detail-court__form w-full">
          <form
            ref="form"
            class="w-full"
            @submit.prevent="handleSubmitCheckout"
          >
            <label for="date">Tanggal Booking</label>
            <div
              class="flex items-center border-2 border-slate-400 focus:border-slate-100 mb-3 py-2 px-3 rounded-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>

              <input
                id="date"
                class="pl-2 w-full outline-none border-none bg-transparent text-white"
                type="date"
                name="date"
                v-model="selectedDate"
                v-on:change="handleChangeDate(selectedDate)"
                placeholder="tanggal booking"
              />
            </div>
            <label for="date">Jam Tersedia</label>
            <div
              class="flex items-center border-2 border-slate-400 focus:border-slate-100 mb-3 py-2 px-3 rounded-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>

              <select
                name="bookingTime"
                id="bookingTime"
                class="bg-transparent w-full"
                v-model="selectedTime"
              >
                <option
                  v-for="time in availableTime"
                  v-bind:key="time.id"
                  v-bind:value="time.id"
                  class="bg-secondary"
                >
                  {{ formatDateRawToYMD(time.attributes.time) }} WIB
                </option>
              </select>
            </div>

            <button
              type="submit"
              class="block w-full bg-indigo-600 mt-1 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourtDetail',
  async asyncData({ $axios, params, $strapi }) {
    // const detail = await $axios.$get(
    //   `http://localhost:1337/api/courts/${params.court_id}`
    // )
    const detail = await $strapi.findOne('courts', params.court_id, [
      ['populate', '*'],
    ])
    // eslint-disable-next-line no-console

    // const masterTime = await $axios.$get(
    //   `http://localhost:1337/api/master-times`
    // )
    const masterTime = await $strapi.find('master-times', [['populate', '*']])

    const getNow = () => {
      const today = new Date()
      const date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate()
      const time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      const dateTime = date + ' ' + time
      return dateTime
    }

    const orderedTime = await $axios.$get(`http://localhost:1337/api/orders`, {
      params: {
        populate: ['court', 'master_time'],
        'filters[date][$eq]': getNow(),
      },
    })

    orderedTime.data.map((item) => {
      return masterTime.data.splice(
        masterTime.data.findIndex(
          (e) => e.id === item.attributes.master_time.data.id
        ),
        1
      )
    })
    // eslint-disable-next-line no-console
    return {
      listOrder: orderedTime.data,
      courtDetail: detail.data.attributes,
      availableTime: masterTime.data,
    }
  },
  data() {
    return {
      selectedDate: new Date(),
      credentials: null,
      selectedTime: null,
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
    handleChangeDate: async function () {
      // const masterTime = await this.$axios.$get(
      //   `http://localhost:1337/api/master-times`
      // )

      const masterTime = await this.$strapi.find('master-times', [
        ['populate', '*'],
      ])

      const orderedTime = await this.$axios.$get(
        `http://localhost:1337/api/orders`,
        {
          params: {
            populate: ['court', 'master_time'],
            'filters[date][$eq]': this.selectedDate,
          },
        }
      )

      orderedTime.data.map((item) => {
        return masterTime.data.splice(
          masterTime.data.findIndex(
            (e) => e.id === item.attributes.master_time.data.id
          ),
          1
        )
      })

      this.availableTime = masterTime.data
    },
    handleSubmitCheckout: async function () {
      const body = {
        data: {
          master_time: this.selectedTime,
          users_permissions_user: this.credentials.id,
          date: this.selectedDate,
          court: this.$route.params.court_id,
          code_booking: 'SF-' + Date.now(),
        },
      }

      await this.$axios
        .$post(`http://localhost:1337/api/orders`, { ...body })
        .then((response) => {
          this.$router.push({
            path: `/order/${response.data.id}`,
          })
        })
    },
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
}
</script>

<style scoped></style>
