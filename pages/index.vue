<template>
  <div class="wrapper flex flex-col justify-center">
    <div class="hero">
      <Banner />
    </div>
    <div class="list-court flex px-[10px] text-white md:px-[100px] lg-[165px]">
      <div class="list-court__wrapper flex flex-col justify-center">
        <div
          class="bg-slate-400 bg-opacity-25 backdrop-blur-lg p-5 rounded-md md:ml-[50%] md:w-1/2"
        >
          <div class="list-court__title text-[18px] font-medium md:text-[32px]">
            <h2>Futsal Court Terbaik di kelasnya.</h2>
          </div>
          <div class="list-court__subtitle text-[14px] md:text-[20px]">
            <h4><span class="text-primary">Sadulur</span> Futsal</h4>
          </div>
          <div class="list-court__list text-[13px] font-bold md:text-[22px]">
            <ul class="pl-[20px]">
              <li class="font-bold">
                <span class="text-primary">2</span> Court
                <span class="text-primary">VVIP</span>
              </li>
              <li>
                <span class="text-primary">2</span> Court
                <span class="text-primary">VVIP</span>
              </li>
              <li>
                <span class="text-primary">2</span> Court
                <span class="text-primary">VVIP</span>
              </li>
              <li>
                <span class="text-primary">2</span> Court
                <span class="text-primary">VVIP</span>
              </li>
            </ul>
          </div>
          <div
            class="list-court__description text-[12px] md:text-[16px] lg:text-[20px]"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dicta
              expedita in consequatur quos consectetur molestiae enim accusamus,
              unde exercitationem soluta fugiat sunt similique? Ea minus
              expedita architecto obcaecati qui.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="always-on h-full px-[10px] md:px-[100px] lg:px-[165px]">
      <div class="always-on__wrapper h-screen flex flex-col justify-center">
        <div
          class="bg-slate-200 bg-opacity-25 backdrop-blur-lg p-5 rounded-md flex flex-col text-white justify-center w-full gap-[15px] md:w-2/3 lg:w-1/2"
        >
          <div
            class="always-on__title text-[16px] leading-[1.2em] md:text-[24px] lg:text-[32px]"
          >
            <h2>Always On</h2>
          </div>
          <div
            class="always-on__subtitle text-[14px] md:text-[24px] lg:text-[28px]"
          >
            <h4><span class="text-primary">Sadulur </span>Futsal</h4>
          </div>
          <div
            class="always-on__desc text-[16px] font-bold md:text-[24px] lg:text-[32px]"
          >
            <h2>Booking Time <span class="text-primary">24 Jam</span></h2>
          </div>
          <div
            class="always-on__sub_desc text-[12px] md:text-[16px] lg:text-[20px]"
          >
            <p>
              Court Futsal dengan Jam buka 7/24 , Berkeringatlah Tanpa
              mengganggu Aktifitasmu.
            </p>
          </div>
          <div class="always-on__button w-1/2">
            <button
              class="px-[20px] py-[5px] border-2 border-primary text-primary w-full rounded"
            >
              Lihat
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="divider">
      <div
        class="divide__wrapper flex py-[40px] px-[10px] bg-primary md:px-[100px] lg:px-[165px]"
      >
        <div class="flex flex-col items-center w-full gap-[20px]">
          <div
            class="divider__title font-bold text-[16px] md:text-[24px] lg:text-[32px]"
          >
            <h2>Hubungi Kami di Whatsapp.</h2>
          </div>
          <div
            class="divider__button w-1/2 max-w-[300px] text-center flex justify-center"
          >
            <button
              class="px-[20px] py-[5px] border-2 bg-secondary border-secondary text-primary w-full rounded"
            >
              Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="standard h-full px-[10px] md:px-[100px] lg:px-[165px]">
      <div class="standard__wrapper h-screen flex flex-col justify-center">
        <div
          class="p-5 rounded-md flex flex-col text-white justify-center text-center"
        >
          <div
            class="standard__title text-[18px] text-primary font-bold md:text-[28px] lg:text-[38px]"
          >
            <h2>Dengan Kelas Standar Internasional</h2>
          </div>

          <div
            class="standard__sub_desc text-[14px] md:text-[18px] lg:text-[24px]"
          >
            <p>Membuat Permainanmu semakin berkembang.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      message: 'test',
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
      this.message = 'Hi ' + response.fullname
    } catch (error) {
      this.message = 'You are not logged'
    }
  },
  methods: {
    getCookie(name) {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop().split(';').shift()
    },
  },
}
</script>

<style scoped>
.list-court {
  background-image: url('/images/futsal_court.png');
  background-size: cover;
  min-height: 100vh;
}
.always-on {
  background-image: url('/images/always-on.png');
  background-size: cover;
  min-height: 100vh;
}
.standard {
  background-image: url('/images/standard.png');
  background-size: cover;
  min-height: 100vh;
  background-position: bottom center;
}
</style>
