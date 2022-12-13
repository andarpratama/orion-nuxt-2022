<template>
  <header>
    <div
      class="fixed top-0 900 w-full z-10 flex justify-between items-center px-[10px] md:px-[20px] lg:px-[40px] bg-secondary bg-opacity-20 py-[20px]"
    >
      <div class="flex">
        <NuxtLink to="/">
          <picture>
            <img
              class="w-[50px]"
              src="/images/logo.png"
              alt="sadulur futsal"
            /> </picture
        ></NuxtLink>
      </div>

      <div
        class="text-[12px] flex gap-[10px] justify-between items-center md:text-[15px] md:px-[50px] md:gap-[25px] md:justify-end lg:gap-[40px]"
      >
        <NuxtLink class="text-white font-medium" to="/">Home</NuxtLink>
        <NuxtLink class="text-white font-medium" to="/court">Harga</NuxtLink>

        <div v-if="isLogin">
          <NuxtLink class="text-white font-medium pr-[20px]" to="/order">Histori Order</NuxtLink>
          <button class="text-white font-medium" type="button" @click='onLogout' >Logout</button>
        </div>
        <div v-else>
          <NuxtLink class="text-white pr-[20px] font-medium" to="/auth/register"
            >Daftar</NuxtLink>
          <NuxtLink
            class="font-medium px-[20px] py-[5px] text-secondary bg-primary rounded-2xl"
            to="/auth/login"
            >Login</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavigationComponent',
  data(){
    return {
      message: 'test',
      isLogin: false
    }
  },
  async mounted(){
    try {
      const response = await this.$axios.$get('http://localhost:1337/api/users/me', {
      headers: {
        Authorization: 'Bearer ' + this.getCookie('jwt')
      }
    })

    this.message = 'Hi ' + response.fullname
    this.isLogin = true;
    } catch (error) {
      this.isLogin = false;
      this.message = 'You are not logged'
    }
  },
  methods: {
    getCookie(name){
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    },

    eraseCookie(name) {
      document.cookie = name+'=; Max-Age=-99999999;';
    },

    onLogout(){
      const logoutConfirmation = confirm('Are you sure to logout?');
      // eslint-disable-next-line no-console
      if(logoutConfirmation) this.doLogout();
    },

    doLogout(){
      this.eraseCookie('jwt')
      this.isLogin = false;
    }
  }

}
</script>
